(this.webpackJsonpnav2goe=this.webpackJsonpnav2goe||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(9),s=n.n(i),a=(n(14),n(3)),j=(n(4),n(1));var l=n(7),u=n.n(l),b=function(e){return Object(j.jsx)("div",{className:"ErrorPage",children:Object(j.jsxs)("div",{className:"ErrorPageTitle",children:[Object(j.jsx)("header",{className:u.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:u.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:u.a.actions,children:Object(j.jsx)("button",{onClick:e.onConfirm,children:"Zur\xfcck zur Suche"})})]})})},o=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("header",{className:"Startseite-header",children:[Object(j.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(j.jsxs)("div",{id:"endText",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("br",{}),"Vielen Dank f\xfcr die Teilnahme!"," "]}),Object(j.jsxs)("p",{children:["Klicken Sie jetzt bitte auf den Button, um zur Umfrage zu gelangen",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})]}),Object(j.jsx)("div",{id:"containerButtonEnd",children:Object(j.jsx)("a",{href:"https://www.survio.com/survey/d/F9A7E9J9M9I6R5L9O",children:"Umfrage starten"})})]})})},d=n(5),h=n(6),O=function(e,t,n){for(var c=e.split(":"),r=Object(a.a)(c,2),i=r[0],s=r[1],j=(t=Number(t),Number(i)+Number(t)),l=Number(s)+Number(n);l>=60;)l-=60,j+=1;return l<10&&(l="0"+l),j>=24&&(j-=24),j<10&&(j="0"+j),[j+":"+l,!1]},m=function(e){var t=e.toString().split("-"),n=Number(t[1]),c=Number(t[2]);Number(t[0]);return c+"."+n+"."},x=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(!0),l=Object(a.a)(s,2),u=l[0],b=l[1],x=Object(c.useState)(!0),v=Object(a.a)(x,2),p=v[0],f=v[1],g=Object(c.useState)(!1),N=Object(a.a)(g,2);N[0],N[1];console.log(e.departureDay,e.departureStop);Object(c.useEffect)((function(){var e=setTimeout((function(){b(!1),f(!1)}),7790);return function(){return clearTimeout(e)}}),[]);var S=function(e){var t=Math.floor(e),n=Math.round(60*(e-t));return"".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n)}(function(t){var n=t.split(":"),c=Object(a.a)(n,2),r=c[0],i=c[1],s=e.additionalRandomMinutes,j=Number(i)+Number(s);return Number(r)+Number(j)/60}(e.departureTime)),k=function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),r=Number(Math.floor(.3*c)),i=Number(Math.floor(.15*c)),s=Number(c-r-i);return[Number(r),Number(i),Number(s)]}(e.durationH,e.durationMin);!function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),r=Number(Math.floor(.3*c)),i=Number(Math.floor(.1*c)),s=Number(Math.floor(.2*c)),a=Number(Math.floor(.15*c)),j=Number(c-r-i-s-a);Number(r),Number(i),Number(s),Number(a),Number(j)}(e.durationH,e.durationMin);return r?Object(j.jsx)(o,{}):Object(j.jsx)("div",{className:"container-verbindung",children:u?p?Object(j.jsx)("p",{children:"...loading..."}):null:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{className:"Verbindung-header",children:"Verbindung"}),Object(j.jsx)("h2",{children:"\xdcbersicht"}),Object(j.jsx)("div",{className:"connectionChoice",children:Object(j.jsxs)("div",{id:"containerFastestConnection",children:[Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Fahrtkosten: 2.60 \u20ac "}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Dauer: 0 h 42 min"}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Umstiege: 1"}),Object(j.jsxs)("div",{className:"umstiegIcons",children:[Object(j.jsx)(d.a,{size:"3rem",color:"white"}),Object(j.jsx)(h.b,{size:"3rem",color:"white"}),Object(j.jsx)(d.a,{size:"3rem",color:"white"})]})]})}),Object(j.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 1"}),Object(j.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(j.jsx)("p",{children:"Abfahrt:"})," ",m(e.departureDay)," um"," ",S," "]}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 50"}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft:"})," ",m(e.departureDay)," um"," ",O(S,Number(0),Number(k[0]))," "]}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Abfahrt an Haltestelle:"})," ",e.departureStop," "]}),Object(j.jsx)("div",{className:"busIcon",children:Object(j.jsx)(d.a,{size:"3rem",color:"white"})}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]})]}),Object(j.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 2"}),Object(j.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(j.jsx)("p",{children:"Abfahrt:"})," ",m(e.departureDay)," um"," ",O(S,Number(0),Number(k[0]+k[1]))," "]}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 18"}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft:"})," ",m(e.departureDay)," um"," ",O(S,Number(0),Number(k[0]+k[1]+k[2]))," "]}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Abfahrt an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]}),Object(j.jsx)("div",{className:"busIcon",children:Object(j.jsx)(d.a,{size:"3rem",color:"white"})}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft an Haltestelle:"})," ",e.destinationStop," "]})]}),Object(j.jsxs)("div",{className:"buttons-verbindung",children:[Object(j.jsxs)("button",{className:"button",onClick:function(){e.onGoBack()},type:"submit",children:[" ","Zur\xfcck"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){i(!0),e.onSetStartFormHidden(!0)},children:[" ","Test Beenden?"]})]})]})})},v=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0],s=n[1],l=Object(c.useState)(""),u=Object(a.a)(l,2),o=u[0],d=u[1],O=Object(c.useState)(""),m=Object(a.a)(O,2),v=m[0],p=m[1],f=Object(c.useState)(""),g=Object(a.a)(f,2),N=g[0],S=g[1],k=Object(c.useState)(!1),z=Object(a.a)(k,2),w=z[0],C=z[1],F=Object(c.useState)(),T=Object(a.a)(F,2),y=T[0],D=T[1],H=Object(c.useState)(!0),A=Object(a.a)(H,2),B=A[0],M=A[1],G=Object(c.useRef)(),I=Object(c.useRef)(),E=Object(c.useState)(!0),L=Object(a.a)(E,2),V=L[0],K=L[1],R=!1;return Object(c.useEffect)((function(){var e=setTimeout((function(){K(!1),M(!1)}),7790);return function(){return clearTimeout(e)}}),[]),V?Object(j.jsx)("p",{children:"...loading..."}):Object(j.jsxs)(r.a.Fragment,{children:[y&&Object(j.jsx)(b,{title:y.title,message:y.message,onConfirm:function(){D(!1)}}),B?null:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Verbindungssuche "}),Object(j.jsxs)("div",{className:"container-searchpage",children:[Object(j.jsx)("input",{list:"haltestellen",spellcheck:"false",type:"text",value:i,onChange:function(e){s(e.target.value)},placeholder:"Start",ref:G}),Object(j.jsx)("button",{className:"button-swap",onClick:function(){var e=G.current.value;s(I.current.value),d(e)},children:Object(j.jsx)(h.a,{size:"3rem"})}),Object(j.jsx)("input",{list:"haltestellen",spellCheck:"false",type:"text",value:o,onChange:function(e){d(e.target.value)},placeholder:"Ziel",ref:I}),Object(j.jsx)("input",{type:"date",value:v,onChange:function(e){p(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"time",value:N,onChange:function(e){S(e.target.value)}})]})]}),Object(j.jsx)("div",{children:w?Object(j.jsx)(x,{onSetStartFormHidden:e.onSetStartFormHidden,onGoBack:function(){M(!1),C(!1)},departureStop:i,destinationStop:o,departureDay:v,departureTime:N,durationH:0,durationMin:42,additionalRandomMinutes:3}):Object(j.jsxs)("div",{className:"buttons-search-page",children:[Object(j.jsx)("button",{className:"button-search",onClick:function(){0===i.trim().length||0===o.trim().length?(D({title:"Falsche Daten",message:"Bitte geben Sie einen passenden Start- und Zielort ein!"}),R=!0):""===N||""===v?(D({title:"Falsche Daten",message:"Bitte geben Sie einen Abfahrtstag und eine Abfahrtszeit an!"}),R=!0):i===o&&(D({title:"Falsche Daten",message:"Start- und Zielort d\xfcrfen nicht identisch sein!"}),R=!0),R||(M(!0),C(!0))},children:"Suchen"}),Object(j.jsx)("button",{className:"button-search",onClick:function(){e.onGoBack()},type:"submit",children:"Zur\xfcck zur Startseite"})," "]})}),Object(j.jsxs)("datalist",{id:"haltestellen",children:[Object(j.jsx)("option",{value:"An der Lutte"}),Object(j.jsx)("option",{value:"Auf dem Hagen"}),Object(j.jsx)("option",{value:"Baumweg"}),Object(j.jsx)("option",{value:"Bornbreite"}),Object(j.jsx)("option",{value:"B\xfcrgerstra\xdfe"}),Object(j.jsx)("option",{value:"Deisterstra\xdfe"}),Object(j.jsx)("option",{value:"Elmweg"}),Object(j.jsx)("option",{value:"Fritz-Stra\xdfe"}),Object(j.jsx)("option",{value:"Gehrenring"}),Object(j.jsx)("option",{value:"Gr\xfcner Weg"}),Object(j.jsx)("option",{value:"Hauptbahnhof"}),Object(j.jsx)("option",{value:"Hardtweg"}),Object(j.jsx)("option",{value:"Hiroshimaplatz"}),Object(j.jsx)("option",{value:"Kiessee"}),Object(j.jsx)("option",{value:"Klinikum"}),Object(j.jsx)("option",{value:"Klosterweg"}),Object(j.jsx)("option",{value:"Kreuzbergring"}),Object(j.jsx)("option",{value:"Krugstra\xdfe"}),Object(j.jsx)("option",{value:"Landgericht/ Bahnhof"}),Object(j.jsx)("option",{value:"Lutteranger"}),Object(j.jsx)("option",{value:"Reinholdstra\xdfe"}),Object(j.jsx)("option",{value:"Schillerstra\xdfe"}),Object(j.jsx)("option",{value:"Sch\xfctzenplatz"}),Object(j.jsx)("option",{value:"Siekweg"}),Object(j.jsx)("option",{value:"Sollstra\xdfe"}),Object(j.jsx)("option",{value:"Stadtstieg"}),Object(j.jsx)("option",{value:"Tammstra\xdfe"}),Object(j.jsx)("option",{value:"Teichstra\xdfe"}),Object(j.jsx)("option",{value:"Treuenhagen"}),Object(j.jsx)("option",{value:"Tulpenweg"}),Object(j.jsx)("option",{value:"Waldstra\xdfe"})]})]})},p=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(!1),l=Object(a.a)(s,2),u=l[0],b=l[1],o=Object(c.useState)(!1),d=Object(a.a)(o,2),h=d[0],O=d[1];return Object(j.jsxs)("div",{children:[r?null:Object(j.jsx)("form",{children:Object(j.jsxs)("header",{className:"StartPage-header",children:[Object(j.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(j.jsx)("div",{id:"welcomeText",children:Object(j.jsxs)("p",{children:[h?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),"Wilkommen. ",Object(j.jsx)("br",{}),"Nutzen sie diese App, um sich in folgender Situation weiterzuhelfen:",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Sie haben sich dazu entschieden, Ihre Freunde in G\xf6ttingen zu besuchen. Nachdem Sie am Hauptbahnhof in G\xf6ttingen angekommen sind, wollen Sie die \xf6ffentlichen Verkehrsmittel nutzen, um zu ihren Freunden zu fahren.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'Ihre Freunde haben Ihnen bereits mitgeteilt, dass Sie an der Haltestelle "Treuenhagen" wohnen. Da sie Ihre Freunde nun ungl\xfccklicherweise nicht mehr erreichen k\xf6nnen, haben Sie sich die lokale Mobilit\xe4ts-App \u201eNav2G\xf6\u201c heruntergeladen, um sich vor Ort zurechtzufinden. ',Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})]}),"Nutzen Sie f\xfcr die Verbindungssuche vom Hauptbahnhof nach Treuenhagen das aktuelle Datum und die aktuelle Uhrzeit.",Object(j.jsx)("br",{})]})}),Object(j.jsx)("h1",{id:"appVersionAnzeige2",children:"App-Version 2"})]})}),u?Object(j.jsx)(v,{onGoBack:function(){b(!1),O(!1)},onSetStartFormHidden:i}):Object(j.jsx)("button",{id:"welcomeTextButton",onClick:function(){b(!0),O(!0)},type:"submit",children:"Weiter"})]})},f=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()},4:function(e,t,n){},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.0e8c1dc3.chunk.js.map