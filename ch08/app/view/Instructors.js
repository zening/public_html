Ext.define('myApp.view.Instructors', {
    extend: 'Ext.Carousel',
    xtype: 'instructors',
    config: {
        xtype: 'carousel',
        title: 'Instructors',
        iconCls: 'team',
        cls:'home',   
        defaults: {
                    styleHtmlContent: true
                  },

        items: [
                {
                    html : [
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/167/thumb_270_KQC.png">',
                        '<br>Prof. Dr. Klaus Quibeldey-Cirkel '].join(""),
                        style: 'background-color: #efefef'
                        },
                {
                    html:[            
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/1877/thumb_270_Thelen.png">',
                        '<br>Christoph Thelen'].join(""),
                        style: 'background-color: #efefef'

                                                                    },
                {
                    html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/1877/thumb_270_Thelen.png">',
                        '<br>Christoph Thelen'].join("")
                            },
                            { html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/1877/thumb_270_Thelen.png">',
                        '<br>Christoph Thelen'].join("")
                            },
                            { html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/1877/thumb_270_Thelen.png">',
                        '<br>Christoph Thelen'].join("")
                            },

                            { html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/5151/thumb_270_Image-0001.png">',
                        '<br> Paul-Christian Volkmer '].join("")
                            }
                       



                        ]


    }

});