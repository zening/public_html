Ext.define("dashboard.view.ActiveUsers", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.activeusers",
    config: {
        flex: 0,
        xtype: "chart",
        id:"Chart1",
        store: "ARSnovaVis",
        cls: "chart",
        innerPadding: 10,
        animate: true,
        series: [
            {
                type: "line",
                xField: "time",
                yField: "activeUsers",
                //title: "Hours Worked",
                style: {
                    stroke: "green",
                    lineWidth: 1
                },
                marker: {
                    type: "circle",
                    stroke: "green",
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
                    //text: "Hrs"
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