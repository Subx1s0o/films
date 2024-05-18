import{a as p}from"./assets/vendor-34f890c2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=async i=>{try{return(await p.get(`http://www.omdbapi.com/?i=tt3896198&apikey=e9dc5fd8&s=${i}`)).data}catch(s){console.log("Cant make request",s),errormsg.style.display="block",errormsg.textContent="Cant take response :("}};function y(i,s){console.log(i);const r=i.Search;let o="";r.forEach(e=>{const t=Math.ceil(Math.random()*5+5);o+=`<li class="card" data-id="${e.imdbID}">
              <a href="#" >
                <img src="${e.Poster}" alt="${e.Title}" />
              </a>
              <div class="card-description">
                <div class="splitter">
                  <h3 class="card-title">${e.Title}</h3>
                  <div class="split-content">
                    <p class="card-rating">
                      ${t}/10
                      <svg width="25" height="25">
                        <use href="./img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </p>
                  </div>
                </div>
                <div class="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Fugit aliquid enim blanditiis veritatis, iusto sequi obcaecati 
                    totam voluptatibus soluta id doloremque eius officia aperiam numquam 
                    ea ab, iste ipsa deserunt.
                  </p>
                </div>
                <div class="splitter">
                  <p class="card-text">Country</p>
                  <p class="card-year">${e.Year}</p>
                  <p class="card-text">${e.Type}</p>
                </div>
              </div>
            </li>`}),s.insertAdjacentHTML("beforeend",o)}const a=document.querySelector(".totalSearch span"),d=document.querySelector(".input"),u=document.querySelector(".list"),f=document.querySelector(".form"),c=document.querySelector(".loader"),n=document.querySelector(".errormsg");a.textContent="0";f.addEventListener("submit",i=>{i.preventDefault();const s=d.value.trim();u.innerHTML="",d.value="",c.style.visibility="visible",n.style.display="none",m(s).then(r=>{s!==""&&r.Response==="True"?(c.style.visibility="hidden",a.textContent=r.totalResults,y(r,u)):(a.textContent="0 ",n.style.display="block",n.textContent="We don`t find the films :(",c.style.visibility="hidden")}).catch(r=>{c.style.visibility="hidden",console.log("Cant take response",r),n.style.display="block",n.textContent="Sorry, check your internet connection! :("})});
//# sourceMappingURL=commonHelpers.js.map
