"use strict";(self.webpackChunkloveApp=self.webpackChunkloveApp||[]).push([[22],{5022:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(1811),i=n(9507),u=n(7909),a=function(e,t,n,a,o){var c=e.ownerDocument.defaultView,f=(0,i.i)(e),s=function(e){return f?-e.deltaX:e.deltaX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var t=e.startX;return f?t>=c.innerWidth-50:t<=50}(e)&&t()},onStart:n,onMove:function(e){var t=s(e)/c.innerWidth;a(t)},onEnd:function(e){var t=s(e),n=c.innerWidth,i=t/n,u=function(e){return f?-e.velocityX:e.velocityX}(e),a=u>=0&&(u>.2||t>n/2),l=(a?1-i:i)*n,v=0;if(l>5){var h=l/Math.abs(u);v=Math.min(h,540)}o(a,i<=0?.01:(0,r.j)(0,i,.9999),v)}})}}}]);
//# sourceMappingURL=22.e4e7af98.chunk.js.map