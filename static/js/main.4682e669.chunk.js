(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),c=i(17),a=i.n(c),r=i(8),o=i.n(r),d=i(18),l=i(3),u=i(4),m=i(6),j=i(5),v=i(0),b=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"search-bar ui segment",children:Object(v.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{children:"Video Search"}),Object(v.jsx)("input",{onChange:this.onInputChange,value:this.state.term,type:"text"})]})})})}}]),i}(s.a.Component),h=i(19),p=i.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyBeUWLCcB3hkDV6jSDdNeO6SRm582Hx7N8"}}),O=(i(44),function(e){var t=e.video,i=e.onVideoSelect;return Object(v.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(v.jsx)("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(v.jsx)("div",{className:"content",children:Object(v.jsx)("div",{className:"header",children:t.snippet.title})})]})}),x=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(v.jsx)(O,{video:e,onVideoSelect:i},e.id.videoId)}));return Object(v.jsx)("div",{className:"ui relaxed divided list",children:n})},f=function(e){var t=e.video;if(!t)return Object(v.jsx)("div",{children:"Loading..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"ui embed",children:Object(v.jsx)("iframe",{title:"video player",src:i})}),Object(v.jsxs)("div",{className:"ui segment",children:[Object(v.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(v.jsx)("p",{children:t.snippet.description})]})]})},S=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("react applications")}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"ui container",children:[Object(v.jsx)(b,{onFormSubmit:this.onTermSubmit}),Object(v.jsx)("div",{className:"ui grid",children:Object(v.jsxs)("div",{className:"ui row",children:[Object(v.jsx)("div",{className:"eleven wide column",children:Object(v.jsx)(f,{video:this.state.selectedVideo})}),Object(v.jsx)("div",{className:"five wide column",children:Object(v.jsx)(x,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})]})}}]),i}(s.a.Component);a.a.render(Object(v.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4682e669.chunk.js.map