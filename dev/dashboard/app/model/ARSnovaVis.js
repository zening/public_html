Ext.define("dashboard.model.ARSnovaVis", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "answers", type: "int" },
            { name: "questions", type: "int" },
            { name: "openSessions", type: "int" },
            { name: "closedSessions", type: "int" },
            { name: "activeUsers", type: "int"},
            { name: "time", type: "time" }
        ]
    }
});