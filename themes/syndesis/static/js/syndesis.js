var ScrollPosStyler=function(e,s){"use strict";function t(){r||(i=s.pageYOffset,o&&i>c?(r=!0,o=!1,s.requestAnimationFrame(a)):!o&&i<=c&&(r=!0,o=!0,s.requestAnimationFrame(n)))}function n(){for(var e=0;m[e];++e)m[e].classList.add("sps--abv"),m[e].classList.remove("sps--blw");r=!1}function a(){for(var e=0;m[e];++e)m[e].classList.add("sps--blw"),m[e].classList.remove("sps--abv");r=!1}var i=0,r=!1,o=!0,c=1,m=e.getElementsByClassName("sps"),u={init:function(){r=!0,i=s.pageYOffset,i>c?(o=!1,s.requestAnimationFrame(a)):(o=!0,s.requestAnimationFrame(n))}};return e.addEventListener("DOMContentLoaded",function(){s.setTimeout(u.init,1)}),s.addEventListener("scroll",t),u}(document,window);