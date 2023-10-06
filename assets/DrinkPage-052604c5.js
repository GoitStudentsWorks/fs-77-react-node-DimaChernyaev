import{s as o,j as t,r as c,D as b,b as j,I as v,O as y,P as w,a as D}from"./index-628beb06.js";import{a as k}from"./operationsFilters-8cb7f540.js";import{P as C}from"./PageTitle-cc209ae1.js";import{b as I}from"./favoriteSelectors-c82fd15c.js";import{c as z}from"./operationsDrinks-41a45c08.js";import{T as P}from"./Hourglass-0841901f.js";const T=o.li`


  div {
    display: flex;
    justify-content: space-between;
    width: 157px;
  }

  img {
    width: 107px;
    height: 107px;
  }

  p {
    font-size: 14px;
    color:  var(--white-color);
  }

  span {
    font-size: 14px;
    color: var(--whitefifty-color);
  }

  @media (min-width: 768px) {
    div {
      width: 220px;
      margin-bottom: 14px;
    }
    img {
      width: 175px;
      height: 175px;
      
    }
    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`,S=o.div`
  margin-bottom: 8px;
border-radius:8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  background-color:  var(--blue-color);

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
    
  }
`,F="/fs-77-react-node-DimaChernyaev/assets/coctailPlaceholder-13631aa6.png",$=({photo:e,title:s,measure:r})=>t.jsxs(T,{children:[t.jsx(S,{children:t.jsx("img",{src:e||F})}),t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("span",{children:r})]})]}),E=o.p`
  color: var(--whitefifty-color);
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,L=o.ul`


  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;


  @media (max-width: 374px) {
justify-content: center;
}

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`,R=({coctailInfo:e})=>{const[s,r]=c.useState([]),d=e!==null?e.ingredients:[],x=d.map(n=>n.ingredientId);c.useEffect(()=>{(async()=>{try{const i=await k();if(i.length!==0){const a=i.filter(p=>x.includes(p._id));r(a)}}catch(i){console.log(i.message)}})()},[e]);const m=d.map(n=>{const i=s.find(a=>a._id===n.ingredientId);return{...n,ingredientThumb:i?i.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx(E,{children:"Ingredients"}),t.jsx(L,{children:m.map(({title:n,measure:i,ingredientId:a,ingredientThumb:p})=>t.jsx($,{title:n,measure:i,photo:p},a))})]})},A=o.button`


@media (max-width: 374px) {
      margin-left: 40px;
      
    }

  width: 222px;
  color: var(--blue-color);
  background-color: var(--white-color);
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color var(--transition),
    color var(--transition);



  &:hover {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  &:active {
    background-color: var(--blue-color);
    color: var(--white-color);
    box-shadow: 0 0 10px var(--whitefifty-color);
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`,B=({text:e,onClick:s})=>t.jsx(A,{onClick:s,children:e}),_=o.p`

  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--whitefifty-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,O=o.p`

@media (max-width: 374px) {
    width: 310px;
  }

  margin-bottom: 40px;
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,H=o.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-top: 140px;
  }

  @media (min-width: 1280px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`,q=o.img`
width: 335px;
height: 400px;


@media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

@media (min-width: 1280px) {
    width: 400px;
    height: 400px;

}
`,G=({photo:e})=>t.jsx(q,{src:e}),J=({coctailInfo:e})=>{const s=b(I),r=e!==null?e.drink:"",d=e!==null?e.glass:"",x=e!==null?e.alcoholic:"",m=e!==null?e.shortDescription:"",n=e!==null?e.drinkThumb:"image",i=e!==null?e._id:"",a=j(),[p,h]=c.useState(!1);c.useEffect(()=>{s.find(u=>u._id===i)&&h(!0)},[s,i]);const f=()=>{a(p?v(i):y(i)),h(!p)};return t.jsxs(H,{children:[t.jsxs("div",{children:[t.jsx(C,{title:r,style:{marginBottom:"10px"}}),t.jsxs(_,{children:[d," / ",x]}),t.jsxs(O,{children:[m," "]}),t.jsx(B,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:f})]}),t.jsx(G,{photo:n})]})},K="/fs-77-react-node-DimaChernyaev/assets/desktop@1x-8eda6905.jpg",M="/fs-77-react-node-DimaChernyaev/assets/desktop@2x-0896e2bb.jpg",N="/fs-77-react-node-DimaChernyaev/assets/tablet@1x-1ce56edb.jpg",Q="/fs-77-react-node-DimaChernyaev/assets/tablet@2x-11f63109.jpg",l="/fs-77-react-node-DimaChernyaev/assets/mob@1x-b65eaffd.jpg",U="/fs-77-react-node-DimaChernyaev/assets/mob@2x-d2eb580b.jpg",V=o.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,W=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1280px)",srcSet:`${K}, ${M} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${N}, ${Q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${l}, ${U} 2x`,type:"image/jpg"}),t.jsx(V,{src:l,alt:"Coctails"})]}),X=o.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Y=o.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,g=o.p`
  @media (max-width: 374px) {
    width: 300px;
  }
  
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,Z=({coctailInfo:e})=>{const s=e!==null?e.instructions:"",r=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:"Recipe Preparation"}),t.jsxs(X,{children:[t.jsxs("div",{children:[t.jsxs(g,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(g,{children:[" ",s," "]})]}),t.jsx(W,{})]})]})},tt=()=>{const[e,s]=c.useState(null),[r,d]=c.useState(!1),{drinkId:x}=w();return c.useEffect(()=>{d(!0),(async()=>{try{const n=await z(x);s(n)}catch(n){console.error(n.message)}finally{d(!1)}})()},[x]),r?t.jsx(D,{children:t.jsx(P,{color:"#f3f3f3",width:"80"})}):t.jsxs(t.Fragment,{children:[t.jsx(J,{coctailInfo:e}),t.jsx(R,{coctailInfo:e}),t.jsx(Z,{coctailInfo:e})]})},at=()=>{const{drinkId:e}=w();return t.jsx(tt,{id:e})};export{at as default};
