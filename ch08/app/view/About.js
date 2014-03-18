Ext.define('myApp.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',

    config: {
        title: 'About',
        iconCls: 'info',
        cls:'home',
        html: [
            '<br><h1>About This App</h1>',
            '<br><p>This is homework app for Web Engineering II,</p>',
            '<p>The contents of this app are from the <a href="https://iversity.org/courses/web-engineering-ii-developing-mobile-html5-apps" target="_blank">course web site </a></p>'
        ].join("")
    }

});
