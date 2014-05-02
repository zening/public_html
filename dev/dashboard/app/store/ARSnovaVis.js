Ext.define("dashboard.store.ARSnovaVis", {
    extend: "Ext.data.Store",

    config: {
       data: [
           { time: "00:00:00", answers: 0, questions: 0, openSessions: 0, closedSessions: 0, activeUsers: 0 }
          ]
    }
});