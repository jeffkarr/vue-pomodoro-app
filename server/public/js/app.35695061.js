(function(t){function e(e){for(var n,r,a=e[0],d=e[1],l=e[2],c=0,p=[];c<a.length;c++)r=a[c],o[r]&&p.push(o[r][0]),o[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var d=s[a];0!==o[d]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=d;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),o=s.n(n);o.a},"52c2":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("TimerPage")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timerContainer"},[s("b-row",[s("b-col",{attrs:{cols:"4"}}),s("b-col",{attrs:{cols:"4"}},[s("h1",{attrs:{id:"heading"}},[t._v("Task Timer")])]),s("b-col",{attrs:{cols:"4"}})],1),s("b-row",[s("b-col"),s("b-col",{attrs:{cols:"6"}},[s("div",{staticClass:"timer-area"},[s("div",{staticClass:"timer"},[s("span",{staticClass:"minutes"},[t._v(t._s(t.minutes))]),s("span",[t._v(":")]),s("span",{staticClass:"seconds"},[t._v(t._s(t.seconds))])]),s("div",[s("b-input-group",[t.started||t.paused||t.prjInputPopulated?t._e():s("b-dropdown",{staticClass:"mb-3",attrs:{id:"ddProject",name:"ddProject",size:"lg",text:"Select Project",variant:"success"},model:{value:t.ddProjectObj.ddProjectSelectedOption,callback:function(e){t.$set(t.ddProjectObj,"ddProjectSelectedOption",e)},expression:"ddProjectObj.ddProjectSelectedOption"}},[s("b-dropdown-item",{attrs:{disabled:"",value:"0"}},[t._v("Select a Project")]),t._l(t.ddProjectObj.prjOptions,function(e){return s("b-dropdown-item",{key:e.value,attrs:{value:e.value},on:{click:function(s){t.ddProjectObj.ddProjectSelectedOption=e.value,t.setPrjInputFromDropDn()}}},[t._v("\n                "+t._s(e.text)+"\n              ")])})],2),t.started||t.paused||t.prjInputPopulated?t._e():s("b-form-input",{attrs:{type:"text",size:"lg",placeholder:"Enter a new project"},on:{change:function(e){t.setProject(),t.prjInputChgd()}},model:{value:t.projectInput,callback:function(e){t.projectInput=e},expression:"projectInput"}})],1)],1),s("div",[s("b-input-group",[t.started||t.paused||t.taskInputPopulated?t._e():s("b-dropdown",{staticClass:"mb-3",attrs:{id:"ddTask",name:"ddTask",size:"lg",text:"Select Task",variant:"success"},on:{change:t.setTask},model:{value:t.ddTaskObj.ddTaskSelectedOption,callback:function(e){t.$set(t.ddTaskObj,"ddTaskSelectedOption",e)},expression:"ddTaskObj.ddTaskSelectedOption"}},[s("b-dropdown-item",{attrs:{disabled:"",value:"0"}},[t._v("Select a Task")]),t._l(t.ddTaskObj.taskOptions,function(e){return s("b-dropdown-item",{key:e.value,attrs:{value:e.value},on:{click:function(s){t.ddTaskObj.ddTaskSelectedOption=e.value,t.setTaskInputFromDropDn()}}},[t._v("\n                "+t._s(e.text)+"\n              ")])})],2),t.started||t.paused||t.taskInputPopulated?t._e():s("b-form-input",{staticClass:"fm-input",attrs:{type:"text",size:"lg",placeholder:"Enter a new task"},on:{change:function(e){t.setTask(),t.taskInputChgd()}},model:{value:t.taskInput,callback:function(e){t.taskInput=e},expression:"taskInput"}})],1)],1),t.taskInputPopulated?s("p",[s("i",[t._v("For the time remaining, focus on completing this task:")])]):t._e(),t.taskInputPopulated?s("h1",[t._v(t._s(t.taskInput))]):t._e(),s("b-row",{staticClass:"set-timer mb-3 ",attrs:{"align-h":"center"}},[t.started||t.paused?t._e():s("b-dropdown",{attrs:{id:"startTimer",name:"startTimer",size:"lg",text:"Set Timer",variant:"success"},on:{change:t.setTimer},model:{value:t.ddTimerObj.ddTimerSelectedOption,callback:function(e){t.$set(t.ddTimerObj,"ddTimerSelectedOption",e)},expression:"ddTimerObj.ddTimerSelectedOption"}},[s("b-dropdown-item",{attrs:{disabled:"",value:"0"}},[t._v("Select a Time Period")]),t._l(t.ddTimerObj.options,function(e){return s("b-dropdown-item",{key:e.value,attrs:{value:e.value},on:{click:function(s){t.ddTimerObj.ddTimerSelectedOption=e.value,t.setTimer()}}},[t._v("\n              "+t._s(e.text)+"\n          ")])})],2)],1),s("div",{staticClass:"controls"},[t.started||t.paused?t._e():s("div",{staticClass:"start mb-3",on:{click:t.startTimer}},[s("b-button",{attrs:{size:"lg",variant:"success",id:"start-btn"}},[t._v("Start \n            ")])],1),t.started?s("div",{staticClass:"pause mb-3",on:{click:t.stopTimer}},[s("b-button",{attrs:{size:"lg",variant:"success",id:"pause-btn"}},[t._v("Pause\n            ")])],1):t._e(),t.resume?s("div",{staticClass:"resume mb-3",on:{click:t.startTimer}},[s("b-button",{attrs:{size:"lg",variant:"success",id:"resume-btn"}},[t._v(" Resume ")])],1):t._e(),t.resetButton?s("div",{staticClass:"reset mb-3",on:{click:t.resetTimer}},[s("b-button",{attrs:{size:"lg",variant:"success",id:"stop-btn"}},[t._v("Reset")])],1):t._e()])],1)]),s("b-col")],1)],1)},a=[],d={name:"TimerPage",data:function(){return{task:"",projectInput:"",prjInputPopulated:!1,taskInput:"",taskInputPopulated:!1,timer:null,started:!1,paused:!1,resume:!1,totalTime:1500,resetButton:!1,ddProjectObj:{originalValue:[],ddProjectSelectedOption:"",disabled:!1,readonly:!1,visible:!0,color:"",prjOptions:[]},ddTaskObj:{originalValue:[],ddTaskSelectedOption:"",disabled:!1,readonly:!1,visible:!0,color:"",taskOptions:[]},ddTimerObj:{originalValue:[],ddTimerSelectedOption:"25",disabled:!1,readonly:!1,visible:!0,color:"",options:[{value:10,text:"10 minutes"},{value:15,text:"15 minutes"},{value:20,text:"20 minutes"},{value:25,text:"25 minutes"}]}}},methods:{playSound:function(t){if(t){var e=new Audio(t);e.play()}},prjInputChgd:function(){console.log("project input has changed")},setProject:function(){console.log("entering setProject"),this.prjObj={value:this.projectInput,text:this.projectInput},this.ddProjectObj.prjOptions.push(this.prjObj),console.log(JSON.stringify(this.ddProjectObj.prjOptions,null,2)+"\n"),console.log("leaving setProject")},setPrjInputFromDropDn:function(){console.log("entering setProjectFromDropDn"),console.log("selected Dropdown Option "+this.ddProjectObj.ddProjectSelectedOption),this.projectInput=this.ddProjectObj.ddProjectSelectedOption,console.log("leaving setProjectFromDropDn")},taskInputChgd:function(){console.log("task input has changed")},setTask:function(){console.log("entering setTask"),this.taskObj={value:this.taskInput,text:this.taskInput},this.ddTaskObj.taskOptions.push(this.taskObj),console.log(JSON.stringify(this.ddTaskObj.taskOptions,null,2)+"\n"),console.log("leaving setTask")},setTaskInputFromDropDn:function(){console.log("entering setTaskFromDropDn"),console.log("selected Task Dropdown Option "+this.ddTaskObj.ddTaskSelectedOption),this.taskInput=this.ddTaskObj.ddTaskSelectedOption,console.log("task Input is "+this.taskInput),console.log("leaving setTaskFromDropDn")},setTimer:function(){this.totalTime=60*this.ddTimerObj.ddTimerSelectedOption},startTimer:function(){var t=this;this.timer=setInterval(function(){return t.countdown()},1e3),this.resetButton=!1,this.paused=!1,this.resume=!1,this.started=!0,this.prjInputPopulated=!0,this.taskInputPopulated=!0},stopTimer:function(){clearInterval(this.timer),this.timer=null,this.resetButton=!0,this.paused=!0,this.resume=!0,this.started=!1},resetTimer:function(){this.totalTime=60*this.ddTimerObj.ddTimerSelectedOption,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.paused=!1,this.started=!1,this.resume=!1,this.prjInputPopulated=!1,this.projectInput="",this.taskInputPopulated=!1,this.taskInput=""},editTimer:function(){this.edit=!0},padTime:function(t){return(t<10?"0":"")+t},countdown:function(){0===this.totalTime?(this.started=!1,this.paused=!0,this.resetButton=!0,this.playSound("http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3")):this.totalTime--}},computed:{minutes:function(){var t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds:function(){var t=this.totalTime-60*this.minutes;return this.padTime(t)}}},l=d,u=(s("601a"),s("2877")),c=Object(u["a"])(l,r,a,!1,null,null,null);c.options.__file="TimerPage.vue";var p=c.exports,m={name:"app",components:{TimerPage:p}},b=m,h=(s("034f"),Object(u["a"])(b,o,i,!1,null,null,null));h.options.__file="App.vue";var v=h.exports,j=s("9f7b");s("f9e3"),s("2dd8");n["a"].use(j["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"601a":function(t,e,s){"use strict";var n=s("52c2"),o=s.n(n);o.a},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.35695061.js.map