### Refs
* https://help.tempo.io/cloud/en/tempo-timesheets/logging-your-time/logging-time-with-tempo-automation/what-is-tempo-automation-.html
### Suggestion config
Found in `https://app.tempo.io/rest/preferences/2/user`
```json
{
        "key": "suggestionsConfig",
        "value": {
            "minimumGapMinutes": 15,
            "hideIncompleteSuggestions": false,
            "segmentGranularityMinutes": 15,
            "providers": [
                {
                    "id": "GITHUB",
                    "label": "Github",
                    "value": "github",
                    "shouldExclude": false
                },
                {
                    "label": "Android Studio",
                    "id": "ANDROIDSTUDIO",
                    "value": "androidstudio",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "Bitbucket",
                    "id": "BITBUCKET",
                    "value": "bitbucket",
                    "should_exclude": false
                },
                {
                    "label": "Confluence",
                    "id": "CONFLUENCE",
                    "value": "confluence",
                    "should_exclude": false
                },
                {
                    "label": "Git",
                    "id": "GIT",
                    "value": "git",
                    "should_exclude": false
                },
                {
                    "label": "GoLand",
                    "id": "GOLAND",
                    "value": "goland",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "Google Calendar",
                    "id": "GOOGLE_CALENDAR",
                    "value": "google-calendar",
                    "should_exclude": false
                },
                {
                    "label": "IntelliJ",
                    "id": "INTELLIJ",
                    "value": "intellij",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "JetBrains",
                    "id": "JETBRAINS",
                    "value": "jetbrains",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "Jira",
                    "id": "JIRA",
                    "value": "jira",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "Office365 Calendar",
                    "id": "OFFICE_365",
                    "value": "o365-calendar",
                    "should_exclude": false
                },
                {
                    "label": "PhpStorm",
                    "id": "PHPSTORM",
                    "value": "phpstorm",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "Planner",
                    "id": "PLANNER",
                    "value": "planner",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "PyCharm",
                    "id": "PYCHARM",
                    "value": "pycharm",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "RubyMine",
                    "id": "RUBYMINE",
                    "value": "rubymine",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "Visual Studio Code",
                    "id": "VSCODE",
                    "value": "vscode",
                    "should_exclude": false,
                    "shouldExclude": false
                },
                {
                    "label": "WebStorm",
                    "id": "WEBSTORM",
                    "value": "webstorm",
                    "should_exclude": false,
                    "shouldExclude": false
                }
            ]
        }
    }
```

