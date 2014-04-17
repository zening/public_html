Ext.define("dashboard.view.Main", {
    extend: "Ext.Container",
    requires: [
        "Ext.TitleBar"
    ],
    alias: "widget.main",
    config: {
        scrollable:true,
        layout: {
            type:"vbox"
        },
        items: [
            {
                xtype: "titlebar",
                docked: "bottom",
                title: "ARSnova Dashboard",
                items: [
                    {
                        // iconCls: "refresh",
                        // align: "right",
                        // handler: function () {
                        //     var parent = this.up("titlebar").getParent();
                        //     parent.fireEvent("refreshRequestCmd", parent);
                        // }
                        iconCls: "info",
                        align: "right",
                        handler: function () {
                            var parent = this.up("titlebar").getParent();
                            parent.fireEvent("refreshRequestCmd", parent);
                        }
                    }
                ]
            },            
            {
                xtype: "container",
                //flex: 1,
                layout: "vbox",
                items: [
                    {
                        // xtype: "container",
                        // flex: 0,
                        // height: 100,
                        // layout:"vbox",
                        items:[
                            {
                                xtype: "container",
                                docked: "top",
                                html: "<div class='chartTitle'>Active Users<div id='data1'>0</div></div>",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "activeusers"
                            }
                        ]
                    },
                    {
                        // xtype: "container",
                        // flex: 1,
                        // layout:"vbox",
                        items:[
                            {
                                xtype: "container",
                                docked: "top",
                                html: "<div class='chartTitle'>Open Sessions<div id='data2'>0</div></div>",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "opensessions"
                            }
                        ]
                    },
                    {
                        // xtype: "container",
                        // flex: 1,
                        // layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "<div class='chartTitle'>Closed Sessions<div id='data3'>0</div>",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "closedsessions"
                            }
                        ]
                    },
                    {
                        // xtype: "container",
                        // flex: 1,
                        // layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "<div class='chartTitle'>Questions<div id='data4'>0</div></div>",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "questions"
                            }
                        ]
                    },
                    {
                        // xtype: "container",
                        // flex: 1,
                        // layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "<div class='chartTitle'>Answers<div id='data5'>0</div></div>",
                                margin: "15 0 0 15"
                            },
                           {
                               xtype: "answers"
                           }
                        ]
                    }
                ]
            }            
        ],
                listeners: {
            initialize: function () {

            getData();

            setInterval(function(){

                    getData();

                },10000);

            }
        }
    }
});