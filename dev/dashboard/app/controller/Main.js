Ext.define("dashboard.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            mainView:"Home"
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
        Ext.Msg.show({
            title: 'WE-II Final Project',
            message: 'A REST client of ARSnova visualising the current statistics data of the backend',
            scope: this,
            buttons : [
               {
                   itemId : 'yes',
                   text   : 'OK'
                 }
               ],
            fn: function(btn) {
              if (btn == 'yes'){
               //do something
              }
             }
        });
        //stop = !stop;
        //console.log("Stop:"+ stop);
    }
});

var data = []; 

var stop = false;

function pad(n) { return ("0" + n).slice(-2); }

function getData(){
        if (!stop){

              $.ajax({

              url: "proxy.php?url=https://arsnova.eu/statistics/",

              //async: false,
              success: function( response ){
                // $("#data1").fadeOut('fast');
                // $("#data2").fadeOut('fast');
                // $("#data3").fadeOut('fast');
                // $("#data4").fadeOut('fast');
                // $("#data5").fadeOut('fast');

                $("#data1").animate({height:'toggle'});
                $("#data2").animate({height:'toggle'});
                $("#data3").animate({height:'toggle'});
                $("#data4").animate({height:'toggle'});
                $("#data5").animate({height:'toggle'});

      
                if ( data.length > 9) {
                        data.shift();
                        Ext.getStore("ARSnovaVis").setData(data);
                    }

                var now = new Date();

                var time = pad(now.getHours())+":"+ pad(now.getMinutes())+":"+pad(now.getSeconds());
                    data.push
                    ( 
                        {time: time,
                        activeUsers: response.contents.activeUsers,
                        openSessions: response.contents.openSessions,
                        closedSessions: response.contents.closedSessions, 
                        questions: response.contents.questions, 
                        answers: response.contents.answers}
                    ); 
                    
                    Ext.getCmp('Chart1')._axes[0]._minimum = 0;
                    Ext.getCmp('Chart1')._axes[0]._maximum = parseInt(response.contents.activeUsers) + 5;
                    // Ext.getCmp('Chart1').redraw();
                    
                    Ext.getCmp('Chart2')._axes[0]._minimum = parseInt(response.contents.openSessions) - 10;
                    Ext.getCmp('Chart2')._axes[0]._maximum = parseInt(response.contents.openSessions) + 10;
                    // Ext.getCmp('Chart2').redraw();

                    Ext.getCmp('Chart3')._axes[0]._minimum = parseInt(response.contents.closedSessions) - 10;
                    Ext.getCmp('Chart3')._axes[0]._maximum = parseInt(response.contents.closedSessions) + 10;
                    // Ext.getCmp('Chart3').redraw();

                    Ext.getCmp('Chart4')._axes[0]._minimum = parseInt(response.contents.questions) - 10;
                    Ext.getCmp('Chart4')._axes[0]._maximum = parseInt(response.contents.questions) + 10;
                    // Ext.getCmp('Chart4').redraw();

                    Ext.getCmp('Chart5')._axes[0]._minimum = parseInt(response.contents.answers) - 10;
                    Ext.getCmp('Chart5')._axes[0]._maximum = parseInt(response.contents.answers) + 10;
                    // Ext.getCmp('Chart5').redraw();

                    Ext.getStore("ARSnovaVis").setData(data);
                    Ext.getStore("ARSnovaVis").load();

                $("#data1").text(response.contents.activeUsers);
                $("#data2").text(response.contents.openSessions);               
                $("#data3").text(response.contents.closedSessions);
                $("#data4").text(response.contents.questions);                
                $("#data5").text(response.contents.answers);
                
                // $("#data1").show('slow');
                // $("#data2").show('slow');
                // $("#data3").show('slow');
                // $("#data4").show('slow');
                // $("#data5").show('slow');
                $("#data1").animate({height:'toggle'});
                $("#data2").animate({height:'toggle'});
                $("#data3").animate({height:'toggle'});
                $("#data4").animate({height:'toggle'});
                $("#data5").animate({height:'toggle'});

                    //console.log(response.query.results.json);

              }

            })

        } // check stop.
}