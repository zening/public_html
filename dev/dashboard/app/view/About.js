Ext.define('dashboard.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',

    config: {
        title: 'Info',
        iconCls: 'info',
        cls:'home',
        scrollable: {
        direction: 'vertical',
         //directionLock: true
        },
        
        html: [
            '<div id="about"><div id="info">',
            '<h1>WE II Final Project</h1>',

            '<br>A REST client of ARSnova visualising the current statistics data of the backend<br>',

            '<br>Resource URL: <a href="https://arsnova.eu/statistics/">https://arsnova.eu/statistics/</a>',

            '<br><br><p>Leo Liu<br><a href="mailto:zeningliu@gmail.com">zeningliu@gmail.com</a><br>Sydeny, Australia </p>',
        	

        	'</div></div>'


        ].join("")
    }

});
