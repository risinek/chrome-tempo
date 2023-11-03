let timeActive = 0
let activeSince = Date.now()
let active = true
// const PERIOD_MS = 900_000
const API_KEY = process.env.API_KEY
const PERIOD_MS = 300_000
logger('loaded')

chrome.idle.onStateChanged.addListener(function(newState) {
    logger(newState)
    switch (newState) {
        case 'active':
            start()
            break
        case 'idle':
        case 'locked':
            stop()
            break

    }
})

chrome.windows.onFocusChanged.addListener(
    function (id) {
        if (id === chrome.windows.WINDOW_ID_NONE) {
            logger('lost focus')
            stop()
        }
        else {
            logger('focus')
            start()
        }
    }
)

chrome.alarms.create(
    "checkpoint",
    {
        periodInMinutes: PERIOD_MS / 60_000,
    }
)

chrome.alarms.onAlarm.addListener(function(alarm) {
    logger('checkpoint')
    if(active){
        timeActive += Date.now() - activeSince
    }
    activeSince = Date.now()
    logger('time active: ' + timeActive)
    if(timeActive > PERIOD_MS / 2){
        report()
    }
    timeActive = 0
})

async function report(){
    logger('report')
    const response = await fetch('https://api.tempo.io/pulse/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({"source":"vscode", "trigger":"save", "timestamp": new Date().toISOString(), "groupId":"browser", "searchStrings":[]})
    })
}
function logger(message){
    console.log(new Date().toISOString() + ' ' + message)
}

function stop(){
    if(active){
        timeActive += Date.now() - activeSince
        active = false
    }
    logger('time active: ' + timeActive)
}

function start(){
    if(!active){
        activeSince = Date.now()
        active = true
    }
    logger('time active: ' + timeActive)
}
