(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0fCc":function(t,r,o){"use strict";o.d(r,"a",function(){return c});var e=o("2Vo4"),a=o("AytR"),n=o("fXoL"),s=o("tk/3");let c=(()=>{class t{constructor(t){this.http=t,this.room=new e.a(null),this.player=new e.a(null)}waitRoom(t,r){return this.http.post(`${a.a.backendUrl}room/wait`,{code:t,playerName:r})}createRoom(t,r,o,e){return this.http.post(`${a.a.backendUrl}room/create`,{creatorName:t,players:r,mafia:o,polices:e})}joinRoom(t,r){return this.http.post(`${a.a.backendUrl}room/join`,{code:t,playerName:r})}startRoom(t){return this.http.post(`${a.a.backendUrl}game/start/${t}`,{})}getAll(){return this.http.get(`${a.a.backendUrl}room`)}get(t,r){return this.http.get(`${a.a.backendUrl}room/${t}`,{params:r})}}return t.\u0275fac=function(r){return new(r||t)(n.Yb(s.a))},t.\u0275prov=n.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);