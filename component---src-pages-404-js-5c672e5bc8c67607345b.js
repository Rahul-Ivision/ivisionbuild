(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(167),l=t(164);a.default=function(){return s.a.createElement(r.a,null,s.a.createElement(l.a,{title:"404: Not found"}),s.a.createElement("h1",null,"NOT FOUND"),s.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},158:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),s=t.n(n),r=t(4),l=t.n(r),c=t(33),i=t.n(c);t.d(a,"a",function(){return i.a});t(159);var m=s.a.createContext({}),o=function(e){return s.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,a,t){var n;e.exports=(n=t(163))&&n.default||n},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},163:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),s=t.n(n),r=t(4),l=t.n(r),c=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return s.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=m},164:function(e,a,t){"use strict";var n=t(165),s=t(0),r=t.n(s),l=t(4),c=t.n(l),i=t(161),m=t.n(i);function o(e){var a=e.description,t=e.lang,s=e.meta,l=e.keywords,c=e.title,i=n.data.site,o=a||i.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(s)})}o.defaultProps={lang:"en",meta:[],keywords:[]},o.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=o},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},167:function(e,a,t){"use strict";var n=t(162),s=t(0),r=t.n(s),l=t(4),c=t.n(l),i=t(158),m=t(161),o=t.n(m),u=t(7),f=t.n(u),p=(t(74),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={visible:!1},a.handleToggle=function(){a.setState({visible:!a.state.visible})},a}return f()(a,e),a.prototype.render=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"top-line"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 col-md-10 font-15"},r.a.createElement("span",{className:"mr-3"},r.a.createElement("i",{className:"fas fa-phone phoneFont mr-1"}),"USA ",r.a.createElement("a",{href:"tel:+1 860-9670120",className:"black"}," +1 860-9670120")," ",r.a.createElement("i",{className:"fas fa-phone phoneFont mr-1 ml-2"}),"IND ",r.a.createElement("a",{href:"tel:+91 9767-024642",className:"black"},"+91 9767-024642")),r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-envelope font-12 mr-1"}),r.a.createElement("a",{href:"mailto:contact@ivisionstudio.in",className:"black"},"contact@ivisionstudio.in")," ")),r.a.createElement("div",{className:"col-lg-2 col-md-2 font-14 d-flex justify-content-end"},r.a.createElement("span",{className:"mr-2"}," ",r.a.createElement("a",{href:"https://www.facebook.com/ivision.webstudio.9",target:"_blank",className:"socialIcon"},r.a.createElement("i",{className:"fab fa-facebook-f black font-14 mt-1"}))),r.a.createElement("span",{className:"mr-2"}," ",r.a.createElement("a",{href:"https://www.instagram.com/ivisionwebstudio/",className:"socialIcon",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram black font-14 mt-1"}))),r.a.createElement("span",{className:"mr-2"}," ",r.a.createElement("a",{href:"https://in.linkedin.com/company/ivision-studio",className:"socialIcon",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin-in black font-14 mt-1"}))))))),r.a.createElement("div",{className:"mainNavBar"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light pl-0 pr-0"},r.a.createElement(i.a,{to:"/",className:"navbar-brand",href:"#"},r.a.createElement("img",{src:"../images/ivision_logo.png"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":this.state.visible,"aria-label":"Toggle navigation",onClick:this.handleToggle},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:this.state.visible?"collapse navbar-collapse show":"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(i.a,{to:"/",className:"nav-item nav-link  mr-3"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(i.a,{to:"/about-us/",className:"nav-item nav-link mr-3"},"About Us"),r.a.createElement(i.a,{to:"/services/",className:"nav-item nav-link mr-3"},"Services"),r.a.createElement(i.a,{to:"/career/",className:"nav-item nav-link mr-3"},"Career"),r.a.createElement(i.a,{to:"/team/",className:"nav-item nav-link mr-3"},"Team"),r.a.createElement(i.a,{to:"/contact/",className:"nav-item nav-link "},"Contact")))))))},a}(r.a.Component));p.propTypes={siteTitle:c.a.string},p.defaultProps={siteTitle:""};var d=p,E=(t(143),function(){return r.a.createElement("div",{className:"footer pt-5 pb-5"},r.a.createElement("div",{className:"d-flex justify-content-center mb-3 footerNav"},r.a.createElement("p",{className:"ml-3 mr-3 mb-0"},r.a.createElement(i.a,{to:"/"},"Home ")),r.a.createElement("p",{className:"ml-3 mr-3 mb-0"},r.a.createElement(i.a,{to:"/about-us/"},"About Us")),r.a.createElement("p",{className:"ml-3 mr-3 mb-0"},r.a.createElement(i.a,{to:"/team/"},"Team")),r.a.createElement("p",{className:"ml-3 mr-3 mb-0"},r.a.createElement(i.a,{to:"/services/"},"Services")),r.a.createElement("p",{className:"ml-3 mr-3 mb-0"},r.a.createElement(i.a,{to:"/career/"},"Career")),r.a.createElement("p",{className:"ml-3 mr-3 mb-0"},r.a.createElement(i.a,{to:"/contact/"},"Contact"))),r.a.createElement("div",{className:"d-flex justify-content-center mb-3 footerContact"},r.a.createElement("div",{className:"phone1"},r.a.createElement("i",{className:"fas fa-phone phoneFont mr-1"})," USA ",r.a.createElement("a",{href:"tel:+1 860-9670120",className:"black mr-3"}," +1 860-9670120")),r.a.createElement("div",{className:"phone2"},r.a.createElement("i",{className:"fas fa-phone phoneFont mr-1 ml-1"}),"IND ",r.a.createElement("a",{href:"tel:+91 9767-024642",className:"black mr-3"},"+91 9767-024642")),r.a.createElement("div",{className:"email"},r.a.createElement("i",{className:"fas fa-envelope mr-1"}),r.a.createElement("a",{href:"mailto:contact@ivisionstudio.in",className:"black mr-3"},"contact@ivisionstudio.in")),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.facebook.com/ivision.webstudio.9",target:"_blank",className:"socialIcon mr-2"},r.a.createElement("i",{className:"fab fa-facebook-f black font-14 mt-1"})),r.a.createElement("a",{href:"https://www.instagram.com/ivisionwebstudio/",className:"socialIcon mr-2",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram black font-14 mt-1"})),r.a.createElement("a",{href:"https://in.linkedin.com/company/ivision-studio",className:"socialIcon mr-2",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin-in black font-14 mt-1"})))),r.a.createElement("hr",{className:"mb-3"}),r.a.createElement("div",{className:"text-center footerCopy"},"Copyright ©2019 All rights reserved | Website Design by ",r.a.createElement("a",{href:"http://ivisionstudio.in/"},"Ivision Web Studio")))}),v=function(e){var a=e.children;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css",integrity:"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",crossorigin:"anonymous"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),r.a.createElement("link",{rel:"icon",type:"image/png",href:"images/favicon.png"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",charset:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})),r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,a),r.a.createElement(E,null)))},data:n})};v.propTypes={children:c.a.node.isRequired};a.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-5c672e5bc8c67607345b.js.map