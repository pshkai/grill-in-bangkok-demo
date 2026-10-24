const dishes = [
  {en:'Signature Grilled Fish',th:'ปลาย่างซิกเนเจอร์',desc:'A centrepiece for a table of hungry friends.',thai:'จานหลักสำหรับมื้ออร่อยที่ได้แชร์กับเพื่อน',category:'grill'},
  {en:'Mala Grilled Fish',th:'ปลาย่างหม่าล่า',desc:'For those who love a little more heat.',thai:'สำหรับคนรักความเผ็ดซ่าของหม่าล่า',category:'bold'},
  {en:'Grilled Thai Wagyu Beef',th:'เนื้อวากิวย่างสไตล์ไทย',desc:'A grilled favourite for the meat lovers.',thai:'จานย่างสำหรับคนรักเนื้อ',category:'grill'},
  {en:'Mapo Tofu',th:'มาโปเต้าหู้',desc:'A bold Chinese classic to add to the spread.',thai:'จานจีนรสจัดจ้าน เติมความอร่อยให้มื้อนี้',category:'bold'},
  {en:'12 Skewers Set',th:'ชุดเสียบไม้ 12 ไม้',desc:'Pork, beef and chicken. Made for sharing.',thai:'หมู เนื้อ และไก่ แบ่งกันอร่อยได้ทั้งโต๊ะ',category:'share'},
  {en:'Seafood Fried Rice',th:'ข้าวผัดทะเล',desc:'Round out your gathering with a shared favourite.',thai:'เติมมื้อสังสรรค์ด้วยจานโปรดที่คุ้นเคย',category:'share'}
];
let lang='en',filter='all';
const menu=document.querySelector('#dishes');
function renderMenu(){menu.replaceChildren();dishes.forEach((d,i)=>{if(filter!=='all'&&d.category!==filter)return;const el=document.createElement('article');el.className='dish';const number=document.createElement('span');number.className='dish-number';number.textContent=String(i+1).padStart(2,'0');const copy=document.createElement('div');const heading=document.createElement('h3');heading.textContent=d[lang];const p=document.createElement('p');p.textContent=lang==='en'?d.desc:d.thai;copy.append(heading,p);const arrow=document.createElement('span');arrow.className='dish-arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');el.append(number,copy,arrow);menu.append(el);});}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderMenu();}));
const nav=document.querySelector('#nav'),toggle=document.querySelector('.menu-toggle');
function closeNav(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',lang==='en'?'Open navigation':'เปิดเมนู');}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeNav();toggle.focus();}});
document.querySelector('#language').addEventListener('click',()=>{lang=lang==='en'?'th':'en';document.documentElement.lang=lang;document.body.classList.toggle('th',lang==='th');document.querySelectorAll('[data-en][data-th]').forEach(el=>{el.innerHTML=el.dataset[lang];});const b=document.querySelector('#language');b.textContent=lang==='en'?'TH':'EN';b.setAttribute('aria-label',lang==='en'?'Switch to Thai':'Switch to English');renderMenu();if(!document.querySelector('#booking-result').hidden)renderSummary();});
const form=document.querySelector('#booking-form'),date=document.querySelector('#date'),result=document.querySelector('#booking-result');
function bangkokDate(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
date.min=bangkokDate();
date.addEventListener('input',()=>date.setCustomValidity(''));
let summary=null;
function renderSummary(){if(!summary)return;result.replaceChildren();const title=document.createElement('strong');title.textContent=lang==='en'?'Your visit preview':'แผนมื้อของคุณ';const details=document.createElement('p');const formatted=new Intl.DateTimeFormat(lang==='en'?'en-GB':'th-TH',{dateStyle:'long'}).format(new Date(summary.date+'T12:00:00'));details.textContent=`${formatted} · ${summary.time} · ${summary.party} ${lang==='en'?'guests':'คน'}`;const warning=document.createElement('p');warning.textContent=lang==='en'?'Demo only — no reservation has been submitted. Please contact the business to make an actual booking.':'ตัวอย่างเท่านั้น — ยังไม่มีการส่งคำขอจอง กรุณาติดต่อร้านเพื่อจองโต๊ะจริง';const occasion=document.createElement('p');const option=document.querySelector(`#occasion option[value="${summary.occasion}"]`);occasion.textContent=option?.dataset[lang]||'';const link=document.createElement('a');link.href='https://www.chope.co/bangkok-restaurants/restaurant/grill-in-bangkok';link.target='_blank';link.rel='noopener noreferrer';link.textContent=lang==='en'?'Continue to Chope for a real booking ↗':'ไปที่ Chope เพื่อจองโต๊ะจริง ↗';result.append(title,details,occasion,warning,link);result.hidden=false;}
form.addEventListener('submit',event=>{event.preventDefault();date.min=bangkokDate();if(date.value<date.min){date.setCustomValidity(lang==='en'?'Choose today or a future date.':'กรุณาเลือกวันนี้หรือวันที่ในอนาคต');date.reportValidity();return;}if(!form.reportValidity())return;summary=Object.fromEntries(new FormData(form));renderSummary();result.focus();});
form.addEventListener('input',()=>{result.hidden=true;summary=null;});
renderMenu();
