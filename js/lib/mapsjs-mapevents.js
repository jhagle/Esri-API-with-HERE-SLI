(function(ns){var H = ns;var g,k=this,l="closure_uid_"+(1E9*Math.random()>>>0),p=0;function r(a,b,c){return a.call.apply(a.bind,arguments)}function s(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r:s;return t.apply(null,arguments)}function v(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function w(a,b,c,d){if(isNaN(a))throw Error("x needs to be a number");if(isNaN(b))throw Error("y needs to be a number");if(isNaN(c))throw Error("pointer must have an id");this.viewportX=a;this.viewportY=b;this.target=null;this.id=c;this.type=d;this.dragTarget=null}v("H.mapevents.Pointer",w);function x(a,b,c){if(isNaN(b))throw Error("x needs to be a number");if(isNaN(c))throw Error("y needs to be a number");a.viewportX=b;a.viewportY=c};function y(a){var b=a.ownerDocument,b=b.documentElement||b.body.parentNode||b.body;a=a.getBoundingClientRect();return{x:a.left+("number"===typeof window.pageXOffset?window.pageXOffset:b.scrollLeft),y:a.top+("number"===typeof window.pageYOffset?window.pageYOffset:b.scrollTop)}};function z(a,b,c,d,e,f,h){H.util.getSuperProto(z).constructor.call(this,a);this.pointers=b;this.changedPointers=c;this.targetPointers=d;this.currentPointer=e;this.originalEvent=h;this.target=f}H.lang.inherits(z,H.util.Event);v("H.mapevents.Event",z);function A(a){this.b=a instanceof Array?a.slice(0):[]}g=A.prototype;g.clear=function(){this.b.splice(0,this.b.length)};g.length=function(){return this.b.length};g.item=function(a){return this.b[a]};g.indexOf=function(a){for(var b=this.b.length;b--;)if(this.b[b].id===a)return b;return-1};function B(a,b){var c=a.indexOf(b);return-1!==c?a.b[c]:null}g.remove=function(a){a=this.indexOf(a);return-1!==a?this.b.splice(a,1)[0]:null};
function C(a,b){for(var c=a.b.length,d=[];c--;)a.b[c].type!==b&&d.push(a.b[c]);a.b=d}function D(a,b){for(var c=a.b.length;c--;)if(a.b[c].dragTarget===b)return!0;return!1}g.push=function(a){if(a instanceof w)return this.b.push(a);throw Error("list needs a pointer");};g.asArray=function(){return this.b};g.clone=function(){return new A(this.b)};function E(){0!=F&&(G[this[l]||(this[l]=++p)]=this)}var F=0,G={};E.prototype.M=!1;E.prototype.dispose=function(){if(!this.M&&(this.M=!0,this.o(),0!=F)){var a=this[l]||(this[l]=++p);delete G[a]}};E.prototype.addOnDisposeCallback=function(a,b){this.s||(this.s=[]);this.s.push(t(a,b))};E.prototype.o=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function I(a,b,c){c=c||{};if(!(a instanceof H.Map))throw Error("events: map instance required");if(!(b instanceof Array))throw Error("events: map array required");E.call(this);this.L=c.L||500;this.K=c.K||50;this.Y=c.Y||50;this.Z=c.Z||500;this.Q=c.Q||1E3;this.P=c.P||50;this.map=a;this.i=this.map.getViewPort();this.element=this.i.element;this.A=b;this.c=new A;this.d=new A;this.k={};this.h=null;this.t=!0;this.r={};this.q={};this.p=null;this.n=H.lang.bind(this.n,this);this.ha={pointerdown:this.ea,pointermove:this.fa,
pointerup:this.ga,pointercancel:this.da};J(this)}H.lang.inherits(I,E);function J(a,b){for(var c,d,e=0,f=a.A.length,e=0;e<f;e++)d=a.A[e],c=d.g,"function"===typeof c&&(b?(d.target||a.element).removeEventListener(d.f,c):(d.target||a.element).addEventListener(d.f,c))}
function K(a,b,c){var d,e=a.ha[b],f,h;if("function"===typeof e)for("pointermove"!==b&&(a.t=!0),f=0,h=a.d.length();f<h;f++)b=a.d.item(f),a.element.contains(c.target)?(d=a,d=d.h===b?b.target:0<=b.viewportX&&b.viewportX<d.i.width&&0<=b.viewportY&&b.viewportY<d.i.height?d.map.getObjectAt(b.viewportX,b.viewportY)||d.map:null):d=null,L(b.id,a.r),e.call(a,b,d,c);a.d.clear()}g=I.prototype;
g.ga=function(a,b,c){a.target=b;M(this,a,c);N(this,b,"pointerup",c,a);"mouse"!==a.type&&N(this,b,"pointerleave",c,a);b=this.k[a.id];var d={x:a.viewportX,y:a.viewportY},e=c.timeStamp,f=a.target,h=this.p;b&&b.target===f&&b.v.distance(d)<this.Y&&e-b.I<this.Z?(N(this,f,"tap",c,a),h&&h.target===f&&e-h.I<this.L?h.v.distance({x:a.viewportX,y:a.viewportY})<this.K&&(N(this,f,"dbltap",c,a),this.p=null):this.p={target:f,v:new H.math.Point(a.viewportX,a.viewportY),I:c.timeStamp}):this.p=null;this.k={};L(a.id,
this.q)};function M(a,b,c){b===a.h&&(N(a,b.dragTarget,"dragend",c,b),a.h=null,L(b.id,a.r));b.dragTarget=null}g.n=function(a,b){var c=this;N(this,a.dragTarget,"drag",b,a);L(a.id,this.r);this.r[a.id]=setTimeout(function(){c.n(a,b)},150)};function L(a,b){b[a]&&(clearTimeout(b[a]),delete b[a])}
function O(a,b,c){var d=b.target,e=new H.math.Point(b.viewportX,b.viewportY),f=b.id;L(f,a.q);a.q[f]=setTimeout(function(){d&&d===b.target&&e.distance({x:b.viewportX,y:b.viewportY})<a.P&&(N(a,d,"longpress",c,b),delete a.k[b.id])},a.Q)}
g.fa=function(a,b,c){var d=a.dragTarget,e=a.id,f;f=a.target;a.target=b;f!==b&&(N(this,f,"pointerleave",c,a),N(this,b,"pointerenter",c,a));d?this.h?this.n(a,c):this.t?this.t=!1:(this.h=a,N(this,d,"dragstart",c,a),this.n(a,c),delete this.k[e],this.t=!0):(!this.h||this.h&&this.h.dragTarget!==b&&this.h.dragTarget!==this.map)&&N(this,b,"pointermove",c,a)};
g.ea=function(a,b,c){var d=a.type,d="mouse"!==d&&"pen"!==d||0===c.button?!0:!1,e;b&&(a.target=b,this.k[a.id]={v:new H.math.Point(a.viewportX,a.viewportY),target:a.target,I:c.timeStamp},"mouse"!==a.type&&N(this,b,"pointerenter",c,a),e=N(this,b,"pointerdown",c,a),!this.h&&d&&(b.draggable&&!D(this.c,b)?a.dragTarget=b:!this.map.draggable||e.defaultPrevented||D(this.c,this.map)||(a.dragTarget=this.map)),O(this,a,c))};
g.da=function(a,b,c){a.target=null;b?(N(this,b,"pointerleave",c,a),N(this,b,"pointercancel",c,a)):N(this,this.map,"pointercancel",c,a);M(this,a,c);this.k={};L(a.id,this.q)};function N(a,b,c,d,e){var f;if(b&&"function"===typeof b.dispatchEvent){f=z;var h=a.c.asArray(),m=a.d.asArray();a=a.c;var q,n=a.b.length,u=[];for(q=0;q<n;q++)a.b[q].target===b&&u.push(a.b[q]);f=new f(c,h,m,u,e,b,d);b.dispatchEvent(f)}return f}
g.o=function(){J(this,!0);this.c.clear();this.d.clear();var a=this.r,b;for(b in a)L(b,a);var a=this.q,c;for(c in a)L(c,a);this.h=this.k=this.p=this.map=this.d=this.c=this.A=null;E.prototype.o.call(this)};function P(a){this.m=H.lang.bind(this.m,this);I.call(this,a,[{f:"touchstart",g:this.m},{f:"touchmove",g:this.m},{f:"touchend",g:this.m},{f:"touchcancel",g:this.m}]);this.$={touchstart:"pointerdown",touchmove:"pointermove",touchend:"pointerup",touchcancel:"pointercancel"};this.O=(a=(a=a.getImprint())?a.getElement():null)?Array.prototype.slice.call(a.querySelectorAll("a"),0):[]}H.lang.inherits(P,I);
P.prototype.m=function(a){var b=a.touches,c=this.c.length(),d;if("touchstart"===a.type&&c>=b.length){c=this.c.clone();for(d=b.length;d--;)c.remove(b[d].identifier);for(d=c.length();d--;)this.c.remove(c.item(d).id);this.d=c;K(this,"pointercancel",a);this.d.clear()}if(this.$[a.type]){b=y(this.i.element);c=a.type;d=a.changedTouches;var e=d.length,f,h,m,q,n,u;this.d.clear();for(u=0;u<e;u++)if(m=d[u],n=B(this.c,m.identifier),f=m.pageX-b.x,h=m.pageY-b.y,n)if("touchmove"===c){if(m=Math.abs(n.viewportX-f),
q=Math.abs(n.viewportY-h),1<m||1<q||1===m&&1===q)x(n,f,h),this.d.push(n)}else"touchend"===c&&(this.c.remove(n.id),this.d.push(n));else n=new w(f,h,m.identifier,"touch"),this.c.push(n),this.d.push(n);K(this,this.$[a.type],a);-1===this.O.indexOf(a.target)&&a.preventDefault()}};P.prototype.o=function(){this.O=null;I.prototype.o.call(this)};function Q(a){var b=[],b=R(this);(navigator.pointerEnabled||navigator.msPointerEnabled)&&b.push({f:"MSHoldVisual",g:"prevent"});I.call(this,a,b)}H.lang.inherits(Q,I);function R(a){var b=navigator.pointerEnabled,c,d,e=[];a.B=H.lang.bind(a.B,a);"MSPointerDown MSPointerMove MSPointerUp MSPointerCancel MSPointerOut MSPointerOver".split(" ").forEach(function(f){c=f.toLowerCase().replace(/ms/g,"");d=b?c:f;e.push({f:d,g:a.B,target:"MSPointerUp"===f||"MSPointerMove"===f?window:null})});return e}
var S={2:"touch",3:"pen",4:"mouse"};Q.prototype.w=function(a,b){var c;c=a.pointerType;"number"===typeof c&&(c=S[c]);c=new w(b.x,b.y,a.pointerId,c);this.c.push(c);return c};
Q.prototype.B=function(a){var b=navigator.la?a.type:a.type.toLowerCase().replace(/ms/g,""),c=y(this.element),d=B(this.c,a.pointerId),e=a.pageX-c.x,c=a.pageY-c.y,f=S[a.pointerType]||a.pointerType;d||b in{pointerup:1,pointerout:1,pointercancel:1}||"touch"===f&&"pointerdown"!==b||(d=this.w(a,{x:e,y:c}));d&&(b in{pointerup:1,pointercancel:1}&&this.c.remove(d.id),"pointerdown"===b&&"touch"===a.pointerType&&(C(this.c,"mouse"),C(this.c,"pen")),this.d.push(d),"pointermove"!==b?(x(d,e,c),K(this,"pointerout"===
b||"pointerover"===b?"pointermove":b,a)):d.viewportX===e&&d.viewportY===c||a.target===document.documentElement||(x(d,e,c),K(this,b,a)));this.d.clear()};function T(a,b,c,d,e){H.util.getSuperProto(T).constructor.call(this,"wheel");this.delta=a;this.viewportX=b;this.viewportY=c;this.target=d;this.originalEvent=e}H.lang.inherits(T,H.util.Event);v("H.mapevents.WheelEvent",T);function U(a){var b="onwheel"in document;this.ca=b;this.ba=(b?"d":"wheelD")+"elta";this.C=H.lang.bind(this.C,this);H.util.getSuperProto(U).constructor.call(this,a,[{f:(b?"":"mouse")+"wheel",g:this.C}])}H.lang.inherits(U,I);U.prototype.normalize=function(a,b,c){var d=this.ba,e=a[d+(d+"Y"in a?"Y":"")],f,h,m;e&&(m=Math.abs,f=m(e),e=(!(h=a[d+"X"])||3<=f/m(h))&&(!(h=a[d+"Z"])||3<=f/m(h))?((0<e)-(0>e))*(this.ca?1:-1):0);return new T(e,b,c,null,a)};
U.prototype.C=function(a){var b=y(this.element);a=this.normalize(a,a.pageX-b.x,a.pageY-b.y);a.delta&&(a.target=this.map.getObjectsAt(a.viewportX,a.viewportY)[0],a.target&&"function"===typeof a.target.dispatchEvent&&a.target.dispatchEvent(a),a.defaultPrevented||this.map.dispatchEvent(a))};function V(a){var b=window;this.j=H.lang.bind(this.j,this);I.call(this,a,[{f:"mousedown",g:this.j},{f:"mousemove",g:this.j,target:b},{f:"mouseup",g:this.j,target:b},{f:"mouseover",g:this.j},{f:"mouseout",g:this.j},{f:"dragstart",g:this.u}])}H.lang.inherits(V,I);V.prototype.w=function(a,b){var c=new w(b.x,b.y,1,"mouse");this.c.push(c);return c};
V.prototype.j=function(a){var b=a.type,c=y(this.element),c={x:a.pageX-c.x,y:a.pageY-c.y},d=this.c.item(0)||this.w(a,c);this.d.push(d);x(d,c.x,c.y);b in{mousemove:1,mouseover:1,mouseout:1}?K(this,"pointermove",a):K(this,b.replace("mouse","pointer"),a);this.d.clear()};V.prototype.u=function(a){a.preventDefault()};function W(a){if(-1!==X.indexOf(a))throw Error("InvalidArgument: map is already in use");this.a=a;X.push(a);this.aa=this.F=this.H=null;navigator.msPointerEnabled||navigator.pointerEnabled?this.H=new Q(this.a):(this.H=new P(this.a),this.F=new V(this.a));this.aa=new U(this.a);this.a.addOnDisposeCallback(this.dispose,this);H.util.Disposable.call(this)}H.lang.inherits(W,H.util.Disposable);v("H.mapevents.MapEvents",W);var X=[];
W.prototype.dispose=function(){this.a=null;this.H.dispose();this.aa.dispose();this.F&&this.F.dispose();X.splice(X.indexOf(this.a),1);H.util.dispose(this)};W.prototype.dispose=W.prototype.dispose;W.prototype.ia=function(){return this.a};W.prototype.getAttachedMap=W.prototype.ia;function Y(a,b){if(-1!==Z.indexOf(a))throw Error("InvalidArgument: events are already used");var c=b||{},d;H.util.Disposable.call(this);this.a=d=a.a;this.ja=a;Z.push(a);this.a.draggable=!0;this.D=c.kinetics||{duration:600,ease:H.util.animation.ease.EASE_OUT_QUAD};this.N=7;this.enable(c.enabled||this.N);c=H.Map.EngineType;this.i=this.a.getViewPort();this.l=this.i.element;this.J=this.a.getViewModel();this.G=c.P2D;this.l.style.msTouchAction="none";this.l.style.ma="none";d.addEventListener("dragstart",
this.u,!1,this);d.addEventListener("drag",this.T,!1,this);d.addEventListener("dragend",this.U,!1,this);d.addEventListener("wheel",this.W,!1,this);d.addEventListener("dbltap",this.S,!1,this);d.addEventListener("tap",this.V,!1,this);d.addEventListener("pointermove",this.X,!1,this);H.util.events.listen(this.l,"contextmenu",this.R,!1,this);a.addOnDisposeCallback(this.dispose,this)}H.lang.inherits(Y,H.util.Disposable);v("H.mapevents.Behavior",Y);var Z=[];Y.prototype.e=0;Y.DRAGGING=1;Y.WHEELZOOM=2;
Y.DBLTAPZOOM=4;g=Y.prototype;g.u=function(a){var b=a.pointers;a=this.i;var c=b[0],b=b[1]||{};this.e&1&&(a.startInteraction(17,this.D),a.interaction(c.viewportX,c.viewportY,b.viewportX,b.viewportY))};g.T=function(a){var b=a.pointers[0],c=a.pointers[1]||{};this.e&1&&(this.i.interaction(b.viewportX,b.viewportY,c.viewportX,c.viewportY),a.originalEvent.preventDefault())};g.U=function(){var a=this.i;this.e&1&&a.endInteraction(!this.D)};
g.zoom=function(a,b,c,d){var e=+b-+a,f=this.a.getViewModel();if(isNaN(+a))throw Error("start zoom needs to be a number");if(isNaN(+b))throw Error("to zoom needs to be a number");0!==e&&(f.startControl(null,c,d),f.control(0,0,e/e*0.006),f.endControl(!0,function(a){a.zoom=b}))};
g.W=function(a){var b,c,d,e;this.e&2&&(b=a.delta,c=this.a.getZoom(),e=Math[0>b?"ceil":"floor"](c-b),d=this.a,d.getEngine().type===this.G?this.zoom(c,e,a.viewportX,a.viewportY):(c=this.a.getViewModel().getCameraData(),c.fov+=16*b,d.getViewModel().setCameraData(c)),a.originalEvent.preventDefault())};g.V=function(a){a=a.currentPointer;var b=this.a.getEngine();this.G!==b.type&&(a=this.a.screenToCameraData(a.viewportX,a.viewportY),this.a.getViewModel().setCameraData(a))};
g.X=function(a){a=a.currentPointer;this.a.getEngine().setPointer(a.viewportX,a.viewportY)};g.S=function(a){var b=a.currentPointer,c=this.a.getZoom(),d=a.currentPointer.type,e=this.a.getEngine();this.G===e.type&&(a="mouse"===d?c+(0===a.originalEvent.button?1:-1):c+(0<a.pointers.length?-1:1),this.e&4&&this.zoom(c,a,b.viewportX,b.viewportY))};g.R=function(a){return this.e&4?(a.preventDefault(),!1):!0};
g.dispose=function(){var a=this.a;a&&(a.draggable=!1,a.removeEventListener("dragstart",this.u,!1,this),a.removeEventListener("drag",this.T,!1,this),a.removeEventListener("dragend",this.U,!1,this),a.removeEventListener("wheel",this.W,!1,this),a.removeEventListener("tap",this.V,!1,this),a.removeEventListener("dbltap",this.S,!1,this),a.removeEventListener("pointermove",this.X,!1,this),this.a=null);this.l&&(this.l.style.msTouchAction="",H.util.events.unlisten(this.l,"contextmenu",this.R,!1,this),this.l=
null);this.J&&(this.J.removeEventListener("sync",this.ka,!1,this),this.J=null);this.D=this.i=null;Z.splice(Z.indexOf(this.ja),1);H.util.dispose(this)};Y.prototype.dispose=Y.prototype.dispose;Y.prototype.disable=function(a){this.i.endInteraction(!0);a?this.e&a&&(this.e-=a,a&1&&(this.a.draggable=!1)):(this.e=0,this.a.draggable=!1)};Y.prototype.disable=Y.prototype.disable;Y.prototype.enable=function(a){a?this.e&a||(this.e+=a,a&1&&(this.a.draggable=!0)):(this.e=this.N,this.a.draggable=!0)};
Y.prototype.enable=Y.prototype.enable;Y.prototype.isEnabled=function(a){if(isNaN(a))throw Error("behavior: number required");return!!(this.e&a)};Y.prototype.isEnabled=Y.prototype.isEnabled;var H=H||{};v("H.mapevents.buildInfo",function(){return H.util.BuildInfo.get("mapsjs-mapevents","dev-0.6.0","1d4394e942d1b8a8cf947548cceed5c17770fa88")});
}(H));//# sourceMappingURL=mapsjs-mapevents.map