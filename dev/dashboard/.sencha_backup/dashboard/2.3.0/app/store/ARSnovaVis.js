Ext.define("dashboard.store.ARSnovaVis", {
    extend: "Ext.data.Store",
    // config: {
    //     proxy: {
    //         type: 'ajax',
    //         url: '../../services/dashboard.php?metric=hrsandvaluebyyear',
    //         model: 'dashboard.model.HrsAndValueByYear',
    //         reader: {
    //             type: "json",
    //             rootProperty: "items"
    //         }
    //     },
    //     autoLoad: true
    // }
    config: {
       data: [
           { time: "00:00:00", answers: 0, questions: 0, openSessions: 0, closedSessions: 0, activeUsers: 0 }
          ]
    }
});