### Related part of the code from Tmesheet page
```js
89110: function(e, t, n) {
  "use strict";
  n.d(t, {
    E6: function() {
      return b
    },
    EP: function() {
      return u
    },
    F0: function() {
      return _
    },
    Jw: function() {
      return c
    },
    WV: function() {
      return T
    },
    X5: function() {
      return g
    },
    YY: function() {
      return m
    },
    bD: function() {
      return f
    },
    fc: function() {
      return I
    },
    iv: function() {
      return y
    },
    mT: function() {
      return d
    },
    n5: function() {
      return E
    },
    tY: function() {
      return v
    },
    vt: function() {
      return h
    }
  });
  var r = n(63670)
    , o = n(81833)
    , a = n(69542)
    , i = n(9755)
    , s = n(99991);
  const {ISO_DATE_TIME: l} = o.DateFormat
    , u = e=>({
    vscode: (0,
      r.Iu)("tempo.suggested.activity.vscode"),
    intellij: (0,
      r.Iu)("tempo.suggested.activity.intellij"),
    jetbrains: (0,
      r.Iu)("tempo.suggested.activity.jetbrains"),
    bitbucket: (0,
      r.Iu)("tempo.suggested.activity.bitbucket"),
    task_comment: (0,
      r.Iu)("tempo.suggested.activity.comment"),
    task_status: (0,
      r.Iu)("tempo.suggested.activity.status"),
    task_create: (0,
      r.Iu)("tempo.suggested.activity.create"),
    task_assignee: (0,
      r.Iu)("tempo.suggested.activity.assignee"),
    task_priority: (0,
      r.Iu)("tempo.suggested.activity.priority"),
    "recently-logged": (0,
      r.Iu)("tempo.suggested.activity.recently.logged"),
    confluence: (0,
      r.Iu)("tempo.suggested.activity.confluence"),
    git: (0,
      r.Iu)("tempo.suggested.activity.git"),
    goland: (0,
      r.Iu)("tempo.suggested.activity.goland"),
    "google-calendar": (0,
      r.Iu)("tempo.suggested.activity.google-calendar"),
    "o365-calendar": (0,
      r.Iu)("tempo.suggested.activity.o365-calendar"),
    phpstorm: (0,
      r.Iu)("tempo.suggested.activity.phpstorm"),
    pycharm: (0,
      r.Iu)("tempo.suggested.activity.pycharm"),
    rubymine: (0,
      r.Iu)("tempo.suggested.activity.rubymine"),
    webstorm: (0,
      r.Iu)("tempo.suggested.activity.webstorm"),
    jira: (0,
      r.Iu)("tempo.suggested.activity.jira"),
    androidstudio: (0,
      r.Iu)("tempo.suggested.activity.androidstudio"),
    pythia: (0,
      r.Iu)("tempo.suggested.activity.pythia.picked"),
    planner: (0,
      r.Iu)("tempo.suggested.activity.planner"),
    github: (0,
      r.Iu)("tempo.suggested.activity.github")
  }[e])
    , c = Object.entries(i).map((([e,t])=>({
    id: e,
    label: u(t),
    value: t,
    shouldExclude: !1
  })))
    , d = {
    DEFAULT: 1,
    PYTHIA: 2,
    MIK: 3
  }
    , p = {
    minimumGapMinutes: 15,
    hideIncompleteSuggestions: !1,
    segmentGranularityMinutes: 15,
    providers: c
  }
    , m = (e={})=>{
    const t = (null == e ? void 0 : e.providers) ? null == e ? void 0 : e.providers.map((e=>e.id)) : [];
    return {
      ...p,
      ...e,
      providers: [...c.filter((e=>!t.includes(e.id))), ...(null == e ? void 0 : e.providers) || []]
    }
  }
    , f = e=>{
    if (!e){return [];
    }
    const t = e.map((({sourceTrigger: e})=>e))
      , n = [...new Set(e.map((({sourceSystem: e})=>e))), ...new Set(t)].map(u).filter((e=>void 0 !== e));
    return 0 === n.length && t.includes("task_navigation") ? [(0,
      r.Iu)("tempo.suggested.activity.navigation")] : n
  }
    , E = e=>(e && "function" == typeof e.toJS ? e.toJS() : e).filter((({shouldExclude: e})=>e)).map((({value: e})=>e))
    , g = async({dateFrom: e, dateTo: t, searchString: n, suggestionStrategy: r}={})=>await (0,
    a.safePromise)((0,
    a.v_)({
    url: "/rest/suggestions/tasks/search",
    data: {
      from: e,
      to: t || e,
      excludedProviders: [i.GOOGLE_CALENDAR, i.OFFICE_365],
      searchString: n,
      strategy: r
    }
  }), [])
    , h = async({dateFrom: e, dateTo: t, suggestionsConfig: n={}})=>{
    if (!e){return [];
    }
    const {providers: r} = n
      , i = await (0,
      a.safePromise)((0,
      a.U2)({
      url: "/rest/suggestions/",
      serializeParams: !0,
      params: {
        from: (0,
          o.WU)(e),
        to: (0,
          o.WU)(t || e),
        minimumGapMinutes: 15,
        segmentGranularityMinutes: 15,
        excludedProviders: E(r || [])
      }
    }), []);
    return (async e=>e.map((e=>({
      ...e,
      started: (0,
        o.WU)(e.started, l),
      groupId: e.groupId,
      suggestedTaskId: e.task.id,
      suggestionReasons: f(e.checkpoints)
    }))))((0,
      s.c6)(i))
  }
    , v = {
    ACCEPTED: "ACCEPTED",
    ACCEPTED_MODIFIED: "ACCEPTED",
    REJECTED: "REJECTED",
    IGNORED: "IGNORED",
    NOT_DISPLAYED: "NOT_DISPLAYED",
    MODIFIED: "MODIFIED"
  }
    , _ = async({worklogs: e, suggestionOutcomes: t=[]})=>{
    if (0 === (null == t ? void 0 : t.length)){return new Promise((e=>{
        e({})
      }
    ));
    }
    const n = null == e ? void 0 : e.map((e=>t.map((t=>({
      displayOrder: t.displayOrder,
      modelVersion: t.suggestionModelVersion,
      modelRevision: t.suggestionModelRevision,
      outcome: t.suggestionOutcome,
      taskId: t.suggestedTaskId,
      worklogId: null == e ? void 0 : e.tempoWorklogId
    })))));
    return (0,
      a.v_)({
      url: "/rest/suggestions/suggestion-outcomes/tasks",
      data: n
    })
  }
    , y = async({started: e, checkpoints: t=[], timeSpentSeconds: n, groupId: r, outcome: i, modelVersion: s, modelRevision: l, worklogId: u="", suggestedTaskId: c="", suggestionsConfig: d={}})=>{
    const {providers: p} = d
      , m = [...new Set(t.map((({sourceSystem: e})=>e)))]
      , f = (0,
      o.sG)(e)
      , g = (0,
      o.IH)(e, n, o.DATE_UNIT_TYPES.SECONDS);
    return Promise.all(m.map((e=>(0,
      a.v_)({
      url: "/rest/suggestions/suggestion-outcomes/",
      data: {
        startTime: f,
        endTime: g,
        sourceSystem: e,
        groupId: r,
        modelVersion: s,
        modelRevision: l,
        worklogId: u,
        outcome: i,
        suggestedTaskId: c,
        suggestionQueryParams: {
          minimumGapMinutes: 15,
          segmentGranularityMinutes: 15,
          excludedProviders: E(p || [])
        }
      }
    }))))
  }
    , T = async({started: e, checkpoints: t, timeSpentSeconds: n, groupId: r, modelVersion: o, modelRevision: a, suggestedTaskId: i, suggestionsConfig: s={}, originalTimeSpent: l, originalStarted: u})=>y({
    started: u || e,
    checkpoints: t,
    timeSpentSeconds: l || n,
    groupId: r,
    modelVersion: o,
    modelRevision: a,
    suggestionsConfig: s,
    suggestedTaskId: i,
    outcome: v.REJECTED
  })
    , b = async({started: e, checkpoints: t, timeSpentSeconds: n, groupId: r, originalStarted: i, originalTimeSpent: s})=>{
    const l = [...new Set(t.map((({sourceSystem: e})=>e)))]
      , u = (0,
      o.sG)(i || e)
      , c = (0,
      o.IH)(i || e, s || n, o.DATE_UNIT_TYPES.SECONDS);
    return Promise.all(l.map((e=>(0,
      a.v_)({
      url: "/rest/suggestions/suggestion-outcomes/remove/",
      data: {
        startTime: u,
        endTime: c,
        sourceSystem: e,
        groupId: r
      }
    }))))
  }
    , I = async({worklogId: e, outcome: t, changes: n=null})=>{
    await (0,
      a.v_)({
      url: "/rest/suggestions/suggestion-outcomes/worklogs",
      data: {
        worklogId: e,
        outcome: t,
        changes: n
      }
    })
  }
},
```
