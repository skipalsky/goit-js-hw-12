import{a as p,S,i as w}from"./assets/vendor-ad00ede7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}})();const q="/goit-js-hw-12/assets/error-80ee8afe.svg",P="https://pixabay.com/api/",k="41647148-76dbe9dab66bab2692c283b6e";p.defaults.baseURL=P;let m;const s={key:k,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:1},E=new S(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:500}),g=document.querySelector(".gallery-form"),f=document.querySelector(".search-input"),y=document.querySelector(".gallery"),l=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");async function A(e){if(e.preventDefault(),!f.value.trim()){d("Please fill in the search field");return}try{y.innerHTML="",a(l,!0),a(c,!1),s.q=f.value.trim(),s.page=1;const o=await h();m=o.totalHits,b(o)}catch(o){console.log(o)}}async function M(){try{a(l,!0),a(c,!1);const e=await h();b(e)}catch(e){console.log(e)}}async function h(){return(await p.get("",{params:s})).data}function b(e){if(!e.total){d("Sorry, there are no images matching your search query. Please, try again!"),a(l,!1);return}const o=e.hits.map(({largeImageURL:u,webformatURL:i,tags:t,likes:r,views:n,comments:L,downloads:v})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${u}">
        <img class="api-img" src="${i}" alt="${t}">
        <div class="img-desc">
        <span><b>Likes:</b> <br/>${r}</span>
        <span><b>Views:</b> <br/>${n}</span>
        <span><b>Comments:</b> <br/>${L}</span>
        <span><b>Downloads:</b> <br/>${v}</span>
        </div>
        </a>
        </li>
        `).join("");y.insertAdjacentHTML("beforeend",o),a(l,!1),O(),$(),E.refresh(),g.reset()}function O(){Math.ceil(m/s.per_page)===s.page?d("We're sorry, but you've reached the end of search results."):(s.page+=1,a(c,!0))}function a(e,o){o?e.classList.remove("hidden"):e.classList.add("hidden")}function $(){if(s.page>1){const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}}function d(e){w.show({position:"topRight",iconUrl:q,message:e,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}g.addEventListener("submit",e=>A(e));c.addEventListener("click",()=>M());
//# sourceMappingURL=commonHelpers2.js.map