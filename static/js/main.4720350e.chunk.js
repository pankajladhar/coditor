(this.webpackJsonpcoditor=this.webpackJsonpcoditor||[]).push([[0],{127:function(e,t,a){var s={"./apl/apl.js":128,"./asciiarmor/asciiarmor.js":129,"./asn.1/asn.1.js":130,"./asterisk/asterisk.js":131,"./brainfuck/brainfuck.js":132,"./clike/clike.js":18,"./clojure/clojure.js":133,"./cmake/cmake.js":134,"./cobol/cobol.js":135,"./coffeescript/coffeescript.js":30,"./commonlisp/commonlisp.js":136,"./crystal/crystal.js":137,"./css/css.js":10,"./cypher/cypher.js":138,"./d/d.js":139,"./dart/dart.js":140,"./diff/diff.js":141,"./django/django.js":142,"./dockerfile/dockerfile.js":143,"./dtd/dtd.js":144,"./dylan/dylan.js":145,"./ebnf/ebnf.js":146,"./ecl/ecl.js":147,"./eiffel/eiffel.js":148,"./elm/elm.js":149,"./erlang/erlang.js":150,"./factor/factor.js":151,"./fcl/fcl.js":152,"./forth/forth.js":153,"./fortran/fortran.js":154,"./gas/gas.js":155,"./gfm/gfm.js":156,"./gherkin/gherkin.js":157,"./go/go.js":158,"./groovy/groovy.js":159,"./haml/haml.js":160,"./handlebars/handlebars.js":33,"./haskell-literate/haskell-literate.js":161,"./haskell/haskell.js":34,"./haxe/haxe.js":162,"./htmlembedded/htmlembedded.js":163,"./htmlmixed/htmlmixed.js":2,"./http/http.js":164,"./idl/idl.js":165,"./javascript/javascript.js":8,"./jinja2/jinja2.js":166,"./jsx/jsx.js":167,"./julia/julia.js":168,"./livescript/livescript.js":169,"./lua/lua.js":170,"./markdown/markdown.js":31,"./mathematica/mathematica.js":171,"./mbox/mbox.js":172,"./meta.js":32,"./mirc/mirc.js":173,"./mllike/mllike.js":174,"./modelica/modelica.js":175,"./mscgen/mscgen.js":176,"./mumps/mumps.js":177,"./nginx/nginx.js":178,"./nsis/nsis.js":179,"./ntriples/ntriples.js":180,"./octave/octave.js":181,"./oz/oz.js":182,"./pascal/pascal.js":183,"./pegjs/pegjs.js":184,"./perl/perl.js":185,"./php/php.js":186,"./pig/pig.js":187,"./powershell/powershell.js":188,"./properties/properties.js":189,"./protobuf/protobuf.js":190,"./pug/pug.js":35,"./puppet/puppet.js":191,"./python/python.js":36,"./q/q.js":192,"./r/r.js":193,"./rpm/rpm.js":194,"./rst/rst.js":195,"./ruby/ruby.js":19,"./rust/rust.js":196,"./sas/sas.js":197,"./sass/sass.js":38,"./scheme/scheme.js":198,"./shell/shell.js":199,"./sieve/sieve.js":200,"./slim/slim.js":201,"./smalltalk/smalltalk.js":202,"./smarty/smarty.js":203,"./solr/solr.js":204,"./soy/soy.js":205,"./sparql/sparql.js":206,"./spreadsheet/spreadsheet.js":207,"./sql/sql.js":208,"./stex/stex.js":37,"./stylus/stylus.js":39,"./swift/swift.js":209,"./tcl/tcl.js":210,"./textile/textile.js":211,"./tiddlywiki/tiddlywiki.js":212,"./tiki/tiki.js":213,"./toml/toml.js":214,"./tornado/tornado.js":215,"./troff/troff.js":216,"./ttcn-cfg/ttcn-cfg.js":217,"./ttcn/ttcn.js":218,"./turtle/turtle.js":219,"./twig/twig.js":220,"./vb/vb.js":221,"./vbscript/vbscript.js":222,"./velocity/velocity.js":223,"./verilog/verilog.js":224,"./vhdl/vhdl.js":225,"./vue/vue.js":226,"./webidl/webidl.js":227,"./xml/xml.js":7,"./xquery/xquery.js":228,"./yacas/yacas.js":229,"./yaml-frontmatter/yaml-frontmatter.js":230,"./yaml/yaml.js":40,"./z80/z80.js":231};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=127},27:function(e,t){e.exports={tabs:{hiddenTabs:[],defaultActiveTab:"Assertions"},themes:{dark:"material-palenight",light:"neo"}}},29:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(52),c=a.n(n),l=(a(29),a(5)),o=a.n(l),i=a(4),m=a(6),d=a(53);a(7),a(64);var u=function(e){var t=e.theme,n=e.mode,c=e.onEditorChange,l=e.initialDefination,o=function(e){var t=e.theme;return{mode:e.mode,theme:t,lineNumbers:!0}}({theme:t,mode:n});a(65)("./".concat(t,".css")),a(127)("./".concat(n,"/").concat(n,".js"));var m=Object(s.useState)(l),u=Object(i.a)(m,2),p=u[0],f=u[1];return r.a.createElement("div",{className:"editor w-full"},r.a.createElement(d.Controlled,{value:p,options:o,onBeforeChange:function(e,t,a){!function(e){f(e),c(e)}(a)}}))};u.defaultProps={theme:"neo",mode:"javascript"};var p=u,f=function(e){var t=e.content,a=t.title,s=t.description,n=t.notes,c=t.rules,l=t.examples;return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-4xl mb-2 font-display text-indigo-900 font-extrabold"},a),r.a.createElement("p",null,s),r.a.createElement("br",null),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"),r.a.createElement("h4",{className:"text-base mt-8 font-medium mb-2 text-gray-600"},"Examples:"),r.a.createElement("table",null,r.a.createElement("tbody",null,l.map((function(e){return r.a.createElement("tr",{className:"mb-2"},r.a.createElement("td",{className:"py-1"},r.a.createElement("span",{className:"bg-gray-200 rounded p-1 px-2 text-gray-800 leading-none"},e[0])),r.a.createElement("td",{className:"mr-1 text-gray-500"},r.a.createElement("i",{className:"icon-arrow-right"})),r.a.createElement("td",{className:"mr-1 text-gray-800 font-medium px-6"},e[1]),r.a.createElement("td",{className:"text-gray-500"},e[2]))})))),r.a.createElement("h4",{className:"text-base mt-8 font-medium mb-2 text-gray-600"},"Rules:"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",null,r.a.createElement("i",{className:"icon-check-circle"})," ",e)}))),r.a.createElement("hr",{className:"my-5 border-t-1 border-gray-400"}),r.a.createElement("div",{className:"text-sm text-gray-600 flex items-center "},r.a.createElement("i",{className:"icon-file-text mr-2 text-xl text-orange-600"}),r.a.createElement("div",null,n)))},j=function(e){var t,a;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.myjson.com/bins/zdsz8",e.next=3,o.a.awrap(fetch("https://api.myjson.com/bins/zdsz8",{method:"GET"}));case 3:return t=e.sent,e.next=6,o.a.awrap(t.json());case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}))},h=a(54),b=function(e,t,a){var s=function(e,t){return"\n  const data = ".concat(JSON.stringify(e),"\n  data.forEach(({inputs, output,failureMsg}, index)=>{\n    const result = ").concat(t,".apply(this, inputs)\n    results.push({failureMsg,status:assert(result, output)});\n  });\n")}(t,a);return"<script>\n    const results = [];\n    try {\n      ".concat('\n      const assert = (current, expected) => current === expected ? "Pass" : "Fail";\n    ',"\n      ").concat(e,"\n      ").concat(s,'\n      window.parent.postMessage({type: "TEST_RESULTS", response: JSON.stringify(results)})\n    } catch (e) {\n      window.parent.postMessage({type: "RUN_TIME_ERROR", response: e.stack})\n    }\n<\/script>')},g=function(e){e.duration;return r.a.createElement("div",{className:"w-2/5 bg-gray-100"},r.a.createElement("div",{className:"text-xs flex justify-between mb-2 text-gray-600"},r.a.createElement("span",null,"Time remaining"),r.a.createElement("span",null,"32 mins")),r.a.createElement("div",{className:"bg-gray-300 w-full h-2 rounded-lg"},r.a.createElement("span",{className:"bg-red-400 w-2/4 h-2 block rounded-lg"})))};function E(e){var t=e.children,a=(0,e.actionsHandler)(),n=a.handler,c=a.config,l=t.reduce((function(e,t){return c.hiddenTabs.includes(t.props.title)?e:(e[t.props.isExtra?0:1].push(t),e)}),[[],[]]),o=Object(i.a)(l,2),m=o[0],d=o[1],u=function(e){return d.find((function(t){return t.props.title===e}))},p=Object(s.useState)(u(c.defaultActiveTab)),f=Object(i.a)(p,2),j=f[0],h=f[1];n({switchTab:function(e){return h(u(e))}}),Object(s.useEffect)((function(){j&&h(u(j.props.title))}),[j,d]);var b="mx-4 py-4 px-1 text-gray-600 flex items-center border-b-2 border-transparent cursor-pointer";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("ul",{className:"flex"},d.map((function(e){var t=j&&j.props.title===e.props.title?"mx-4 py-4 px-1 text-gray-600 flex items-center border-b-2 border-transparent cursor-pointer border-gray-700 text-gray-800":b;return r.a.createElement("li",{className:t,onClick:function(){h(e)}},r.a.createElement("i",{className:"icon-".concat(e.props.icon," mr-1")})," ",e.props.title)}))),r.a.createElement(r.a.Fragment,null,m)),r.a.createElement("div",{className:"tab-content"},j))}E.defaultProps={hiddenTabs:[],icon:""},E.Tab=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,t)},E.Tab.defaultProps={title:"default title",icon:""},E.Extra=function(e){var t=e.children;return r.a.createElement("section",null,t)},E.Extra.defaultProps={isExtra:!0};var y=E,x=function(e){var t=[[e.isDarkTheme?"moon":"sun",e.themeChangeHandler],["maximize-2",e.fullScreenChangeHandler],["align-left",e.codeFormatHandler],["refresh-ccw",e.codeResetHandler]];return r.a.createElement("div",{className:"flex flex-auto rounded overflow-hidden mr-4"},t.map((function(e){var t=Object(i.a)(e,2),a=t[0],s=t[1];return r.a.createElement("button",{className:"bg-gray-300 text-gray-700 p-2 px-4",onClick:s},r.a.createElement("i",{className:"text-base icon-".concat(a)}))})))};x.defaultProps={isDarkTheme:!1,themeChangeHandler:function(){},fullScreenChangeHandler:function(){},codeFormatHandler:function(){},codeResetHandler:function(){}};var v=x,k=function(e){var t=e.results,a=(t=t?JSON.parse(t):[]).filter((function(e){return"Pass"===e.status})).length,s=t.filter((function(e){return"Fail"===e.status})).length;return r.a.createElement("div",null,r.a.createElement("div",{className:"mb-3"},r.a.createElement("span",{className:"font-bold text-green-500 mr-3"},a," Passed"),r.a.createElement("span",{className:"font-bold text-red-500"},s," failed!")),r.a.createElement("ul",null,t.map((function(e){var t="Fail"==e.status?"icon-x-circle text-red-500":"icon-check-circle text-green-500";return r.a.createElement("li",{className:"p-2 flex items-center border-b border-gray-400"},r.a.createElement("i",{className:"".concat(t," text-xl mr-2")}),e.failureMsg)}))))},w=function(e){var t=e.error;return r.a.createElement("pre",{className:"error"},t)},N=a(433),T=a(57),O=function(e){var t=e.assertions;return r.a.createElement("div",{className:" rounded p-2 bg-gray-200"},r.a.createElement(N.a,{language:"javascript",style:T.a},t.join("\n")))},S=function(e){var t=e.results;return r.a.createElement("div",{className:" rounded p-6 bg-gray-200",style:{minHeight:"205px"}},r.a.createElement(k,{results:t}))},R=function(e){var t=e.output;return r.a.createElement("div",{className:" rounded p-6 bg-gray-200",style:{minHeight:"205px"}},r.a.createElement(w,{error:t}),";")},D=function(e){var t=e.testRunnerHandler;return r.a.createElement("button",{className:"border border-gray-500 text-gray-600 p-2 px-4 rounded font-medium",onClick:t},r.a.createElement("i",{className:"text-base icon-code"})," Run test")},H=a(27),_=a.n(H),C=function(e,t){switch(t.type){case"DISABLE_LOADER":return Object(m.a)({},e,{loading:!1});case"STORE_DATA":return Object(m.a)({},e,{data:t.payload});case"STORE_CODE":return Object(m.a)({},e,{code:t.payload});case"SHOW_RESULTS":return Object(m.a)({},e,{results:t.payload});case"SHOW_ERRORS":return Object(m.a)({},e,{error:t.payload});case"SWITCH_THEME":return Object(m.a)({},e,{isDarkTheme:!e.isDarkTheme});default:throw new Error}},L=function(){var e={loading:!0,data:{},code:"",error:void 0,results:void 0,isDarkTheme:!1},t=Object(s.useRef)(),a={},n=Object(s.useReducer)(C,e),c=Object(i.a)(n,2),l=c[0],m=c[1],d=_.a.themes,u=d.dark,E=d.light,x=Object(s.useCallback)((function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(j(1));case 2:e=t.sent,m({type:"STORE_DATA",payload:e}),m({type:"STORE_CODE",payload:e.scaffoldCode}),m({type:"DISABLE_LOADER"});case 6:case"end":return t.stop()}}))}),[]);Object(s.useEffect)((function(){x(),window.addEventListener("message",(function(e){"RUN_TIME_ERROR"===e.data.type&&m({type:"SHOW_ERRORS",payload:e.data.response}),"TEST_RESULTS"===e.data.type&&m({type:"SHOW_RESULTS",payload:e.data.response})}))}),[x]),Object(s.useEffect)((function(){var e=l.isDarkTheme?"add":"remove";document.body.classList[e]("dark-theme")}),[l.isDarkTheme]);return r.a.createElement("div",{className:"app-container"},l.loading?r.a.createElement("div",{className:"loading"},"loading ..."):r.a.createElement("main",{className:"flex  h-screen"},r.a.createElement("section",{className:"w-2/5 p-12 pt-7 bg-white border-r border-gray-300"},r.a.createElement("div",{className:"flex justify-between mb-8"},r.a.createElement("img",{src:"https://www.thoughtworks.com/imgs/tw-logo.svg",className:"opacity-50 w-20"}),r.a.createElement("span",{className:"text-sm flex items-center"},r.a.createElement("i",{className:"icon-clock text-xl mr-1"})," Duration: 3 hrs")),r.a.createElement("div",{className:"instructions-section"},r.a.createElement(f,{content:l.data}))),r.a.createElement("section",{className:"flex-auto px-12"},r.a.createElement("div",{className:"py-4 flex justify-between my-5"},r.a.createElement(g,null),r.a.createElement("div",{className:"flex"},r.a.createElement(v,{isDarkTheme:l.isDarkTheme,themeChangeHandler:function(e){e.stopPropagation(),m({type:"SWITCH_THEME"})}}),r.a.createElement("button",{className:"bg-green-500 text-gray-100 p-2 px-4 rounded font-medium",onClick:function(){var e,s;try{s=l.code,e=h.transform(s,{presets:["es2015"]}).code}catch(c){var r=c.stack;return m({type:"SHOW_ERRORS",payload:r.substring(0,r.indexOf("at Parser."))}),void a.switchTab("Output")}var n=b(e,l.data.testCases,l.data.functionName);t.current.srcdoc=n,a.switchTab("Tests")}},r.a.createElement("i",{className:"text-base icon-zap"})," Submit code"))),r.a.createElement("div",{className:"code-section flex flex-col"},r.a.createElement("div",{className:"bg-white p-3 rounded border-4 border-gray-400  flex-1 relative"},r.a.createElement("span",{className:"absolute top-0 right-0 bg-gray-400 px-4 py-2 z-10 text-xs"},"ES6 enabled"),r.a.createElement(p,{onEditorChange:function(e){m({type:"SHOW_ERRORS",payload:void 0}),m({type:"SHOW_RESULTS",payload:void 0}),m({type:"STORE_CODE",payload:e})},initialDefination:l.data.scaffoldCode,theme:l.isDarkTheme?u:E})),r.a.createElement(y,{actionsHandler:function(){var e=_.a.tabs;return{handler:function(e){return a=e},config:{defaultActiveTab:e.defaultActiveTab,hiddenTabs:e.hiddenTabs}}}},r.a.createElement(y.Tab,{icon:"dashboard",title:"Assertions"},r.a.createElement(O,{assertions:l.data.assertions})),r.a.createElement(y.Tab,{icon:"bug",title:"Tests"},r.a.createElement(S,{results:l.results})),r.a.createElement(y.Tab,{icon:"browser-window",title:"Output"},r.a.createElement(R,{output:l.error})),r.a.createElement(y.Extra,null,r.a.createElement(D,{testRunnerHandler:function(e){e.stopPropagation(),a.switchTab&&a.switchTab("Tests")}}))))),r.a.createElement("iframe",{title:"code iframe",className:"hidden",ref:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,a){e.exports=a(430)},65:function(e,t,a){var s={"./3024-day.css":66,"./3024-night.css":67,"./abcdef.css":68,"./ambiance-mobile.css":69,"./ambiance.css":70,"./base16-dark.css":71,"./base16-light.css":72,"./bespin.css":73,"./blackboard.css":74,"./cobalt.css":75,"./colorforth.css":76,"./darcula.css":77,"./dracula.css":78,"./duotone-dark.css":79,"./duotone-light.css":80,"./eclipse.css":81,"./elegant.css":82,"./erlang-dark.css":83,"./gruvbox-dark.css":84,"./hopscotch.css":85,"./icecoder.css":86,"./idea.css":87,"./isotope.css":88,"./lesser-dark.css":89,"./liquibyte.css":90,"./lucario.css":91,"./material-darker.css":92,"./material-ocean.css":93,"./material-palenight.css":94,"./material.css":95,"./mbo.css":96,"./mdn-like.css":97,"./midnight.css":98,"./monokai.css":99,"./moxer.css":100,"./neat.css":101,"./neo.css":102,"./night.css":103,"./nord.css":104,"./oceanic-next.css":105,"./panda-syntax.css":106,"./paraiso-dark.css":107,"./paraiso-light.css":108,"./pastel-on-dark.css":109,"./railscasts.css":110,"./rubyblue.css":111,"./seti.css":112,"./shadowfox.css":113,"./solarized.css":114,"./ssms.css":115,"./the-matrix.css":116,"./tomorrow-night-bright.css":117,"./tomorrow-night-eighties.css":118,"./ttcn.css":119,"./twilight.css":120,"./vibrant-ink.css":121,"./xq-dark.css":122,"./xq-light.css":123,"./yeti.css":124,"./yonce.css":125,"./zenburn.css":126};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=65}},[[58,1,2]]]);
//# sourceMappingURL=main.4720350e.chunk.js.map