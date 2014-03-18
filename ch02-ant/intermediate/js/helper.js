(function(d){function g(a,b,c,e){if("addEventListener"in a)try{a.addEventListener(b,c,e)}catch(d){if("object"==typeof c&&c.handleEvent)a.addEventListener(b,function(a){c.handleEvent.call(c,a)},e);else throw d;}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))}function h(a,b,c,e){if("removeEventListener"in a)try{a.removeEventListener(b,c,e)}catch(d){if("object"==typeof c&&c.handleEvent)a.removeEventListener(b,
function(a){c.handleEvent.call(c,a)},e);else throw d;}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))}window.MBP=window.MBP||{};MBP.viewportmeta=d.querySelector&&d.querySelector('meta[name="viewport"]');MBP.ua=navigator.userAgent;MBP.scaleFix=function(){MBP.viewportmeta&&(/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua))&&(MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",
d.addEventListener("gesturestart",MBP.gestureStart,!1))};MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"};MBP.BODY_SCROLL_TOP=!1;MBP.getScrollTop=function(){return window.pageYOffset||"CSS1Compat"===d.compatMode&&d.documentElement.scrollTop||d.body.scrollTop||0};MBP.hideUrlBar=function(){var a=window;!location.hash&&!1!==MBP.BODY_SCROLL_TOP&&a.scrollTo(0,1===MBP.BODY_SCROLL_TOP?0:1)};MBP.hideUrlBarOnLoad=function(){var a=window,b=a.document,
c;!location.hash&&a.addEventListener&&(window.scrollTo(0,1),MBP.BODY_SCROLL_TOP=1,c=setInterval(function(){b.body&&(clearInterval(c),MBP.BODY_SCROLL_TOP=MBP.getScrollTop(),MBP.hideUrlBar())},15),a.addEventListener("load",function(){setTimeout(function(){20>MBP.getScrollTop()&&MBP.hideUrlBar()},0)}))};MBP.fastButton=function(a,b,c){this.handler=b;this.pressedClass="undefined"===typeof c?"pressed":c;if(a.length&&1<a.length)for(var d in a)this.addClickEvent(a[d]);else this.addClickEvent(a)};MBP.fastButton.prototype.handleEvent=
function(a){a=a||window.event;switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onClick(a);break;case "click":this.onClick(a)}};MBP.fastButton.prototype.onTouchStart=function(a){var b=a.target||a.srcElement;a.stopPropagation();b.addEventListener("touchend",this,!1);d.body.addEventListener("touchmove",this,!1);this.startX=a.touches[0].clientX;this.startY=a.touches[0].clientY;b.className+=" "+this.pressedClass};MBP.fastButton.prototype.onTouchMove=
function(a){(10<Math.abs(a.touches[0].clientX-this.startX)||10<Math.abs(a.touches[0].clientY-this.startY))&&this.reset(a)};MBP.fastButton.prototype.onClick=function(a){a=a||window.event;var b=a.target||a.srcElement;a.stopPropagation&&a.stopPropagation();this.reset(a);this.handler.apply(a.currentTarget,[a]);"touchend"==a.type&&MBP.preventGhostClick(this.startX,this.startY);b.className=b.className.replace(RegExp(" ?"+this.pressedClass,"gi"),"")};MBP.fastButton.prototype.reset=function(a){a=a.target||
a.srcElement;h(a,"touchend",this,!1);h(d.body,"touchmove",this,!1);a.className=a.className.replace(RegExp(" ?"+this.pressedClass,"gi"),"")};MBP.fastButton.prototype.addClickEvent=function(a){g(a,"touchstart",this,!1);g(a,"click",this,!1)};MBP.preventGhostClick=function(a,b){MBP.coords.push(a,b);window.setTimeout(function(){MBP.coords.splice(0,2)},2500)};MBP.ghostClickHandler=function(a){if(!MBP.hadTouchEvent&&MBP.dodgyAndroid)a.stopPropagation(),a.preventDefault();else for(var b=0,c=MBP.coords.length;b<
c;b+=2){var d=MBP.coords[b+1];25>Math.abs(a.clientX-MBP.coords[b])&&25>Math.abs(a.clientY-d)&&(a.stopPropagation(),a.preventDefault())}};MBP.dodgyAndroid="ontouchstart"in window&&-1!=navigator.userAgent.indexOf("Android 2.3");d.addEventListener&&d.addEventListener("click",MBP.ghostClickHandler,!0);g(d.documentElement,"touchstart",function(){MBP.hadTouchEvent=!0},!1);MBP.coords=[];MBP.autogrow=function(a,b){function c(){var a=this.scrollHeight;a>this.clientHeight&&(this.style.height=a+3*f+"px")}var d=
b?b:12,f=a.currentStyle?a.currentStyle.lineHeight:getComputedStyle(a,null).lineHeight,f=-1==f.indexOf("px")?d:parseInt(f,10);a.style.overflow="hidden";a.addEventListener?a.addEventListener("input",c,!1):a.attachEvent("onpropertychange",c)};MBP.enableActive=function(){d.addEventListener("touchstart",function(){},!1)};MBP.preventScrolling=function(){d.addEventListener("touchmove",function(a){"range"!==a.target.type&&a.preventDefault()},!1)};MBP.preventZoom=function(){for(var a=d.querySelectorAll("input, select, textarea"),
b=0,b=0;b<a.length;b++)a[b].onfocus=function(){MBP.viewportmeta.content="width=device-width,initial-scale=1,maximum-scale=1"},a[b].onblur=function(){MBP.viewportmeta.content="width=device-width,initial-scale=1,maximum-scale=10"}};MBP.startupImage=function(){var a,b,c,e;b=window.devicePixelRatio;c=d.getElementsByTagName("head")[0];"iPad"===navigator.platform?(a=2===b?"img/startup/startup-tablet-portrait-retina.png":"img/startup/startup-tablet-portrait.png",b=2===b?"img/startup/startup-tablet-landscape-retina.png":
"img/startup/startup-tablet-landscape.png",e=d.createElement("link"),e.setAttribute("rel","apple-touch-startup-image"),e.setAttribute("media","screen and (orientation: portrait)"),e.setAttribute("href",a),c.appendChild(e),a=d.createElement("link"),a.setAttribute("rel","apple-touch-startup-image"),a.setAttribute("media","screen and (orientation: landscape)"),a.setAttribute("href",b),c.appendChild(a)):(a=568===screen.height?"img/startup/startup-retina-4in.png":2===b?"img/startup/startup-retina.png":
"img/startup/startup.png",e=d.createElement("link"),e.setAttribute("rel","apple-touch-startup-image"),e.setAttribute("href",a),c.appendChild(e));568===screen.height&&MBP.viewportmeta&&(MBP.viewportmeta.content=MBP.viewportmeta.content.replace(/\bwidth\s*=\s*320\b/,"width=320.1").replace(/\bwidth\s*=\s*device-width\b/,""))}})(document);