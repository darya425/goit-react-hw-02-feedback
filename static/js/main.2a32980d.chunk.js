(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={feedback:"Statistics_feedback__x_rWu",item:"Statistics_item__INSCG"}},,,,,,function(e,t,n){e.exports={container:"Container_container__3XIEw"}},function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2jFCu"}},function(e,t,n){},function(e,t,n){e.exports={item:"Notification_item__3XqNu"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":"good"},{"id":"id-2","label":"neutral"},{"id":"id-3","label":"bad"}]')},,,,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(5),r=n.n(c),s=(n(20),n(21),n(6)),o=n(7),d=n(8),u=n(15),l=n(14),b=n(1),j=n.n(b),h=n(9),p=n.n(h),f=n(0),v=function(e){var t=e.children;return Object(f.jsx)("div",{className:p.a.container,children:t})};v.protoTypes={children:j.a.node.isRequired};var m=v,x=function(e){var t=e.children;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(m,{children:t})})};x.protoType={children:j.a.node.isRequired};var O=x,g=n(10),k=n.n(g),_=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(f.jsx)("div",{children:t.map((function(e){var t=e.id,a=e.label;return Object(f.jsx)("button",{type:"button",className:k.a.btn,onClick:function(){return n(a)},children:a},t)}))})};_.protoTypes={id:j.a.string.isRequired,label:j.a.string.isRequired,onLeaveFeedback:j.a.func.isRequired};var N=_,q=n(3),F=n.n(q),R=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,c=e.positivePercentage;return Object(f.jsxs)("div",{className:F.a.feedback,children:[Object(f.jsxs)("span",{className:F.a.item,children:["good: ",t]}),Object(f.jsxs)("span",{className:F.a.item,children:["neutral: ",n]}),Object(f.jsxs)("span",{className:F.a.item,children:["bad: ",a]}),Object(f.jsxs)("span",{className:F.a.item,children:["Total: ",i]}),Object(f.jsxs)("span",{className:F.a.item,children:["Positive feedback: ",c]})]})};R.protoType={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.func.isRequired,positivePercentage:j.a.func.isRequired};var y=R,P=n(11),T=n.n(P),S=function(e){var t=e.title,n=e.children;return Object(f.jsxs)("div",{className:T.a.section,children:[Object(f.jsx)("h2",{children:t}),n]})};S.protoType={title:j.a.string.isRequired,children:j.a.node.isRequired};var w=S,C=n(12),L=n.n(C),E=function(e){var t=e.message;return Object(f.jsx)("p",{className:L.a.item,children:t})},I=n(13),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.setLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state,n=t.good;return t.neutral+n+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,a=t.neutral+n+t.bad;return Math.round(100*n/a)+"%"},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(O,{children:[Object(f.jsx)("h1",{children:"K\u0430\u0444\u0435 Expresso"}),Object(f.jsx)(w,{title:"Please leave feedback",children:Object(f.jsx)(N,{options:I,onLeaveFeedback:this.setLeaveFeedback})}),Object(f.jsx)(w,{title:"Statistics",children:this.countTotalFeedback()>0?Object(f.jsx)(y,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(f.jsx)(E,{message:"No feedback given"})})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.2a32980d.chunk.js.map