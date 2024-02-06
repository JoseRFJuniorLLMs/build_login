"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[591],{3110:(g,c,r)=>{r.d(c,{Z:()=>d});var d=function(a,i){if(!(typeof window>"u"||typeof document>"u")){var l=i??document.body;return window.getComputedStyle(l,null).getPropertyValue(a).replace(/^\s/,"")}}},7591:(g,c,r)=>{r.r(c),r.d(c,{ThemeModule:()=>f});var d=r(6814),a=r(5020),i=r(1272),l=r(3692),p=r(3110),t=r(5678);const m=["*"];let T=(()=>{class e{constructor(n,o){this.document=n,this.renderer=o}themeColors(){Array.from(this.document.querySelectorAll(".theme-color")).forEach(n=>{const o=n,s=(0,p.Z)("background-color",o)??"#fff",h=this.renderer.createElement("table");h.innerHTML=`\n          <table class="table w-100">\n            <tr>\n              <td class="text-muted">HEX:</td>\n              <td class="font-weight-bold">${function(e){if(typeof e>"u")throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var u=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!u)throw new Error("".concat(e," is not a valid rgb color"));var n="0".concat(parseInt(u[1],10).toString(16)),o="0".concat(parseInt(u[2],10).toString(16)),s="0".concat(parseInt(u[3],10).toString(16));return"#".concat(n.slice(-2)).concat(o.slice(-2)).concat(s.slice(-2))}(s)}</td>\n            </tr>\n            <tr>\n              <td class="text-muted">RGB:</td>\n              <td class="font-weight-bold">${s}</td>\n            </tr>\n          </table>\n        `,this.renderer.appendChild(o.parentNode,h)})}ngOnInit(){}ngAfterViewInit(){this.themeColors()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.K0),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:30,vars:0,consts:[[1,"fade-in"],[1,"mb-4"],["color","primary"],["color","secondary"],["color","success"],["color","danger"],["color","warning"],["color","info"],["color","light"],["color","dark"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"c-card",1)(2,"c-card-header"),t._uU(3," Theme colors "),t.qZA(),t.TgZ(4,"c-card-body")(5,"c-row")(6,"app-theme-color",2)(7,"h6"),t._uU(8,"Brand Primary Color"),t.qZA()(),t.TgZ(9,"app-theme-color",3)(10,"h6"),t._uU(11,"Brand Secondary Color"),t.qZA()(),t.TgZ(12,"app-theme-color",4)(13,"h6"),t._uU(14,"Brand Success Color"),t.qZA()(),t.TgZ(15,"app-theme-color",5)(16,"h6"),t._uU(17,"Brand Danger Color"),t.qZA()(),t.TgZ(18,"app-theme-color",6)(19,"h6"),t._uU(20,"Brand Warning Color"),t.qZA()(),t.TgZ(21,"app-theme-color",7)(22,"h6"),t._uU(23,"Brand Info Color"),t.qZA()(),t.TgZ(24,"app-theme-color",8)(25,"h6"),t._uU(26,"Brand Light Color"),t.qZA()(),t.TgZ(27,"app-theme-color",9)(28,"h6"),t._uU(29,"Brand Dark Color"),t.qZA()()()()()())},dependencies:()=>[a.AkF,a.yue,a.nkx,a.iok,A],encapsulation:2})}return e})(),A=(()=>{class e{constructor(){this.color="",this.colorClasses={"theme-color w-75 rounded mb-3":!0},this.display="contents"}ngOnInit(){this.colorClasses={...this.colorClasses,[`bg-${this.color}`]:!!this.color}}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-theme-color"]],hostVars:2,hostBindings:function(o,s){2&o&&t.Udp("display",s.display)},inputs:{color:"color"},ngContentSelectors:m,decls:3,vars:1,consts:[["xl","2","md","4","sm","6","xs","12",1,"my-4","ms-4"],[2,"padding-top","75%",3,"ngClass"]],template:function(o,s){1&o&&(t.F$t(),t.TgZ(0,"c-col",0),t._UZ(1,"div",1),t.Hsn(2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngClass",s.colorClasses))},dependencies:[d.mk,a.Yp0],encapsulation:2})}return e})();const y=[{path:"",data:{title:"Theme"},children:[{path:"",pathMatch:"full",redirectTo:"colors"},{path:"colors",component:T,data:{title:"Colors"}},{path:"typography",component:(()=>{class e{constructor(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:191,vars:0,consts:[[1,"fade-in"],[1,"mb-4"],[1,"table"],[1,"c-highlighter-rouge"],[1,"bd-example"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],["id","someAnchorage",1,"mb-4"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","c-d-block","c-text-truncate"],[1,"col-sm-9","c-d-block","c-text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"c-card",1)(2,"c-card-header"),t._uU(3," Headings "),t.qZA(),t.TgZ(4,"c-card-body")(5,"p"),t._uU(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),t.qZA(),t.TgZ(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"Heading"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Example"),t.qZA()()(),t.TgZ(14,"tbody")(15,"tr")(16,"td")(17,"p")(18,"code",3),t._uU(19,"<h1></h1>"),t.qZA()()(),t.TgZ(20,"td")(21,"h1"),t._uU(22,"h1. Bootstrap heading"),t.qZA()()(),t.TgZ(23,"tr")(24,"td")(25,"p")(26,"code",3),t._uU(27,"<h2></h2>"),t.qZA()()(),t.TgZ(28,"td")(29,"h2"),t._uU(30,"h2. Bootstrap heading"),t.qZA()()(),t.TgZ(31,"tr")(32,"td")(33,"p")(34,"code",3),t._uU(35,"<h3></h3>"),t.qZA()()(),t.TgZ(36,"td")(37,"h3"),t._uU(38,"h3. Bootstrap heading"),t.qZA()()(),t.TgZ(39,"tr")(40,"td")(41,"p")(42,"code",3),t._uU(43,"<h4></h4>"),t.qZA()()(),t.TgZ(44,"td")(45,"h4"),t._uU(46,"h4. Bootstrap heading"),t.qZA()()(),t.TgZ(47,"tr")(48,"td")(49,"p")(50,"code",3),t._uU(51,"<h5></h5>"),t.qZA()()(),t.TgZ(52,"td")(53,"h5"),t._uU(54,"h5. Bootstrap heading"),t.qZA()()(),t.TgZ(55,"tr")(56,"td")(57,"p")(58,"code",3),t._uU(59,"<h6></h6>"),t.qZA()()(),t.TgZ(60,"td")(61,"h6"),t._uU(62,"h6. Bootstrap heading"),t.qZA()()()()()()(),t.TgZ(63,"c-card",1)(64,"c-card-header"),t._uU(65," Headings "),t.qZA(),t.TgZ(66,"c-card-body")(67,"p")(68,"code",3),t._uU(69,".h1"),t.qZA(),t._uU(70," through "),t.TgZ(71,"code",3),t._uU(72,".h6"),t.qZA(),t._uU(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),t.qZA(),t.TgZ(74,"div",4)(75,"p",5),t._uU(76,"h1. Bootstrap heading"),t.qZA(),t.TgZ(77,"p",6),t._uU(78,"h2. Bootstrap heading"),t.qZA(),t.TgZ(79,"p",7),t._uU(80,"h3. Bootstrap heading"),t.qZA(),t.TgZ(81,"p",8),t._uU(82,"h4. Bootstrap heading"),t.qZA(),t.TgZ(83,"p",9),t._uU(84,"h5. Bootstrap heading"),t.qZA(),t.TgZ(85,"p",10),t._uU(86,"h6. Bootstrap heading"),t.qZA()()()(),t.TgZ(87,"c-card",11)(88,"c-card-header"),t._uU(89," Display headings "),t.qZA(),t.TgZ(90,"c-card-body")(91,"p"),t._uU(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),t.TgZ(93,"strong"),t._uU(94,"display heading"),t.qZA(),t._uU(95,"\u2014a larger, slightly more opinionated heading style."),t.qZA(),t.TgZ(96,"div",12)(97,"table",2)(98,"tbody")(99,"tr")(100,"td")(101,"span",13),t._uU(102,"Display 1"),t.qZA()()(),t.TgZ(103,"tr")(104,"td")(105,"span",14),t._uU(106,"Display 2"),t.qZA()()(),t.TgZ(107,"tr")(108,"td")(109,"span",15),t._uU(110,"Display 3"),t.qZA()()(),t.TgZ(111,"tr")(112,"td")(113,"span",16),t._uU(114,"Display 4"),t.qZA()()()()()()()(),t.TgZ(115,"c-card",1)(116,"c-card-header"),t._uU(117," Inline text elements "),t.qZA(),t.TgZ(118,"c-card-body")(119,"p"),t._uU(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),t.TgZ(121,"strong"),t._uU(122,"display heading"),t.qZA(),t._uU(123,"\u2014a larger, slightly more opinionated heading style."),t.qZA(),t.TgZ(124,"div",4)(125,"p"),t._uU(126,"You can use the mark tag to "),t.TgZ(127,"mark"),t._uU(128,"highlight"),t.qZA(),t._uU(129," text."),t.qZA(),t.TgZ(130,"p")(131,"del"),t._uU(132,"This line of text is meant to be treated as deleted text."),t.qZA()(),t.TgZ(133,"p")(134,"s"),t._uU(135,"This line of text is meant to be treated as no longer accurate."),t.qZA()(),t.TgZ(136,"p")(137,"ins"),t._uU(138,"This line of text is meant to be treated as an addition to the document."),t.qZA()(),t.TgZ(139,"p")(140,"u"),t._uU(141,"This line of text will render as underlined"),t.qZA()(),t.TgZ(142,"p")(143,"small"),t._uU(144,"This line of text is meant to be treated as fine print."),t.qZA()(),t.TgZ(145,"p")(146,"strong"),t._uU(147,"This line rendered as bold text."),t.qZA()(),t.TgZ(148,"p")(149,"em"),t._uU(150,"This line rendered as italicized text."),t.qZA()()()()(),t.TgZ(151,"c-card",1)(152,"c-card-header"),t._uU(153," Description list alignment "),t.qZA(),t.TgZ(154,"c-card-body")(155,"p"),t._uU(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),t.TgZ(157,"code",3),t._uU(158,".text-truncate"),t.qZA(),t._uU(159," class to truncate the text with an ellipsis."),t.qZA(),t.TgZ(160,"div",4)(161,"dl",17)(162,"dt",18),t._uU(163,"Description lists"),t.qZA(),t.TgZ(164,"dd",19),t._uU(165,"A description list is perfect for defining terms."),t.qZA(),t.TgZ(166,"dt",18),t._uU(167,"Euismod"),t.qZA(),t.TgZ(168,"dd",19)(169,"p"),t._uU(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),t.qZA(),t.TgZ(171,"p"),t._uU(172,"Donec id elit non mi porta gravida at eget metus."),t.qZA()(),t.TgZ(173,"dt",18),t._uU(174,"Malesuada porta"),t.qZA(),t.TgZ(175,"dd",19),t._uU(176,"Etiam porta sem malesuada magna mollis euismod."),t.qZA(),t.TgZ(177,"dt",20),t._uU(178,"Truncated term is truncated with "),t.TgZ(179,"code"),t._uU(180,"d-block"),t.qZA()(),t.TgZ(181,"dd",21),t._uU(182,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),t.qZA(),t.TgZ(183,"dt",18),t._uU(184,"Nesting"),t.qZA(),t.TgZ(185,"dd",19)(186,"dl",17)(187,"dt",22),t._uU(188,"Nested definition list"),t.qZA(),t.TgZ(189,"dd",23),t._uU(190,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),t.qZA()()()()()()()())},dependencies:[a.AkF,a.yue,a.nkx],encapsulation:2})}return e})(),data:{title:"Typography"}}]}];let U=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(y),l.Bz]})}return e})(),f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[d.ez,U,a.dTQ,a.zE6,a.gzQ,i.QX,a.dGk,a.P4_]})}return e})()}}]);