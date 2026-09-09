(function(){
'use strict';
const phone='254720961362';
const page=location.pathname.split('/').pop()||'index.html';
const pageTitle=document.title||page;
function track(name,params){try{if(typeof window.gtag==='function'){window.gtag('event',name,Object.assign({page_path:location.pathname,page_title:pageTitle},params||{}));}}catch(e){}}
function lead(source){track('generate_lead',{lead_source:source,lead_page:page});try{if(typeof window.gtag==='function'){window.gtag('event','conversion',{send_to:'AW-18164749984/btF8CJS7wdQcEKCt0NVD',lead_source:source});if(source==='whatsapp'||source==='mobile_whatsapp'){window.gtag('event','conversion',{send_to:'AW-18366739046/efR9CNiFuN8cEObk-LVE',lead_source:source});}}}catch(e){}}
function message(){const h=document.querySelector('h1');const subject=h?h.textContent.replace(/\s+/g,' ').trim():'pest control';return 'Hi Pestokil, I found your website and need '+subject.toLowerCase()+'. My area is [area]. Pest problem: [pest]. Property type: [home/apartment/business].';}
document.addEventListener('DOMContentLoaded',function(){
 const main=document.querySelector('main')||document.body;
 if(!document.querySelector('.skip-link')){const a=document.createElement('a');a.className='skip-link';a.href='#main-content';a.textContent='Skip to content';document.body.prepend(a)}
 if(!document.getElementById('main-content')){main.id='main-content'}
 if(!document.querySelector('.pk-mobile-conversion')){
   const bar=document.createElement('div');bar.className='pk-mobile-conversion';bar.innerHTML='<a class="wa" href="https://wa.me/'+phone+'" target="_blank" rel="noopener" aria-label="WhatsApp Pestokil for a quote">💬 WhatsApp Quote</a><a class="call" href="tel:+254720961362" aria-label="Call Pestokil">📞 Call Pestokil</a>';document.body.appendChild(bar);
   bar.querySelector('.wa').addEventListener('click',function(){lead('mobile_whatsapp');});bar.querySelector('.call').addEventListener('click',function(){lead('mobile_call');});
 }
 document.querySelectorAll('a[href*="wa.me"]').forEach(function(el){el.addEventListener('click',function(){lead('whatsapp');});if(!el.href.includes('text=')){el.addEventListener('click',function(){el.href='https://wa.me/'+phone+'?text='+encodeURIComponent(message())})}});
 document.querySelectorAll('a[href^="tel:"]').forEach(function(el){el.addEventListener('click',function(){lead('phone');});});
 document.querySelectorAll('a[href^="mailto:"]').forEach(function(el){el.addEventListener('click',function(){track('contact',{method:'email',page_type:page});});});
 document.querySelectorAll('form').forEach(function(form){form.addEventListener('submit',function(){track('generate_lead',{lead_source:'form',form_id:form.id||form.getAttribute('name')||'contact_form'});});});
 document.querySelectorAll('input[type="tel"]').forEach(function(el){el.setAttribute('inputmode','tel');el.setAttribute('autocomplete','tel');});
 document.querySelectorAll('input[type="text"]').forEach(function(el){if(/name/i.test((el.name||'')+' '+(el.id||'')+' '+(el.placeholder||'')))el.setAttribute('autocomplete','name');});
 const today=new Date().toISOString().split('T')[0];document.querySelectorAll('input[type="date"]').forEach(function(d){d.min=today});
 const imgs=[...document.images];imgs.forEach(function(img,i){img.decoding='async';if(i===0 && img.getBoundingClientRect().top<1200){img.loading='eager';img.setAttribute('fetchpriority','high')}else if(!img.hasAttribute('loading'))img.loading='lazy';});
});
})();
