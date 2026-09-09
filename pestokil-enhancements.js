(function(){
  'use strict';
  const phone='254720961362';
  const track=(name,params)=>{try{if(typeof window.gtag==='function')window.gtag('event',name,params||{});}catch(e){}};
  const wa=(text)=>window.open('https://wa.me/'+phone+'?text='+encodeURIComponent(text),'_blank','noopener');
  document.addEventListener('DOMContentLoaded',function(){
    const main=document.querySelector('main')||document.body;
    if(!document.querySelector('.skip-link')){const a=document.createElement('a');a.className='skip-link';a.href='#main-content';a.textContent='Skip to content';document.body.prepend(a);}
    if(!document.getElementById('main-content')){const first=main.querySelector('section,div');if(first)first.id='main-content';}
    if(!document.querySelector('.pk-mobile-cta') && !document.querySelector('.pk-mobile-conversion')){
      const bar=document.createElement('div');bar.className='pk-mobile-cta';bar.innerHTML='<a class="wa" href="https://wa.me/254720961362?text=Hi%20Pestokil!%20I%20need%20a%20free%20pest%20control%20quote." target="_blank" rel="noopener">💬 WhatsApp Quote</a><a class="call" href="tel:+254720961362">📞 Call Now</a>';document.body.appendChild(bar);
      bar.querySelector('.wa').addEventListener('click',()=>track('generate_lead',{lead_source:'mobile_whatsapp',page_location:location.pathname}));
      bar.querySelector('.call').addEventListener('click',()=>track('generate_lead',{lead_source:'mobile_call',page_location:location.pathname}));
    }
    document.querySelectorAll('a[href*="wa.me"]').forEach(el=>el.addEventListener('click',()=>track('generate_lead',{lead_source:'whatsapp',page_location:location.pathname})));
    document.querySelectorAll('a[href^="tel:"]').forEach(el=>el.addEventListener('click',()=>track('generate_lead',{lead_source:'phone',page_location:location.pathname})));
    document.querySelectorAll('input[type="tel"]').forEach(el=>{el.setAttribute('inputmode','tel');el.setAttribute('autocomplete','tel');});
    document.querySelectorAll('input[type="text"]').forEach(el=>{if(/name/i.test(el.name+' '+el.id+' '+el.placeholder))el.setAttribute('autocomplete','name');});
    const dates=document.querySelectorAll('input[type="date"]');const today=new Date().toISOString().split('T')[0];dates.forEach(d=>d.min=today);
    document.querySelectorAll('img').forEach(img=>{if(!img.hasAttribute('decoding'))img.decoding='async';});
  });
})();
