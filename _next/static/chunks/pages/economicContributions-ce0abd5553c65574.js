(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{48090:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/economicContributions",function(){return r(11609)}])},10990:function(e,t,r){"use strict";var i=r(85893);r(67294);var s=r(56038),a=r(43495),l=r(72510),n=r(59335),o=r(62549),d=r(55186);let c=e=>e.replace(/\[\[tooltip:(.+?)\|(.+?)\]\]/g,(e,t,r)=>'<span class="tooltip-container" data-tooltip="'.concat(t,'"><span class="bg-vision">').concat(r,"</span></span>")),x={p:e=>{let{children:t}=e;return(0,i.jsx)("p",{children:t})},span:e=>{let{node:t,children:r}=e,s=t.properties["data-tooltip"];return s?(0,i.jsx)(n.Tooltip,{placement:"top",className:"border border-blue-gray-50 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/10 text-partnership font-medium",content:s,children:(0,i.jsx)("span",{className:"bg-vision",children:r})}):(0,i.jsx)("span",{children:r})},br:()=>(0,i.jsx)("br",{})},m={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.7,ease:"easeInOut",delay:.8}}};t.Z=e=>{let{text:t,backgroundImage:r,backgroundColor:n,textColor:p,heading:h}=e,b=c(t);return(0,i.jsx)(s.Z,{children:(0,i.jsx)("section",{className:"flex w-full justify-center relative rounded-[inherit] box-border max-w-none min-h-[197px] max-h-none border-solid border-black border-0",children:(0,i.jsx)("div",{className:"flex flex-auto w-full rounded-[inherit]",children:(0,i.jsxs)("div",{className:"flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-inherit",children:[(0,i.jsx)("div",{className:"flex relative flex-col grow shrink max-h-full box-border text-start justify-start rounded-r-[inherit] bg-cover bg-no-repeat border-solid border-black border-0 !basis-[calc(45.8333%+0px)] !max-w-[calc(45.8333%+0px)] md:!hidden md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]",style:{backgroundPosition:"50% 0%",backgroundImage:"url(".concat(r,")")},children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[126px] pl-[0px] pr-0px md:pt-[210px] md:pl-[3.125vwpx] md:pr-[3.125vw] sm:pt-[65px] sm:pl-[6.4vw] sm:pr-[6.4vw]"})}),(0,i.jsx)("div",{className:"flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 !basis-[calc(54.1667%+0px)] !max-w-[calc(54.1667%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)] ".concat(n||""),children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[80px] pl-[5.7554vw] pr-[5.7554vw] md:pt-[50px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[35px] sm:pl-[6.4vw] sm:pr-[6.4vw] mb-9",children:(0,i.jsxs)(a.E.div,{className:"relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block ".concat(p||""),variants:m,initial:"hidden",animate:"visible",style:{animationFillMode:"backwards",flex:"unset"},children:[h&&(0,i.jsx)("h2",{className:"mb-4 font-bold ".concat(p||""),children:h}),(0,i.jsx)(l.U,{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal ".concat(p||""),components:x,remarkPlugins:[d.Z],rehypePlugins:[o.Z],children:b})]})})})]})})})})}},11609:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var i=r(85893),s=r(67294),a=r(9008),l=r.n(a),n=r(86195),o=r(2362),d=r(95298),c=r(93655),x=r(94561),m=r(42019),p=r(10990),h=r(43495),b=r(49829),u=r(45697),f=r.n(u);let v=e=>{let{targetPercentage:t,start:r,strokeColor:a}=e,[l,n]=(0,s.useState)(0);return(0,s.useEffect)(()=>{if(!r)return;let e=t/250,i=setInterval(()=>{n(r=>r+e>=t?(clearInterval(i),t):r+e)},20);return()=>clearInterval(i)},[r,t]),(0,i.jsx)("div",{style:{width:150,height:150},children:(0,i.jsx)(b.Cd,{percent:l,strokeWidth:12,trailWidth:6,strokeColor:a,trailColor:"#d8d8d6"})})};v.propTypes={targetPercentage:f().number.isRequired,start:f().bool.isRequired};var g=r(17857),w=e=>{let t=(0,s.useRef)(),[r,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let r=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},e);return t.current&&r.observe(t.current),()=>{t.current&&r.unobserve(t.current)}},[t,e]),[t,r]},k=r(56038);let j={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeInOut",delay:.1}}};var y=()=>{let[e,t]=w({threshold:.1}),[r,s]=w({threshold:.1}),[a,l]=w({threshold:.2}),[n,o]=w({threshold:.2}),[d,c]=w({threshold:0}),[x,m]=w({threshold:0}),[p,b]=w({threshold:0}),[u,f]=w({threshold:0});return(0,i.jsxs)(k.Z,{children:[(0,i.jsx)("section",{className:"flex w-full justify-center min-h-[302px] max-h-none relative rounded-[inherit] box-border max-w-none border-0",children:(0,i.jsx)("div",{className:"flex flex-auto w-full rounded-[inherit]",children:(0,i.jsxs)("div",{className:"flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]",children:[(0,i.jsx)(h.E.div,{ref:e,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden",variants:j,initial:"hidden",animate:t?"visible":"hidden",children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"center",justifyContent:"inherit"},children:(0,i.jsx)("div",{className:"flex w-full",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("div",{className:"relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold",children:(0,i.jsxs)("div",{className:"inline-block relative",children:[(0,i.jsx)("div",{className:"flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center",children:t&&(0,i.jsx)(g.ZP,{suffix:"%",duration:7,end:91})}),(0,i.jsx)(v,{targetPercentage:91,start:t,strokeColor:"#f5d000"})]})})})})}),(0,i.jsx)(h.E.div,{ref:r,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]",variants:j,initial:"hidden",animate:s?"visible":"hidden",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h1",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible md:!visible",children:"91%"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center",children:"of our customers were satisfied with our response to the safety concerns of our products and services."})})]})}),(0,i.jsx)(h.E.div,{ref:a,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden",variants:j,initial:"hidden",animate:l?"visible":"hidden",children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"center",justifyContent:"inherit"},children:(0,i.jsx)("div",{className:"flex w-ful",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("div",{className:"relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold",children:(0,i.jsxs)("div",{className:"inline-block relative",children:[(0,i.jsx)("div",{className:"flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center",children:l&&(0,i.jsx)(g.ZP,{suffix:"%",duration:7,end:94})}),(0,i.jsx)(v,{targetPercentage:94,start:l,strokeColor:"#f5d000"})]})})})})}),(0,i.jsx)(h.E.div,{ref:n,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]",variants:j,initial:"hidden",animate:o?"visible":"hidden",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h1",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible md:!visible",children:"94%"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center",children:"of our customers stated that our products and services improved their well-being."})})]})})]})})}),(0,i.jsx)("section",{className:"flex w-full justify-center min-h-[302px] max-h-none relative rounded-[inherit] box-border max-w-none border-0",children:(0,i.jsx)("div",{className:"flex flex-auto w-full rounded-[inherit]",children:(0,i.jsxs)("div",{className:"flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]",children:[(0,i.jsx)(h.E.div,{ref:d,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.4)] dark:bg-[rgba(11,51,86,0.4)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden",variants:j,initial:"hidden",animate:c?"visible":"hidden",children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"center",justifyContent:"inherit"},children:(0,i.jsx)("div",{className:"flex w-full",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("div",{className:"relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold",children:(0,i.jsxs)("div",{className:"inline-block relative",children:[(0,i.jsx)("div",{className:"flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center",children:t&&(0,i.jsx)(g.ZP,{suffix:"%",duration:7,end:88})}),(0,i.jsx)(v,{targetPercentage:88,start:c,strokeColor:"#f5d000"})]})})})})}),(0,i.jsx)(h.E.div,{ref:x,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.4)] dark:bg-[rgba(11,51,86,0.4)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]",variants:j,initial:"hidden",animate:m?"visible":"hidden",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h1",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible md:!visible",children:"88%"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center",children:"of our customers were satisfied with our customer service procedures."})})]})}),(0,i.jsx)(h.E.div,{ref:p,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.2)] dark:bg-[rgba(11,51,86,0.2)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden",variants:j,initial:"hidden",animate:b?"visible":"hidden",children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"center",justifyContent:"inherit"},children:(0,i.jsx)("div",{className:"flex w-ful",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("div",{className:"relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold",children:(0,i.jsxs)("div",{className:"inline-block relative",children:[(0,i.jsx)("div",{className:"flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center",children:b&&(0,i.jsx)(g.ZP,{suffix:"%",duration:7,end:86})}),(0,i.jsx)(v,{targetPercentage:86,start:b,strokeColor:"#f5d000"})]})})})})}),(0,i.jsx)(h.E.div,{ref:u,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.2)] dark:bg-[rgba(11,51,86,0.2)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]",variants:j,initial:"hidden",animate:f?"visible":"hidden",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h1",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible md:!visible",children:"86%"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center",children:"of our customers were satisfied with our invoicing process."})})]})})]})})})]})},N=r(96201);".".concat(N.x.left," .").concat(N.x.label),N.x.root,".".concat(N.x.tick,", .").concat(N.x.line),N.x.tickLabel;var C=r(69931);let I=[{turnover:188.08,retained:16.59,year:"2023"},{turnover:120.45,retained:9.67,year:"2022"}],E={yAxis:[{label:"Value (₦'000 in billions)"}],width:711,height:288,sx:{[".".concat(N.x.left," .").concat(N.x.label)]:{transform:"translate(-10px, 0)",fill:"#fff"},[".".concat(N.x.root)]:{[".".concat(N.x.tick,", .").concat(N.x.line)]:{stroke:"#fff"},strokeWidth:1},[".".concat(N.x.tickLabel)]:{fontSize:10,fill:"#ffffff"}}},P=e=>"₦".concat(e,"B");var Z=()=>(0,i.jsx)("div",{className:"w-full h-full pb-20 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45]",children:(0,i.jsx)(C.v,{dataset:I,slotProps:{legend:{labelStyle:{fontSize:10,fill:"#fff"}}},xAxis:[{scaleType:"band",dataKey:"year"}],series:[{dataKey:"turnover",label:"Turnover",color:"#c7d522",valueFormatter:P},{dataKey:"retained",label:"Retained in business",color:"#0b3356",valueFormatter:P}],...E})});let A={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeInOut",delay:.1}}};var S=()=>{let[e,t]=w({threshold:.1}),[r,s]=w({threshold:.1}),[a,l]=w({threshold:.1}),[n,o]=w({threshold:.1});return(0,i.jsx)(k.Z,{children:(0,i.jsx)("section",{className:"flex w-full justify-center min-h-[302px] max-h-none relative rounded-[inherit] box-border max-w-none border-0",children:(0,i.jsx)("div",{className:"flex flex-auto w-full rounded-[inherit]",children:(0,i.jsxs)("div",{className:"flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]",children:[(0,i.jsx)(h.E.div,{ref:e,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden",variants:A,initial:"hidden",animate:t?"visible":"hidden",children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"center",justifyContent:"inherit"},children:(0,i.jsx)("div",{className:"flex w-full",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("div",{className:"relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold",children:(0,i.jsxs)("div",{className:"inline-block relative",children:[(0,i.jsx)("div",{className:"flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center",children:t&&(0,i.jsx)(g.ZP,{suffix:"%",duration:7,end:93})}),(0,i.jsx)(v,{targetPercentage:93,start:t,strokeColor:"#f5d000"})]})})})})}),(0,i.jsx)(h.E.div,{ref:r,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]",variants:A,initial:"hidden",animate:s?"visible":"hidden",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h1",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible md:!visible",children:"93%"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center",children:"of our procurement budget spent on local suppliers based in Nigeria."})})]})}),(0,i.jsx)(h.E.div,{ref:a,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden",variants:A,initial:"hidden",animate:l?"visible":"hidden",children:(0,i.jsx)("div",{className:"flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"center",justifyContent:"inherit"},children:(0,i.jsx)("div",{className:"flex w-ful",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("div",{className:"relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold",children:(0,i.jsxs)("div",{className:"inline-block relative",children:[(0,i.jsx)("div",{className:"flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center",children:l&&(0,i.jsx)(g.ZP,{suffix:"",duration:7,end:54})}),(0,i.jsx)(v,{targetPercentage:54,start:l,strokeColor:"#f5d000"})]})})})})}),(0,i.jsx)(h.E.div,{ref:n,className:"flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]",variants:A,initial:"hidden",animate:o?"visible":"hidden",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h1",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible md:!visible",children:"54"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center",children:"new suppliers meticulously screened using environmental and social criteria."})})]})})]})})})})},T=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:"Axxela 2023 Sustainability Report | Economic Contributions"}),(0,i.jsx)("meta",{name:"description",content:"Axxela 2023 Interactive Sustainability Report"})]}),(0,i.jsx)(x.Z,{}),(0,i.jsx)(d.Z,{prevLink:"/communityInitiatives",nextLink:"/gallery"}),(0,i.jsx)("main",{className:"flex items-center text-dark w-full min-h-screen",children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(c.Z,{text:"Sustainable Economic Contributions",backgroundImage:"/images/content/economic_contributions.jpeg"}),(0,i.jsx)("section",{className:"flex w-full justify-center relative rounded-[inherit] box-border min-h-[136px] max-h-none border-solid border-black border-0 mb-[51px]",children:(0,i.jsx)("div",{className:"flex flex-auto w-full max-w-[1024px] rounded-[inherit]",children:(0,i.jsx)("div",{className:"flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]",children:(0,i.jsx)("div",{className:"flex relative flex-col grow shrink max-h-full box-border text-start justify-center border-solid border-black border-0 !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[80px] pl-[50px] pr-[50px] md:pt-[24px] md:pl-[50px] md:pr-[50px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"flex w-full",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("hr",{className:"w-[51px] border-b-[2px] border-solid border-sustainable dark:border-vision mt-0 mb-[16px] max-w-full box-border inline-block relative border-t-0 border-r-0 border-l-0"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h4",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-partnership dark:text-light text-lg font-normal",children:"The financial implications of unmanaged climate risks are significant, potentially leading to a diminishment of shareholder value, a decline in profits, rising operational costs, and regulatory fines."})})]})})})})}),(0,i.jsx)(m.Z,{text:"Despite challenging gas supply conditions, Axxela achieved a minor decrease of less than 1&#37; in gas sales, from **840 MMSCM** in 2022 to **833 MMSCM** in 2023, thanks to strategic customer service and proactive business management. We commissioned the **GL5 Phase 1 backbone project**, extending our gas pipeline network in the Greater Lagos Industrial Area to approximately 178 km, creating local employment opportunities. Adherence to International Finance Corporation&#39;s (IFC) Performance Standards led to an impressive **7.7 million LTI man-hours** without incidents. Axxela supported economic inclusion by providing financial donations and scholarships, benefiting **100 pupils** through &#34;Back-to-School&#34; initiatives in 2023. <br /> <br />Acknowledging climate change risks, we have implemented robust risk mitigation strategies, including comprehensive insurance, emergency response planning, and superior health and safety protocols. We also emphasise sustainability by setting benchmarks for environmental, social, and governance practices to reduce our climate impact. Extreme weather conditions pose both risks and opportunities for Axxela, with elevated power demands potentially driving revenue growth if managed effectively. Our commitment to sustainable development and strategic planning aims to mitigate climate risks and ensure resilient operations.",backgroundImage:"/images/misc/sustainableeconomy.jpg",backgroundColor:"bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]",textColor:"text-partnership dark:text-light"}),(0,i.jsx)("section",{className:"flex w-full justify-center relative rounded-[inherit] box-border min-h-[136px] max-h-none border-solid border-black border-0 mb-[24px]",children:(0,i.jsx)("div",{className:"flex flex-auto w-full max-w-[1024px] rounded-[inherit]",children:(0,i.jsx)("div",{className:"flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]",children:(0,i.jsx)("div",{className:"flex relative flex-col grow shrink max-h-full box-border text-start justify-center border-solid border-black border-0 !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[80px] pl-[50px] pr-[50px] md:pt-[24px] md:pl-[50px] md:pr-[50px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"flex w-full",style:{flexDirection:"inherit",alignItems:"inherit"},children:(0,i.jsx)("hr",{className:"w-[51px] border-b-[2px] border-solid border-sustainable dark:border-vision mt-0 mb-[16px] max-w-full box-border inline-block relative border-t-0 border-r-0 border-l-0"})}),(0,i.jsx)("div",{className:"relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block",style:{flex:"unset"},children:(0,i.jsx)("h4",{className:"break-words whitespace-pre-wrap p-0 cursor-text relative text-partnership dark:text-light text-lg font-normal",children:"In 2023, we carried out a customer survey, with 65% of our customers participating. A summary of our findings indicated high satisfaction in areas such as safety concerns, technical concerns, customer service, and the invoicing process."})})]})})})})}),(0,i.jsx)(y,{}),(0,i.jsx)(p.Z,{heading:"Sustainability Risks and Opportunities",text:"Axxela faces a wide array of sustainability-related risks and opportunities that impact its overall prospects. These risks include reputational damage from environmentally harmful projects, social concerns such as human rights violations, and financial risks stemming from bad investments or operational losses. Compliance risks due to evolving regulations, resource over-consumption risks, and competition and product substitution risks are also significant. Conversely, opportunities arise from transitioning to more efficient processes, diversifying into renewables for new revenue streams, and accessing green funds.<br /> <br /> Axxela also benefits from participating in resource-efficient programs, enhancing sustainability monitoring activities, and improving corporate social responsibility initiatives. These risks and opportunities vary in their time horizons, with long-term concerns focusing on reputational and resource factors, medium-term risks involving financial and legal aspects, and short-term risks addressing immediate challenges like media coverage and compliance issues. Axxela categorises these time horizons for effective risk management, aiding in assessing, prioritising, and mitigating risks across varying temporal scales within its operations.",backgroundImage:"/images/misc/risks.jpeg",backgroundColor:"bg-light dark:bg-dark",textColor:"text-partnership dark:text-light"}),(0,i.jsx)("section",{className:"flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-[rgba(11,51,86,0.4)] dark:bg-[rgba(11,51,86,0.4)] max-h-none border-solid border-black border-0 pb-20 sm:pb-0",children:(0,i.jsx)("div",{className:"flex flex-auto w-full rounded-[inherit] max-w-[1024px]",children:(0,i.jsx)("div",{className:"flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]",children:(0,i.jsx)("div",{className:"flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0",children:(0,i.jsxs)("div",{className:"flex flex-auto rounded-[inherit] pt-[40px] pl-[0px] pr-[0px] md:pt-[80px] md:pl-[10.01vw] md:pr-[10.01vw] sm:pt-[80px] sm:pl-[3.20427vw] sm:pr-[3.20427vw]",style:{alignItems:"flex-start",justifyContent:"inherit",flexDirection:"inherit"},children:[(0,i.jsx)("div",{className:"relative w-full rounded-none text-light dark:text-light border-solid border-black border-0 mb-0 p-0 visible md:p-5 !block",style:{flex:"unset"},children:(0,i.jsx)("p",{className:"break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-lg font-semibold",children:"Our Economic Impact"})}),(0,i.jsx)("div",{className:"max-w-full w-full mb-[8px]",children:(0,i.jsx)(Z,{})})]})})})})}),(0,i.jsx)(m.Z,{heading:"Sustainable Risk Management Practices",text:"Axxela's Enterprise Risk Management (ERM) Framework is fundamental for evaluating sustainability-related risks, encompassing identification, assessment, and mitigation strategies. Supplemented by policies on stakeholder management, environmental documentation, and corporate social responsibility, the framework guides risk management and monitoring. The evaluation process integrates diverse inputs, including historical records, operational plans, and industry insights, to categorise risks, assess impacts, and develop mitigation strategies. Scenario analysis is used to understand sustainability risks, with inputs from internal stakeholders and evaluations across socio-economic, regulatory, and environmental domains.<br /> <br /> A holistic approach is adopted, considering both qualitative and quantitative factors, such as financial implications and ESG metrics. Rigorous methodologies, including stakeholder analysis and environmental and social impact assessments, ensure robust risk management with clear roles and responsibilities. Sustainability risks are prioritised due to their interconnectedness with broader business risks, impacting operational continuity and reputation. Proactive management of these risks within the ERM framework provides Axxela with a competitive advantage.",backgroundImage:"/images/misc/riskmanagement.jpg",backgroundColor:"bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]",textColor:"text-partnership dark:text-light"}),(0,i.jsx)(p.Z,{heading:"Transparent Tax Practices",text:"We have integrated tax compliance into our corporate framework, ensuring adherence to all relevant tax laws and regulations. Our strategy focuses on minimising tax exposure legally while meeting all tax obligations on time. The Financial Controller, reporting to the CFO, is responsible for tax management, emphasising our commitment to regulatory compliance. Recognising the critical role of tax compliance in the oil and gas industry, we engage qualified tax experts and consultants to assess risks, maintaining zero tolerance for non-compliance.<br /> <br />We educate our employees on the importance of tax compliance through regular updates in management meetings, fostering a culture of commitment to compliance. Our Risk and Internal Control team conducts regular checks to identify any tax infractions. We value our relationships with tax authorities, viewing them as partners, and maintain strong, professional interactions with prompt responses to their correspondences.<br /> <br />Our open-door policy ensures transparency with financial records accessible to regulators for verification. We actively participate in forums and discussions on tax issues, contributing our perspectives to regulatory matters.",backgroundImage:"/images/misc/tax.jpg",backgroundColor:"bg-light dark:bg-dark",textColor:"text-partnership dark:text-light"}),(0,i.jsx)(S,{}),(0,i.jsx)(m.Z,{heading:"Collaborative Engagement with Suppliers",text:"The objective of managing supply chain materiality is to ensure compliance with our code of conduct and environmental and social mandates. This entails selecting materials that minimise environmental impact and ensuring suppliers adhere to ethical labor practices and human rights standards. Contracts and pricing agreements are negotiated for optimal value, with material inspection occurring before and upon delivery. Service Level Agreements (SLAs) with aligned Key Performance Indicators (KPIs) support contract execution. We obtain mill test or Factory Acceptance Test (FAT) certificates and engage offshore inspection agents for foreign materials. Our goal is to maintain rejection rates below 5% through consistent pre-engagement checks. Early stakeholder engagement facilitates appropriate product specifications for certification. The company spends 93% of its procurement budget to local suppliers in Nigeria and screens new suppliers meticulously based on environmental and social criteria, resulting in zero negative social impacts in 2023.",backgroundImage:"/images/misc/supply.jpg",backgroundColor:"bg-light dark:bg-dark",textColor:"text-partnership dark:text-light"}),(0,i.jsx)(n.Z,{prevLink:"/communityInitiatives",nextLink:"/gallery"})]})})]})}},function(e){e.O(0,[329,257,931,484,291,888,774,179],function(){return e(e.s=48090)}),_N_E=e.O()}]);