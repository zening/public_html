Ext.define('myApp.view.Chapters', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'chapters',

    config: {
                    //xtype: 'nestedlist',
                    title: 'Chapters',
                    iconCls: 'list',
                    displayField: 'title',
                    ui: 'light',
                    store: {
                        type: 'tree',

                        fields: [
                            'title', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'ajax',
                            url: './resources/data/chapters.json',
                            reader: {
                                type: 'json',
                                rootProperty: 'courses.chapters'
                            }
                        }
                    },
                
                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                        },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml("<h4>" + post.get('title') + "</h4>"+ post.get('content'));
                        }
                    }
    }

});

