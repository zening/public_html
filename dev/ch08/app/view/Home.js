Ext.define('myApp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Home',
        iconCls: 'home',
        cls:'home',

        scrollable: {
         direction: 'vertical',
         directionLock: true
       },
        html: [
            '<img id="iv-logo" src="https://d1wshrh2fwv7ib.cloudfront.net/assets/logo-iversity-494f4c5e361ad68f629f320da9858677.png">',
            '<br><img id="logo" src="https://d1wshrh2fwv7ib.cloudfront.net/courses/a38264fc-bf10-4d1f-93c5-ca8952408c39/medium_79480480.jpg" />',
            '<br><br><p>Course Handbook:</p>',
            '<br><h1>Web Engineering II</h1>',
            '<h1>Developing Mobile HTML5 Apps</h1>'
        ].join("")
    }

});