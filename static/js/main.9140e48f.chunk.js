(this.webpackJsonpportfolia_project=this.webpackJsonpportfolia_project||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=(a(49),a(50),a(1)),i=a(6);var s=a(4);var m=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"demo-big-content"},l.a.createElement(c.Layout,null,l.a.createElement(c.Header,{className:"header-color",title:"Samul Shrestha",scroll:!0},l.a.createElement(c.Navigation,null,l.a.createElement(i.b,{to:"/"},"Home"),l.a.createElement(i.b,{to:"/portfoliowebsite/resume"},"Resume"),l.a.createElement(i.b,{to:"/projects"},"Projects"),l.a.createElement(i.b,{to:"/contacts"},"Contacts"))),l.a.createElement(c.Drawer,{title:"React Applications"},l.a.createElement(c.Navigation,null,l.a.createElement(i.b,{to:"/"},"Home"),l.a.createElement(i.b,{to:"/portfoliowebsite/resume"},"Resume"),l.a.createElement(i.b,{to:"/projects"},"Projects"),l.a.createElement(i.b,{to:"/contacts"},"Contacts"))),l.a.createElement(c.Content,null,l.a.createElement("div",{className:"page-content"}),e.children))))},u=a(7);var p=function(){return l.a.createElement(u.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{width:"100vw",margin:"auto"}},l.a.createElement(c.Grid,{className:"landing-grid"},l.a.createElement(c.Cell,{col:12},l.a.createElement("div",{className:"banner-img"},l.a.createElement("img",{src:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg",alt:"avatar",className:"avatar-img"})),l.a.createElement("div",{className:"banner-text"},l.a.createElement("div",{className:"banner-header"},l.a.createElement("h1",null,"Skill Tree"),l.a.createElement("hr",null)),l.a.createElement("p",null,"HTML5/CSS3 | Bootstrap | JavaScript | Firebase | React | NodeJs | Express | MongoDB |Java | Andriod | C# | Unity | Python "),l.a.createElement("hr",null),l.a.createElement("h2",null,"Hover Icon for Experience Info")),l.a.createElement("div",{className:"social-links"},l.a.createElement("div",{className:"html","data-tooltip":"Worked on many projects implementing HTML5. Good grasp of the working knowledge of HTML5"},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/143/143655.svg",alt:"html"})),l.a.createElement("div",{className:"html","data-tooltip":"Have complete knowledge of the fundamentals. Worked with pygames,pandas.matlb libraries"}," ",l.a.createElement("img",{src:"https://www.flaticon.com/premium-icon/icons/svg/3098/3098090.svg"})," "),l.a.createElement("div",{className:"html","data-tooltip":"Proficient with ReactJs, Redux,API handling"},l.a.createElement("img",{src:"https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg"})," "),l.a.createElement("div",{className:"html","data-tooltip":"Worked on Andriod application and published it in Google Play"}," ",l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/919/919854.svg"})," "),l.a.createElement("div",{className:"html","data-tooltip":"Experience with creating and handling API end points. Good with handling Nosql database"},"  ",l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/919/919828.svg"})),l.a.createElement("div",{className:"html","data-tooltip":"Worked on many game projects. Recreated games like Angry Bird, Flappy Bird, Fps survival games etc"},"   ",l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png"}))))))},d=a(43),h=a(13),E=a(14),g=a(16),f=a(15),v=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.Grid,null,l.a.createElement(c.Cell,{col:4},l.a.createElement("h4",null,this.props.start,"-",this.props.end)),l.a.createElement(c.Cell,{col:8},l.a.createElement("h4",null,this.props.post),l.a.createElement("p",null,this.props.name))))}}]),a}(n.Component),y=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.Grid,null,l.a.createElement(c.Cell,{col:4},l.a.createElement("h4",null,this.props.duration),l.a.createElement("h5",null,"(Intern)")),l.a.createElement(c.Cell,{col:8},l.a.createElement("h4",null,this.props.companyName),l.a.createElement("p",null,this.props.jobDescription))))}}]),a}(n.Component),b=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.Grid,null,l.a.createElement(c.Cell,{col:12},l.a.createElement("div",{style:{display:"flex"}},this.props.skills,l.a.createElement(c.ProgressBar,{style:{margin:"auto"},progress:this.props.progress})))))}}]),a}(n.Component);var C=function(e){var t=e.item,a=e.index,n=e.toggleFAQ;return l.a.createElement("div",{className:"faq "+(t.open?"open":""),onClick:function(){return n(a)}},l.a.createElement("div",{className:"faq-question"},t.question),l.a.createElement("div",{className:"faq-answers"},t.answer))};var w=function(){var e=Object(n.useState)([{question:"How many programmer does it take to change a light bulb?",answer:"None, we do not adress hardware issues ",open:!1},{question:"Best source of Infromation?",answer:"Stack overflow ",open:!1}]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=function(e){r(a.map((function(t,a){return a===e&&(t.open=!t.open),t})))};return l.a.createElement(u.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.a.createElement(c.Grid,null,l.a.createElement(c.Cell,{col:4},l.a.createElement("div",{className:"resume-col-left"},l.a.createElement("img",{src:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg",alt:"avatar",style:{height:"150px",width:"auto",borderRadius:"5px"}}),l.a.createElement("h3",null,"Samul Shrestha"),l.a.createElement("p",null,"I am a Samul Shrestha who aims to be able to find an exciting and challenging entry level position in the Information and Technology industry alongside a company who will continuously motivate and drive me to do my best and improve on my skills and abilities in order to be able to assist the company in achieving its company mission and goals. I have always been interested in working with new Technologies.")),l.a.createElement("h3",null,"Some FAQs",l.a.createElement("hr",{style:{width:"50%",opacity:1,color:"black"}})),l.a.createElement("div",{className:"faqs"},a.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(C,{item:e,index:t,toggleFAQ:o}))})))),l.a.createElement(c.Cell,{col:8,className:"resume-right-col"},l.a.createElement("h2",null,"Education"),l.a.createElement("hr",{style:{width:"50%"}}),l.a.createElement(v,{start:2003,end:2013,name:"WhiteField Higher Secondary School",post:"SLC"}),l.a.createElement(v,{start:2013,end:2015,name:"Xavier Academy,Laximpat",post:"Intermediate Level +2,Science"}),l.a.createElement(v,{start:2016,end:2020,name:"Prime College",post:"B.Sc. Computer Science and Information Technology"}),l.a.createElement("h2",null,"Experience "),l.a.createElement("hr",{style:{width:"50%"}}),l.a.createElement(y,{start:"2018",end:"2019",duration:"3 Months",companyName:"Financial Controller Goverment Office",jobDescription:"I have worked on FCGO's IT department for 3 months as an intern. The responsibilities\n                assigned to me during the period of internship was to learn and update the systems that were\n                on use there. Some of the key technologies that I have learned from the experience was "}),l.a.createElement("h2",null,"Skills"),l.a.createElement("hr",{style:{width:"50%"}}),l.a.createElement(b,{skills:"Java",progress:50}),l.a.createElement(b,{skills:"ReactJs",progress:85}),l.a.createElement(b,{skills:"HTML/CSS",progress:85}),l.a.createElement(b,{skills:"NodeJs",progress:80}),l.a.createElement(b,{skills:"MongoDB",progress:85}),l.a.createElement(b,{skills:"Unity",progress:40}),l.a.createElement(b,{skills:"Python",progress:50}),l.a.createElement(b,{skills:"JavaScript",progress:75}),l.a.createElement(b,{skills:"React Native",progress:15}))))};var x=function(){return l.a.createElement(u.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"contact-body"},l.a.createElement(c.Grid,{className:"contact-grid"},l.a.createElement(c.Cell,{col:6},l.a.createElement("h2",null,"Samul Shrestha "),l.a.createElement("img",{src:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg",alt:"avatar",style:{height:"150px",width:"auto",borderRadius:"5px"}}),l.a.createElement("p",null,l.a.createElement("div",null,l.a.createElement("strong",null,"Date of Birth:")," July 14, 1997"),l.a.createElement("div",null,l.a.createElement("strong",null,"Gender: ")," Male"),l.a.createElement("div",null,l.a.createElement("strong",null,"Birth Place: ")," Kathmandu, Nepal"),l.a.createElement("div",null,l.a.createElement("strong",null,"Availability"),": Full Time"))),l.a.createElement(c.Cell,{col:6},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("hr",null),l.a.createElement("div",{className:"contact-list"},l.a.createElement(c.List,null,l.a.createElement(c.ListItem,null,l.a.createElement(c.ListItemContent,{style:{fontSize:"22px",fontFamily:"Oxygen"},icon:"person"},"Samul Shrestha")),l.a.createElement(c.ListItem,null,l.a.createElement(c.ListItemContent,{style:{fontFamily:"Oxygen"},icon:"phone"},"9861601287")),l.a.createElement(c.ListItem,null,l.a.createElement(c.ListItemContent,{style:{fontFamily:"Oxygen"},icon:"email"},"samulshrestha101@gmail.com")),l.a.createElement(c.ListItem,null,l.a.createElement(c.ListItemContent,{style:{fontFamily:"Oxygen"},icon:"map"},"Nayabazar, Kathmandu")))))))};var k=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About me"))};var j=function(){return l.a.createElement(u.b.div,{initial:{opacity:0,x:"-100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-100%"},className:"project_container"},l.a.createElement(c.Card,{shadow:1,style:{width:"400px",margin:"auto"}},l.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://res.cloudinary.com/practicaldev/image/fetch/s--MzcqFejf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg) center / cover"}},"React Project #1"),l.a.createElement(c.CardText,null,"The Project Consist of multiple single page applications.That consume a foreign API and display the result to the client. Live Weather App, Live Recipe App, Live currency conversion app etc. The project uses redux,react-routing,APIs etc."),l.a.createElement(c.CardActions,{border:!0},l.a.createElement(c.Button,{colored:!0},l.a.createElement("a",{target:"_blank",href:"https://samul333.github.io/testapiapp/"},"Live Demo"))),l.a.createElement(c.CardMenu,{style:{color:"#fff"}},l.a.createElement(c.IconButton,{name:"share"}))),l.a.createElement(c.Card,{shadow:0,style:{width:"400px",margin:"auto"}},l.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://res.cloudinary.com/practicaldev/image/fetch/s--MzcqFejf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg) center / cover"}},"React Project #2"),l.a.createElement(c.CardText,null,"Corona Tracking Website. Information of corona counts all over the world."),l.a.createElement(c.CardActions,{border:!0},l.a.createElement(c.Button,{colored:!0},l.a.createElement("a",{target:"_blank",href:"https://samul333.github.io/ronatracker/"},"Live Demo"))),l.a.createElement(c.CardMenu,{style:{color:"#fff"}},l.a.createElement(c.IconButton,{name:"share"}))),l.a.createElement(c.Card,{shadow:0,style:{width:"400px",margin:"auto"}},l.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://res.cloudinary.com/practicaldev/image/fetch/s--MzcqFejf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg) center / cover"}},"React Project #3"),l.a.createElement(c.CardText,null,"Replication of a mobile news portal website using React, Firebase."),l.a.createElement(c.CardActions,{border:!0},l.a.createElement(c.Button,{colored:!0},l.a.createElement("a",{target:"_blank",href:"https://nba-full-4e8ba.firebaseapp.com/"},"Live Demo"))),l.a.createElement(c.CardMenu,{style:{color:"#fff"}},l.a.createElement(c.IconButton,{name:"share"}))))};var _=function(){return l.a.createElement(u.b.div,{initial:{opacity:0,x:"-100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-100%"}},l.a.createElement(c.Card,{shadow:1,style:{width:"400px",margin:"auto"}},l.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://unity.com/logo-unity-web.png) center / cover"}},"Unity Project #1"),l.a.createElement(c.CardText,null,"An FPS survival game."),l.a.createElement(c.CardActions,{border:!0},l.a.createElement(c.Button,{colored:!0},"Comming Soon")),l.a.createElement(c.CardMenu,{style:{color:"#fff"}},l.a.createElement(c.IconButton,{name:"share"}))))};var N=function(){return l.a.createElement(u.b.div,{initial:{opacity:0,x:"-100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-100%"}},l.a.createElement(c.Card,{shadow:1,style:{width:"400px",margin:"auto"}},l.a.createElement(c.CardTitle,{style:{color:"#333",height:"176px",background:"url(https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA) center / cover"}},"Andriod Project #1"),l.a.createElement(c.CardText,null,"NotifyMe is an andriod application that is build to solve the problem of quick and easy dispense of information to the students and teachers."),l.a.createElement(c.CardActions,{border:!0},l.a.createElement(c.Button,{colored:!0},l.a.createElement("a",{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.huske.sharedexample&hl=en"},"Live Demo"))),l.a.createElement(c.CardMenu,{style:{color:"#fff"}},l.a.createElement(c.IconButton,{name:"share"}))))},T=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).renderContent=function(){return 0==n.state.activeTab?l.a.createElement(j,null):1==n.state.activeTab?l.a.createElement(N,null):2==n.state.activeTab?l.a.createElement(_,null):void 0},n.state={activeTab:0},n}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.b.div,{initial:{opacity:0,y:"-100%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"-100%"},className:"demo-tabs"},l.a.createElement(c.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},l.a.createElement(c.Tab,null,"React"),l.a.createElement(c.Tab,null,"Andriod"),l.a.createElement(c.Tab,null,"Unity")),l.a.createElement("section",null,l.a.createElement("div",{className:"content"},this.renderContent())))}}]),a}(n.Component);var S=function(){return l.a.createElement(m,null,l.a.createElement(u.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0,component:p}),l.a.createElement(s.a,{path:"/portfoliowebsite",exact:!0,component:p}),l.a.createElement(s.a,{path:"/portfoliowebsite/resume",exact:!0,component:w}),l.a.createElement(s.a,{path:"/contacts",exact:!0,component:x}),l.a.createElement(s.a,{path:"/aboutme",exact:!0,component:k}),l.a.createElement(s.a,{path:"/projects",exact:!0,component:T}))))};a(101),a(102);o.a.render(l.a.createElement(i.a,null,l.a.createElement(S,null)),document.getElementById("root"))},44:function(e,t,a){e.exports=a(103)},49:function(e,t,a){},50:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.9140e48f.chunk.js.map