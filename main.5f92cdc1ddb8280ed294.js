!function(e){function t(t){for(var r,c,i=t[0],d=t[1],s=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var d=n[i];0!==a[d]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=d;o.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(309)},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);n(308);var r=function(e,t,n,r,a,o){var c=document.createElement(e);if(t&&t.split(" ").forEach((function(e){c.classList.add(e)})),n&&(c.id=n),r){var i=r.split("=");c.setAttribute(i[0],i[1])}if(a){var d=a.split("=");c.setAttribute(d[0],d[1])}if(o){var s=o.split("=");c.setAttribute(s[0],s[1])}return c},a=function(e,t,n,a){var o=r("select",t);return e.forEach((function(e){var t,c=r("option",n,"","".concat(e===a?"selected=":""),"value=".concat(e));t="time"===n?"".concat(e,":00"):"All"===e?"All members":e,c.textContent=t,o.insertAdjacentElement("beforeend",c)})),o};function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(e){var t,n=document.querySelector("body"),c=r("h1"),i=r("div","main-container"),d=r("div","main_top-container"),s=r("div","controls"),l=r("button","add-event-btn"),u=e,f=localStorage.pechPavloCalendar;if(f&&JSON.parse(f).release===e.release)u.calendarItemsList=JSON.parse(f).calendarItemsList,u.currentUser=JSON.parse(f).currentUser||e.users[0],u.isAdmin=JSON.parse(f).isAdmin;else{t=e.calendarItemsList,e.days.forEach((function(n){e.times.forEach((function(e){t.push("".concat(n).concat(e))}))}));var m=e.users[0];u.currentUser=m}var p,v,b,h,y,g,E,A,_,j,w,S,x=e.users.map((function(e){return e.data.name})),L=function(){var t,n,c,i,d,s=r("form","","add-form"),l=r("input","add_form-name","new_event-name","placeholder=Event name","required=","maxlength=25"),u=(t=r("div","add_dropdown","","data-drop=down"),n=r("div","add_dropdown-main","","data-drop=down"),c=r("span","add_dropdown-selected","","data-drop=down"),i=r("select","add_dropdown-fake_select","","data-drop=down"),d=r("div","add_dropdown-content","","data-drop=down"),[].concat(o(x),["All"]).forEach((function(e){var t=r("label","member","","data-drop=down"),n=r("input","member-selected-to-add","","type=checkbox","value=".concat(e),"data-drop=down");t.textContent="All"===e?"All members":e,t.insertAdjacentElement("beforeend",n),d.insertAdjacentElement("beforeend",t)})),c.textContent="choose participiants",n.insertAdjacentElement("beforeend",c),n.insertAdjacentElement("beforeend",i),t.insertAdjacentElement("beforeend",n),t.insertAdjacentElement("beforeend",d),t),f=r("label","add_lable"),m=r("label","add_lable","","for=add_select"),p=r("input","","add_select","form=add-form","required=");p.setAttribute("data-drop","down");var v=r("label","add_lable"),b=r("label","add_lable");return f.textContent="Name of the event:",m.textContent="Participants:",v.textContent="Day:",b.textContent="Time:",m.insertAdjacentElement("beforeend",u),m.insertAdjacentElement("beforeend",p),v.insertAdjacentElement("beforeend",a(e.days,"add_day","day","Monday")),b.insertAdjacentElement("beforeend",a(e.times,"add_time","time",10)),f.insertAdjacentElement("beforeend",l),s.insertAdjacentElement("beforeend",f),s.insertAdjacentElement("beforeend",m),s.insertAdjacentElement("beforeend",v),s.insertAdjacentElement("beforeend",b),s};c.textContent="Calendar",l.textContent="New event +",n.insertAdjacentElement("beforeend",(p=r("div","modal_wrapper","add-modal"),v=r("div","add_modal-container"),b=r("div","add_modal-error"),h=r("span"),y=r("button","","add_modal-error_btn"),g=r("div","add_modal-footer"),E=r("button","cancel_add_event-btn","cancel_add"),A=r("button","create_add_event-btn","create_add","form=add-form"),h.textContent="Failed to create an event. Time slot is already booked.",E.textContent="Cancel",A.textContent="Create",g.insertAdjacentElement("beforeend",E),g.insertAdjacentElement("beforeend",A),b.insertAdjacentElement("beforeend",h),b.insertAdjacentElement("beforeend",y),v.insertAdjacentElement("beforeend",b),v.insertAdjacentElement("beforeend",L()),v.insertAdjacentElement("beforeend",g),p.insertAdjacentElement("beforeend",v),p)),n.insertAdjacentElement("beforeend",function(){var e=r("div","modal_wrapper","delete-modal"),t=r("div","delete_modal-container"),n=r("span","delete_modal-title"),a=r("span","delete_modal-subtitle"),o=r("div","delete_modal-footer"),c=r("button","no_delete_event-btn","no_delete"),i=r("button","yes_delete_event-btn","yes_delete");return n.textContent="Are you sure you want to delete",a.textContent='"This" event?',c.textContent="No",i.textContent="Yes",o.insertAdjacentElement("beforeend",c),o.insertAdjacentElement("beforeend",i),t.insertAdjacentElement("beforeend",n),t.insertAdjacentElement("beforeend",a),t.insertAdjacentElement("beforeend",o),e.insertAdjacentElement("beforeend",t),e}()),n.insertAdjacentElement("beforeend",function(){var t=r("div","modal_wrapper active","authorize-modal"),n=r("div","authorize_modal-container"),o=r("span","authorize_modal-title"),c=r("div","authorize_modal-footer"),i=r("button","confirm_authorize_modal-btn","confirm_user");return o.textContent="Please authorize",i.textContent="Confirm",c.insertAdjacentElement("beforeend",i),n.insertAdjacentElement("beforeend",o),n.insertAdjacentElement("beforeend",a(x,"autorized-by","user",e.currentUser.data.name)),n.insertAdjacentElement("beforeend",c),t.insertAdjacentElement("beforeend",n),t}()),d.insertAdjacentElement("afterbegin",c),s.insertAdjacentElement("beforeend",((_=a([].concat(o(x),["All"]),"filtered-by","member","All")).setAttribute("id","filter"),_)),s.insertAdjacentElement("beforeend",((j=r("button","change_user-btn")).textContent="Change User",j)),s.insertAdjacentElement("beforeend",l),d.insertAdjacentElement("beforeend",s),i.insertAdjacentElement("beforeend",d),i.insertAdjacentElement("beforeend",(w=r("table","calendar"),S=r("tr","calendar-header"),["Name"].concat(o(e.days)).forEach((function(e){var t=r("th","calendar_header-item");t.textContent=e,S.insertAdjacentElement("beforeend",t)})),w.insertAdjacentElement("beforeend",S),e.times.forEach((function(t){var n=r("tr","calendar-row");["".concat(t,":00")].concat(o(e.days)).forEach((function(e,a){var o=r("td","calendar_row-item");if(a){var c=r("div","calendar_cell","","data-cell=".concat(e).concat(t)),i=r("span","calendar_cell-name","","data-cell_name=".concat(e).concat(t)),d=r("button","calendar_cell-del_btn","","data-del_btn=".concat(e).concat(t)),s=r("ul","calendar_cell_participants","","data-cell_list=".concat(e).concat(t));c.insertAdjacentElement("beforeend",i),c.insertAdjacentElement("beforeend",d),o.insertAdjacentElement("beforeend",c),o.insertAdjacentElement("beforeend",s),o.setAttribute("draggable","true"),o.dataset.time="".concat(e).concat(t)}else o.textContent=e;n.insertAdjacentElement("beforeend",o)})),w.insertAdjacentElement("beforeend",n)})),w)),n.insertAdjacentElement("beforeend",i)};var d=function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.day=t,this.time=n,this.dayTime="".concat(t).concat(n),this.eventName=r,this.participants=a};function s(e,t,n,r,a,o,c){try{var i=e[o](c),d=i.value}catch(e){return void n(e)}i.done?t(d):Promise.resolve(d).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){s(o,r,a,c,i,"next",e)}function i(e){s(o,r,a,c,i,"throw",e)}c(void 0)}))}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=new function e(){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"get",function(){var e=l(regeneratorRuntime.mark((function e(n){var r,a,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t.settingsObject.URL).concat(t.settingsObject.SYSTEM,"/").concat(n),e.prev=1,e.next=4,fetch(r,{method:"get"});case 4:return o=e.sent,e.next=7,o.json();case 7:c=e.sent,a=(null==c?void 0:c.map((function(e){return{id:e.id,data:JSON.parse(e.data.replaceAll('\\"','"'))}})))||null,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.showErrorMessage(e.t0);case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()),u(this,"create",function(){var e=l(regeneratorRuntime.mark((function e(n,r){var a,o,c,i,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t.settingsObject.URL).concat(t.settingsObject.SYSTEM,"/").concat(n),o='{"data":"'.concat(JSON.stringify(r).replaceAll('"','\\"'),'"}'),c={},e.prev=3,e.next=6,fetch(a,{method:"POST",body:o,headers:{Accept:"application/json","Content-Type":"application/json"}});case 6:return i=e.sent,e.next=9,i.json();case 9:d=e.sent,c.id=d.id,c.data=JSON.parse(d.data.replaceAll('\\"','"')),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),t.showErrorMessage(e.t0);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,n){return e.apply(this,arguments)}}()),u(this,"change",function(){var e=l(regeneratorRuntime.mark((function e(n,r,a){var o,c,i,d,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(t.settingsObject.URL).concat(t.settingsObject.SYSTEM,"/").concat(n,"/").concat(r),c='{"data":"'.concat(JSON.stringify(a).replaceAll('"','\\"'),'"}'),i={},e.prev=3,e.next=6,fetch(o,{method:"PUT",body:c,headers:{Accept:"application/json","Content-Type":"application/json"}});case 6:return d=e.sent,e.next=9,d.json();case 9:s=e.sent,i.id=s.id,i.data=JSON.parse(s.data.replaceAll('\\"','"')),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),t.showErrorMessage(e.t0);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,n,r){return e.apply(this,arguments)}}()),u(this,"delete",function(){var e=l(regeneratorRuntime.mark((function e(n,r){var a,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t.settingsObject.URL).concat(t.settingsObject.SYSTEM,"/").concat(n,"/").concat(r),e.prev=1,e.next=4,fetch(a,{method:"DELETE"});case 4:o=e.sent,c=o.status,console.log("Success:",c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.showErrorMessage(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),u(this,"showErrorMessage",(function(e){var t=document.querySelector("#error-modal");document.querySelector(".error_modal-subtitle").textContent=e,t.classList.add("active")})),e.instance instanceof e)return e.instance;this.settingsObject={URL:"http://158.101.166.74:8080/api/data/",SYSTEM:"pavlo_pechenevskyi"},Object.freeze(this.settingsObject),Object.freeze(this),e.instance=this};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var g=function e(t,n){y(this,e),this.isAdmin=!1,this.name=t,this.password=n},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,e);var t=v(n);function n(e,r){var a;return y(this,n),(a=t.call(this,e,r)).isAdmin=!0,a}return n}(g),A=function(){var e=r("div","modal_wrapper","error-modal"),t=r("div","error_modal-container"),n=r("span","error_modal-title"),a=r("span","error_modal-subtitle"),o=r("div","error_modal-footer"),c=r("button","confirm_error_modal-btn","confirm_error");return n.textContent="We have an error:",a.textContent="Some error",c.textContent="Confirm",o.insertAdjacentElement("beforeend",c),t.insertAdjacentElement("beforeend",n),t.insertAdjacentElement("beforeend",a),t.insertAdjacentElement("beforeend",o),e.insertAdjacentElement("beforeend",t),document.body.insertAdjacentElement("beforeend",e),e};function _(e,t,n,r,a,o,c){try{var i=e[o](c),d=i.value}catch(e){return void n(e)}i.done?t(d):Promise.resolve(d).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){_(o,r,a,c,i,"next",e)}function i(e){_(o,r,a,c,i,"throw",e)}c(void 0)}))}}var w={days:["Monday","Tuesday","Wednesday","Thursday","Friday"],filteredBy:"All",release:"1.6",team:["Maria","Bob","Alex","John"],users:[{id:"a6a136dc-fd2b-4073-a1ae-214589cc73e6",data:{isAdmin:!0,name:"test",password:""}}],currentUser:{id:"a6a136dc-fd2b-4073-a1ae-214589cc73e6",data:{isAdmin:!0,name:"test",password:""}},isAdmin:!0,times:[10,11,12,13,14,15,16,17,18],isUsersDataLoaded:!1,events:[],calendarItemsList:[]},S=function(){var e,t=w.calendarItemsList,n=document.querySelector("#filter"),a=document.querySelector(".add-event-btn"),o=document.querySelectorAll(".member-selected-to-add"),c=document.querySelector("#add_select"),i=document.querySelector(".add_dropdown-selected"),s=document.querySelector("#add-modal"),l=document.querySelector(".add_modal-error"),u=document.querySelector(".add_dropdown"),m=document.querySelector(".add_dropdown-main"),p=document.querySelector("#add_modal-error_btn"),v=document.querySelector("#delete-modal"),b=document.querySelector("#authorize-modal"),h=document.querySelector("#error-modal"),y=document.querySelector(".autorized-by"),g=document.querySelector(".change_user-btn"),E=document.querySelector(".delete_modal-subtitle"),A=document.querySelector("#cancel_add"),_=document.querySelectorAll(".calendar_cell-del_btn"),S=document.querySelectorAll("[data-time]"),x=document.querySelector("#add-form"),L=document.querySelector("#new_event-name"),O=document.querySelector(".add_day"),C=document.querySelector(".add_time"),k="",T="",q="",R=!1,P=function(){localStorage.pechPavloCalendar=JSON.stringify(w)},M=function(){a.classList.toggle("hidden",!w.isAdmin),_.forEach((function(e){e.classList.toggle("hidden",!w.isAdmin)})),S.forEach((function(e){e.setAttribute("draggable",w.isAdmin)}))},N=function(){w.currentUser=w.users.find((function(e){return e.data.name===y.value})),w.isAdmin=w.currentUser.data.isAdmin,M()},U=function(){t.forEach((function(e){var t,n=null===(t=w.events.find((function(t){return t.data.dayTime===e})))||void 0===t?void 0:t.data,a="All"===w.filteredBy||(null==n?void 0:n.participants.includes(w.filteredBy));if(n&&a){var o=document.querySelector("[data-cell_list=".concat(e,"]"));o.innerHTML="",document.querySelector("[data-cell=".concat(e,"]")).classList.toggle("booked",!0),document.querySelector("[data-cell_name=".concat(e,"]")).textContent=n.eventName,n.participants.forEach((function(e){var t=r("li","calendar_cell_participant");t.textContent=e,o.appendChild(t)}))}else document.querySelector("[data-cell=".concat(e,"]")).classList.toggle("booked",!1)}))},J=function(){var e=j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("events");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:w.events=e.t0,U();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=e.target.dataset.del_btn;k=w.events.find((function(e){return e.data.dayTime===t})),E.textContent='"'.concat(k.data.eventName,'" event?'),v.classList.toggle("active",!0)},D=function(e){w.filteredBy=e.target.value,U()},I=function(){var e=j(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("delete-modal"!==t.target.id&&"no_delete"!==t.target.id||v.classList.toggle("active"),"yes_delete"!==t.target.id){e.next=9;break}return v.classList.toggle("active",!1),document.querySelector("[data-cell=".concat(k.data.dayTime,"]")).classList.toggle("booked",!1),e.next=6,f.delete("events",k.id);case 6:J(),U(),P();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){"authorize-modal"===e.target.id&&b.classList.toggle("active"),"confirm_user"===e.target.id&&(N(),b.classList.toggle("active",!1),U(),P())},Y=function(e){"error-modal"!==e.target.id&&"confirm_error"!==e.target.id||h.classList.toggle("active")},F=function(e,t){var n=[];if(t||"All"===e.target.value){var r=!t&&e.target.checked;o.forEach((function(e){e.checked=r}))}o.forEach((function(e){var t="All"===e.value&&e;e.checked&&!t&&n.push(e.value),t&&(t.checked=n.length===o.length-1)})),c.value=n,i.textContent=c.value||"chose participants"},W=function(){l.classList.toggle("booked",!1),s.classList.toggle("active"),L.value="",F(0,1)},H=function(e){"add-modal"===e.target.id&&s.classList.toggle("active"),"down"!==e.target.dataset.drop&&u.classList.toggle("active",!1)},$=function(t){t.currentTarget.classList.add("selected"),T=t.currentTarget.dataset.time,e=w.events.find((function(e){return e.data.dayTime===T}))},G=function(t){t.currentTarget.classList.remove("selected"),R&&(e.data.dayTime=q,f.change("events",e.id,e.data),U(),P())},K=function(e){e.preventDefault(),R=!1;var t=e.target;if((q=t.dataset.time)&&w.isAdmin){var n=w.events.find((function(e){return e.data.dayTime===q}));T!==q&&!n&&(R=!0)}},Q=function(){var e=j(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=c.value.split(","),!w.events.find((function(e){return e.data.dayTime==="".concat(O.value).concat(C.value)}))){e.next=6;break}l.classList.toggle("booked",!0),e.next=11;break;case 6:return e.next=8,f.create("events",new d(O.value,C.value,L.value,n));case 8:r=e.sent,w.events.push(r),s.classList.toggle("active");case 11:U(),M(),P();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n.addEventListener("change",D),x.addEventListener("submit",Q),a.addEventListener("click",W),A.addEventListener("click",W),p.addEventListener("click",(function(){return l.classList.toggle("booked",!1)})),m.addEventListener("click",(function(e){u.classList.toggle("active"),e.preventDefault()})),s.addEventListener("click",H),S.forEach((function(e){e.addEventListener("dragstart",$),e.addEventListener("mousedown",(function(e){e.currentTarget.classList.add("selected")})),e.addEventListener("mouseup",(function(e){e.currentTarget.classList.remove("selected")})),e.addEventListener("mouseleave",(function(e){e.currentTarget.classList.remove("selected")})),e.addEventListener("dragleave",(function(){R=!1})),e.addEventListener("dragend",G),e.addEventListener("dragover",K)})),o.forEach((function(e){return e.addEventListener("click",F)})),v.addEventListener("click",I),h.addEventListener("click",Y),b.addEventListener("click",B),g.addEventListener("click",(function(){return b.classList.toggle("active",!0)})),_.forEach((function(e){e.addEventListener("click",z)})),U(),J(),N(),M(),P()},x=function(){var e=j(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("users");case 2:null===(t=e.sent)&&(w.team.map((function(e){return f.create("users",new g(e,""))})),setTimeout(f.create("users",new E("Boss","superPassword")),500),setTimeout(x,1e3)),t&&(w.users=t),i(w),S();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();A(),x()}});