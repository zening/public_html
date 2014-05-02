Ext.define('dashboard.view.Home', {
    extend: 'Ext.Panel',
    requires: 'Ext.tab.Panel',
    xtype: 'home',

    config: {
        title: 'Home',
        iconCls: 'home',
        cls:'home',

        scrollable: {
         direction: 'vertical',
         directionLock: true
            },

        listeners: {
            initialize: function () {

            getData();

            setInterval(function(){

                getData();

                },10000);

            }
        },
        
        items:[
        {
            xtype: "container",
            layout: "vbox",
            items:[
                   {

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
        ]
    }


});