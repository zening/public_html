Ext.define('myApp.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',

    config: {
        title: 'About',
        iconCls: 'info',
        cls:'home',
        scrollable: {
         direction: 'vertical',
         directionLock: true
        },
        
        html: [
            '<div style="text-align:left; margin:20px;"><h1>About This App</h1>',
            '<br>Homework #4: <br><h2>My First Sencha Touch App in the Cloud</h2>',
           
            '<br>The app is a dummy Course Handbook, it must at least have the following components:<br>',

			'1. A tab bar with at least 3 icons at the bottom<br>',
			'2. Each icon in the tab bar leads to a view with a different UI component, such as carousel, nested list, etc.</p>',

            '<br><p>The contents of this homework app are from the <a href="https://iversity.org/courses/web-engineering-ii-developing-mobile-html5-apps" target="_blank">Iversity course web site </a></p>',
        	

        	'</div>'


        ].join("")
    }

});
