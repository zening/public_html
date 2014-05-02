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
                    html: [
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/167/thumb_270_KQC.png">',
                        '<br><a href="https://iversity.org/users/klaus-quibeldey-cirkel-16a5c" target="_blank">Prof. Dr. Klaus Quibeldey-Cirkel</a>'].join(""),
                        style: 'background-color: #efefef'
                        },
                {
                    html:[            
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/1877/thumb_270_Thelen.png">',
                        '<br><a href="https://iversity.org/users/christoph-thelen-0de5d" target="_blank">Christoph Thelen</a>'].join(""),
                        style: 'background-color: #efefef'
                                                                  },
                {
                    html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/5151/thumb_270_Image-0001.png">',
                        '<br><a href="https://iversity.org/users/paul-christian-volkmer-cede2" target="_blank">Paul-Christian Volkmer</a>'].join("")
                            },
                { html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/2153/thumb_270_iversity-profilbild.jpg">',
                        '<br><a href="https://iversity.org/users/andreas-gartner-9f9e8" target="_blank">Andreas Gärtner</a>'].join("")
                            },

                { html:[        
                        '<img class="photo" src="https://d1wshrh2fwv7ib.cloudfront.net/users/2152/thumb_270_Portrait_DG_gray.png">',
                        '<br><a href="https://iversity.org/users/daniel-gerhardt-7c0f6" target="_blank">Daniel Gerhardt</a> '].join("")
                            }
                       

                        ]


    }

});