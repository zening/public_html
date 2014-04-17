Ext.define("dashboard.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            mainView:"main"
        },
        control: {
            mainView: {
                refreshRequestCmd: "onRefreshRequestCmd"
            }
        }
    },
    onRefreshRequestCmd: function (view) {
        //Ext.getStore("ARSnovaVis").load();
        //getData();
        stop = !stop;
        console.log(stop);
    }
});

var data = []; 

var stop = false;

function pad(n) { return ("0" + n).slice(-2); }

function getData(){
        if (!stop){


            $("#data1").fadeOut('2000');
            $("#data2").fadeOut('2000');
            $("#data3").fadeOut('2000');
            $("#data4").fadeOut('2000');
            $("#data5").fadeOut('2000');

            $.ajax({
              url: "http://query.yahooapis.com/v1/public/yql",
              jsonp: "callback",
              dataType: "jsonp",
              data:{
                  q: "select * from json where url=\"https://arsnova.eu/statistics/\"",
                  format: "json"
              },
              async: false,
              success: function( response ){



                $("#data1").text(response.query.results.json.activeUsers);

                $("#data2").text(response.query.results.json.openSessions);
                
                $("#data3").text(response.query.results.json.closedSessions);

                $("#data4").text(response.query.results.json.questions);
                
                $("#data5").text(response.query.results.json.answers);
                

                $("#data1").show('slow');
                $("#data2").show('slow');
                $("#data3").show('slow');
                $("#data4").show('slow');
                $("#data5").show('slow');
      
                if ( data.length > 9) {
                        data.shift();
                        Ext.getStore("ARSnovaVis").setData(data);
                    }

                var now = new Date();

                var time = pad(now.getHours())+":"+ pad(now.getMinutes())+":"+pad(now.getSeconds());
                    data.push
                    ( 
                        {time: time,
                        activeUsers: response.query.results.json.activeUsers,
                        openSessions: response.query.results.json.openSessions,
                        closedSessions: response.query.results.json.closedSessions, 
                        questions: response.query.results.json.questions, 
                        answers: response.query.results.json.answers}

                    ); 
                    
                    Ext.getCmp('Chart1')._axes[0]._minimum = 0;
                    Ext.getCmp('Chart1')._axes[0]._maximum = parseInt(response.query.results.json.activeUsers) + 5;
                    // Ext.getCmp('Chart1').redraw();
                    
                    Ext.getCmp('Chart2')._axes[0]._minimum = parseInt(response.query.results.json.openSessions) - 10;
                    Ext.getCmp('Chart2')._axes[0]._maximum = parseInt(response.query.results.json.openSessions) + 10;
                    // Ext.getCmp('Chart2').redraw();

                    Ext.getCmp('Chart3')._axes[0]._minimum = parseInt(response.query.results.json.closedSessions) - 10;
                    Ext.getCmp('Chart3')._axes[0]._maximum = parseInt(response.query.results.json.closedSessions) + 10;
                    // Ext.getCmp('Chart3').redraw();

                    Ext.getCmp('Chart4')._axes[0]._minimum = parseInt(response.query.results.json.questions) - 10;
                    Ext.getCmp('Chart4')._axes[0]._maximum = parseInt(response.query.results.json.questions) + 10;
                    // Ext.getCmp('Chart4').redraw();

                    Ext.getCmp('Chart5')._axes[0]._minimum = parseInt(response.query.results.json.answers) - 10;
                    Ext.getCmp('Chart5')._axes[0]._maximum = parseInt(response.query.results.json.answers) + 10;
                    // Ext.getCmp('Chart5').redraw();

                    Ext.getStore("ARSnovaVis").setData(data);
                    Ext.getStore("ARSnovaVis").load();
                    //console.log(response.query.results.json);

              }

            })

        } // check stop.
}