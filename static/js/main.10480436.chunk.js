(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Container_container__3XIEw"}},12:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2jFCu"}},13:function(e,t,n){},14:function(e,t,n){e.exports={item:"Notification_item__3XqNu"}},22:function(e,t,n){},3:function(e,t,n){e.exports={feedback:"Statistics_feedback__x_rWu",item:"Statistics_item__INSCG"}},34:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(6),r=n.n(i),s=(n(21),n(22),n(7)),o=n(8),d=n(9),u=n(16),b=n(15),l=n(1),j=n.n(l),h=n(10),p=n.n(h),f=n(0),v=function(e){var t=e.children;return Object(f.jsx)("div",{className:p.a.container,children:t})};v.protoTypes={children:j.a.node.isRequired};var O=v,m=function(e){var t=e.children;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(O,{children:t})})};m.protoType={children:j.a.node.isRequired};var x=m,k=n(11),g=n.n(k),_=n(12),F=n.n(_),N=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(f.jsx)("div",{children:t.map((function(e){return Object(f.jsx)("button",{type:"button",className:F.a.btn,onClick:function(){return n(e)},children:e},g.a.generate())}))})};N.protoTypes={id:j.a.string.isRequired,label:j.a.string.isRequired,onLeaveFeedback:j.a.func.isRequired};var q=N,R=n(3),y=n.n(R),T=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(f.jsxs)("div",{className:y.a.feedback,children:[Object(f.jsxs)("span",{className:y.a.item,children:["good: ",t]}),Object(f.jsxs)("span",{className:y.a.item,children:["neutral: ",n]}),Object(f.jsxs)("span",{className:y.a.item,children:["bad: ",a]}),Object(f.jsxs)("span",{className:y.a.item,children:["Total: ",c]}),Object(f.jsxs)("span",{className:y.a.item,children:["Positive feedback: ",i]})]})};T.protoType={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.func.isRequired,positivePercentage:j.a.func.isRequired};var P=T,w=n(13),S=n.n(w),C=function(e){var t=e.title,n=e.children;return Object(f.jsxs)("div",{className:S.a.section,children:[Object(f.jsx)("h2",{children:t}),n]})};C.protoType={title:j.a.string.isRequired,children:j.a.node.isRequired};var L=C,E=n(14),I=n.n(E),J=function(e){var t=e.message;return Object(f.jsx)("p",{className:I.a.item,children:t})},M=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.setLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(100*t/n)+"%"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state);return Object(f.jsxs)(x,{children:[Object(f.jsx)("h1",{children:"K\u0430\u0444\u0435 Espresso"}),Object(f.jsx)(L,{title:"Please leave feedback",children:Object(f.jsx)(q,{options:e,onLeaveFeedback:this.setLeaveFeedback})}),Object(f.jsx)(L,{title:"Statistics",children:this.countTotalFeedback()>0?Object(f.jsx)(P,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(f.jsx)(J,{message:"No feedback given"})})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.10480436.chunk.js.map