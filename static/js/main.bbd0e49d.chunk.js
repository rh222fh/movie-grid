(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/placeholder.51e913d5.png"},5407:function(e,t,a){e.exports=a(5527)},5412:function(e,t,a){},5413:function(e,t,a){},5527:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(35),c=a.n(r),i=(a(5412),a(5413),a(31)),l=a(24),s=a(5),d=a(11),m=a(22),u=a(29),h=function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("xs"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(m.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(m.a)({},e.breakpoints.up("xs"),{display:"flex"}),layout:Object(m.a)({marginTop:25,width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0"),textAlign:"center"},pageTitle:{textAlign:"left"},card:{textAlign:"left",maxWidth:"100%",height:"100%",display:"flex",flexDirection:"column"},cardMedia:{width:"100%",height:400,objectFit:"cover"},cardContent:{flexGrow:1,width:"100%",padding:"8px 16px 0 16px"},cardTitle:{fontSize:16,marginBottom:0},cardSubTitle:{fontSize:12,marginBottom:0},cardActions:{padding:0},icon:{margin:0},button:{marginLeft:"auto !important"},favoriteIcon:{color:"#9f3e72"},watchLaterIcon:{marginLeft:"auto !important",color:"#70c4bc"},homeSearchIcon:{fontSize:256,color:"#282828"},homeTitle:{color:"#282828"}}},p=a(7),v=a(99),f=a(23),g=a(104),E=a(37),b={searchInput:"",movieList:[],savedMovies:[],watchLater:[],showModal:!1,videoURL:""};function w(e,t){var a=function(a){return Object(f.a)({},e,Object(m.a)({},a,t.payload))};switch(t.type){case"setShowModal":return a("showModal");case"setVideoURL":return a("videoURL");case"setSearchInput":return a("searchInput");case"setSearchResult":return a("searchResult");case"addFavorite":return Object(f.a)({},e,{savedMovies:[].concat(Object(E.a)(e.savedMovies),[t.payload])});case"removeFavorite":return Object(f.a)({},e,{savedMovies:Object(E.a)(e.savedMovies.filter(function(e){return e.id!==t.payload.id}))});case"addWatchLater":return Object(f.a)({},e,{watchLater:[].concat(Object(E.a)(e.watchLater),[t.payload])});case"removeWatchLater":return Object(f.a)({},e,{watchLater:Object(E.a)(e.watchLater.filter(function(e){return e.id!==t.payload.id}))});default:throw new Error}}var y=function(e){var t=localStorage.getItem("savedMovies"),a=localStorage.getItem("watchLater");return t&&(e.savedMovies=JSON.parse(t)),a&&(e.watchLater=JSON.parse(a)),e},L="e649b0f97771d1b81b83fce77ba2fe29",N=function(){var e=o.a.useReducer(w,b,y),t=Object(g.a)(e,2),a=t[0],n=t[1],r=a.searchInput,c=a.searchResult,i=a.savedMovies,l=a.watchLater,s=a.showModal,d=a.videoURL,m=!!c>0;o.a.useEffect(function(){localStorage.setItem("savedMovies",JSON.stringify(i))},[i]),o.a.useEffect(function(){localStorage.setItem("watchLater",JSON.stringify(l))},[l]);o.a.useEffect(function(){if(""!==r){var e="https://api.themoviedb.org/3/search/movie?api_key=".concat(L,"&query=").concat(r);fetch(e).then(function(e){return e.json()}).then(function(e){console.log("payload :",e),n({type:"setSearchResult",payload:e.results})}).catch(function(e){return console.log(e)})}},[r]);return{handleMovieSearch:function(e){n({type:"setSearchInput",payload:e.target.value})},handleFavoriteMovie:function(e){i.find(function(t){return t.id===e.id})?n({type:"removeFavorite",payload:e}):n({type:"addFavorite",payload:e})},handleWatchLater:function(e){l.find(function(t){return t.id===e.id})?n({type:"removeWatchLater",payload:e}):n({type:"addWatchLater",payload:e})},clearSearch:function(){n({type:"setSearchInput",payload:""})},handleViewTrailer:function(e){var t="https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=").concat(L);fetch(t).then(function(e){return e.json()}).then(function(e){n({type:"setVideoURL",payload:e.results[0].key}),n({type:"setShowModal",payload:!0})}).catch(function(e){return console.log(e)})},handleTrailerClose:function(e){n({type:"setShowModal",payload:!1})},state:Object(f.a)({},a,{searchInput:r,searchResult:c,savedMovies:i,containsResults:m,showModal:s,videoURL:d})}},S=Object(v.a)(function(){return{movieGrid:N()}}),j=S.Context,O=S.Provider,M=function(){return o.a.useContext(j)},I=Object(p.withStyles)(h)(Object(l.e)(function(e){var t=e.classes,a=e.location,n=M().movieGrid,r=n.handleMovieSearch,c=n.clearSearch,m=n.state,u=m.savedMovies,h=m.watchLater,p=m.searchInput,v="/"!==a.pathname&&p.length>0;return o.a.createElement("div",{className:t.root},v&&o.a.createElement(l.a,{to:"/"}),o.a.createElement(s.a,{position:"fixed",elevation:5},o.a.createElement(s.k,null,o.a.createElement(s.i,{component:i.b,color:"inherit",to:"/",className:"routerLink"},o.a.createElement(d.c,null)),o.a.createElement(s.l,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},"MovieGrid"),o.a.createElement("div",{className:t.search},o.a.createElement("div",{className:t.searchIcon},o.a.createElement(d.d,null)),o.a.createElement(s.j,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:r})),o.a.createElement("div",{className:t.grow}),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(s.i,{component:i.b,color:"inherit",to:"/favorites",className:"routerLink",onClick:function(){return c()}},o.a.createElement(s.b,{badgeContent:u.length,color:"secondary"},0!==u.length?o.a.createElement(d.a,null):o.a.createElement(d.b,null))),o.a.createElement(s.i,{component:i.b,color:"inherit",to:"/watch-later",className:"routerLink",onClick:function(){return c()}},o.a.createElement(s.b,{badgeContent:h.length,color:"secondary"},0!==h.length?o.a.createElement(d.e,null):o.a.createElement(d.f,null)))))))})),k=a(44),R=a.n(k),x=a(4),T=a.n(x),C=a(102),G=a.n(C),B=Object(p.withStyles)(h)(function(e){var t=e.classes,a=e.movie,n=M().movieGrid,r=n.handleFavoriteMovie,c=n.handleWatchLater,i=n.handleViewTrailer,l=n.state,m=l.savedMovies,u=l.watchLater;return o.a.createElement(s.h,{zeroMinWidth:!0,item:!0,key:a.id,xs:12,sm:6,md:4,lg:3},o.a.createElement(s.d,{className:t.card,elevation:2},o.a.createElement(s.g,{className:t.cardMedia,image:null!==a.poster_path?"https://image.tmdb.org/t/p/w342/".concat(a.poster_path):G.a,title:a.title}),o.a.createElement(s.f,{className:t.cardContent},o.a.createElement(s.l,{gutterBottom:!0,variant:"h6",component:"h2",className:t.cardTitle,noWrap:!0},a.title),o.a.createElement(s.l,{gutterBottom:!0,component:"p",className:t.cardSubTitle},a.release_date.substr(0,4))),o.a.createElement(s.e,{className:t.cardActions},o.a.createElement(s.i,{className:T()(t.icon,t.favoriteIcon),"aria-label":"Add to favorites",onClick:function(){r(a)}},m.find(function(e){return e.id===a.id})?o.a.createElement(d.a,null):o.a.createElement(d.b,null)),o.a.createElement(s.c,{size:"small",onMouseDown:function(){return i(a)},className:t.button},"View Trailer"),o.a.createElement(s.i,{className:"".concat(t.icon," ").concat(t.watchLaterIcon),"aria-label":"Watch later",onClick:function(){c(a)}},u.find(function(e){return e.id===a.id})?o.a.createElement(d.e,null):o.a.createElement(d.f,null)))))}),W=a(103),F=a.n(W),U=Object(p.withStyles)(h)(function(e){e.classes;var t=e.movies,a=M().movieGrid,n=a.handleTrailerClose,r=a.state,c=r.showModal,i=r.videoURL;return o.a.createElement("main",null,o.a.createElement(R.a,{container:!0,spacing:24},t.map(function(e){return o.a.createElement(B,{key:e.id,movie:e})})),o.a.createElement(F.a,{channel:"youtube",isOpen:c,videoId:i,onClose:function(){return n()}}))}),A=Object(p.withStyles)(h)(function(e){var t=e.classes,a=M().movieGrid.state,n=a.searchResult;return a.containsResults?o.a.createElement("div",{className:T()(t.layout,t.cardGrid)},o.a.createElement(s.l,{variant:"h5",component:"h1",gutterBottom:!0,className:t.pageTitle},"Search Results"),o.a.createElement(U,{movies:n})):o.a.createElement("div",{className:T()(t.layout,t.cardGrid)},o.a.createElement(d.d,{className:t.homeSearchIcon}),o.a.createElement(s.l,{variant:"h2",component:"h1",gutterBottom:!0,className:t.homeTitle},"Search movie..."))}),J=Object(p.withStyles)(h)(function(e){var t=e.classes,a=M().movieGrid.state.savedMovies;return 0===a.length?o.a.createElement("div",{className:T()(t.layout,t.cardGrid)},o.a.createElement(d.b,{className:t.homeSearchIcon}),o.a.createElement(s.l,{variant:"h2",component:"h1",gutterBottom:!0,className:t.homeTitle},"No movies added to Favorites")):o.a.createElement("div",{className:T()(t.layout,t.cardGrid)},o.a.createElement(s.l,{variant:"h5",component:"h1",gutterBottom:!0,className:t.pageTitle},"Favorite Movies"),o.a.createElement(U,{movies:a}))}),z=Object(p.withStyles)(h)(function(e){var t=e.classes,a=M().movieGrid.state.watchLater;return 0===a.length?o.a.createElement("div",{className:T()(t.layout,t.cardGrid)},o.a.createElement(d.f,{className:t.homeSearchIcon}),o.a.createElement(s.l,{variant:"h2",component:"h1",gutterBottom:!0,className:t.homeTitle},"No movies added to Watch Later")):o.a.createElement("div",{className:T()(t.layout,t.cardGrid)},o.a.createElement(s.l,{variant:"h5",component:"h1",gutterBottom:!0,className:t.pageTitle},"Watch Later"),o.a.createElement(U,{movies:a}))}),V=a(57),_=a.n(V),D=a(45),q=a.n(D),P=Object(p.createMuiTheme)({palette:{type:"dark",primary:{main:"#880e4f"},secondary:{main:"#4db6ac"}}});var H=function(){return o.a.createElement(i.a,null,o.a.createElement(_.a,{theme:P},o.a.createElement(q.a,null),o.a.createElement(I,null),o.a.createElement("div",null,o.a.createElement(l.b,{path:"/",exact:!0,component:A}),o.a.createElement(l.b,{path:"/favorites/",component:J}),o.a.createElement(l.b,{path:"/watch-later/",component:z}))))};a(5526);c.a.render(o.a.createElement(O,null,o.a.createElement(H,null)),document.getElementById("root"))}},[[5407,1,2]]]);
//# sourceMappingURL=main.bbd0e49d.chunk.js.map