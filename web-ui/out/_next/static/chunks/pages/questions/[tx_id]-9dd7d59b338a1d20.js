(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{2065:function(n,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[tx_id]",function(){return s(911)}])},911:function(n,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var e=s(5893),r=s(7294),u=(s(1930),s(794)),i=(s(1664),s(445)),o=s(1163),a=s(3906),c=s(2473),d=s(8563);function f(){var n=(0,r.useState)(),t=n[0],s=n[1],f=(0,r.useState)([]),l=f[0],p=f[1],_=(0,o.useRouter)(),w=_.query.tx_id,v=((0,d.H)().authenticated,(0,a.M)().startTimestamp),m=(0,c.Ek)(void 0!==w?"/questions/".concat(w):null),x=m.data,b=m.error,h=(m.refresh,m.loading);return(0,r.useEffect)((function(){var n;console.log(x,h,b),void 0!==(null===x||void 0===x?void 0:x.question)&&((n=x.question).difficulty=n.boostpow_proofs.reduce((function(n,t){return new u.O(n).plus(t.difficulty).toNumber()}),0),n.answers=n.answers.map((function(n){return Object.assign(n,{difficulty:n.boostpow_proofs.reduce((function(n,t){var s=t.difficulty;return new u.O(n).plus(s).toNumber()}),0)})})),n.answers=n.answers.sort((function(n,t){return n.difficulty<t.difficulty?1:-1})),x?(s(n),p(n.answers)):(!b&&!h&&x&&s(n),!b&&!h&&x&&p(n.answers)))}),[x,w,_,v]),(0,e.jsx)(i.JS,{children:(0,e.jsx)("div",{className:"col-span-12 lg:col-span-6 min-h-screen pb-20",children:(0,e.jsxs)("div",{className:"mt-4 lg:mt-10",children:[h&&(0,e.jsx)(i.aN,{}),!h&&!b&&(0,e.jsx)(i.E1,{post:t}),!h&&!b&&(0,e.jsx)("div",{className:"bg-gray-100 dark:bg-gray-600 rounded-b-lg py-3 px-4 mb-1",children:(0,e.jsx)(i.ad,{reply_tx:w})}),null===l||void 0===l?void 0:l.map((function(n){return(0,e.jsx)(i.E1,{post:n},n.tx_id)}))]})})})}}},function(n){n.O(0,[794,774,888,179],(function(){return t=2065,n(n.s=t);var t}));var t=n.O();_N_E=t}]);