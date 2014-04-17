Ext.define("dashboard.view.Answers", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.answers",
    config: {
        flex: 0,
        xtype: "chart",
        id:"Chart5",
        store: "ARSnovaVis",
        cls: "chart",
        innerPadding: 10,
        animate: true,
        series: [
            {
                type: "line",
                xField: "time",
                yField: "answers",
                //title:"",
                style: {
                    stroke: "purple",
                    lineWidth: 1
                },
                marker: {
                    type: "circle",
                    stroke: "purple",
                    radius: 2,
                    lineWidth: 1
                }
            }
        ],
        axes: [
            {
                type: "numeric",
                position: "left",
                title: {
                    fontSize: 12
                    //text: "No"
                },
                label:{
                    color:"#666"
                },
                //minimum: 140000,
                //maximum: 180000,
                grid: true
            },
            {
                type: "category",
                position: "bottom",
                label:{
                     fontSize: 10,
                     color:"#666"
                }              
            }
        ]
    }
});