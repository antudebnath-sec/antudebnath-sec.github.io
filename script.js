(function(){
var r=document.documentElement;
try{var s=localStorage.getItem('theme');if(s)r.setAttribute('data-theme',s)}catch(e){}
document.getElementById('t').onclick=function(){var d=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;var n=d?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
var L=['Security Engineer','Penetration Tester','Security Researcher','Certified Ethical Hacker'],li=0,ci=0,del=false,el=document.getElementById('type');
(function tick(){var w=L[li];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?40:85;
if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;li=(li+1)%L.length;d=300}setTimeout(tick,d)})();
var hd=document.getElementById('hd'),mb=document.getElementById('mb'),nl=document.getElementById('nl');
function hs(){hd.classList.toggle('sc',scrollY>40||nl.classList.contains('open'))}
function mt(o){nl.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.style.overflow=o?'hidden':'';hs()}
mb.onclick=function(){mt(!nl.classList.contains('open'))};
nl.addEventListener('click',function(e){if(e.target.tagName==='A')mt(false)});
addEventListener('keydown',function(e){if(e.key==='Escape')mt(false)});
addEventListener('resize',function(){if(innerWidth>920)mt(false)});
addEventListener('scroll',hs);hs();
var secs=[].slice.call(document.querySelectorAll('main section[id]')),lk=[].slice.call(nl.querySelectorAll('a'));
function spy(){var y=scrollY+120,c='';secs.forEach(function(s){if(s.offsetTop<=y)c=s.id});lk.forEach(function(a){a.classList.toggle('act',a.getAttribute('href')==='#'+c)})}
addEventListener('scroll',spy);spy();
var hm=document.getElementById('hm');
if(hm&&!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover)').matches){var hf=hm.parentNode,hi=hm.querySelector('img');
hf.addEventListener('mousemove',function(e){var b=hf.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;hi.style.transform='scale(1.08) translate('+(-x*18)+'px,'+(-y*12)+'px)'});
hf.addEventListener('mouseleave',function(){hi.style.transform=''})}
var cv=document.getElementById('fx'),cx=cv.getContext('2d'),dr=[],fs=16;
function rs(){cv.width=innerWidth;cv.height=innerHeight;dr=Array(Math.ceil(cv.width/fs)).fill(0).map(function(){return Math.random()*cv.height/fs})}
rs();addEventListener('resize',rs);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){setInterval(function(){
var ac=getComputedStyle(r).getPropertyValue('--accent').trim()||'#2ee6a6';
cx.clearRect(0,0,cv.width,cv.height);cx.fillStyle=ac;cx.font=fs+'px monospace';
dr.forEach(function(y,i){cx.fillText(Math.random()<.5?'0':'1',i*fs,y*fs);dr[i]=y*fs>cv.height&&Math.random()>.97?0:y+1})},90)}
addEventListener('scroll',function(){var h=r.scrollHeight-innerHeight;document.getElementById('bar').style.width=(h>0?scrollY/h*100:0)+'%'});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('on');
t.querySelectorAll('.fill').forEach(function(f){f.style.width=f.dataset.w+'%'});
t.querySelectorAll('[data-n]').forEach(function(b){var n=+b.dataset.n,i=0,x=setInterval(function(){i+=Math.max(1,n/40);if(i>=n){i=n;clearInterval(x)}b.textContent=Math.round(i)+(i>=n?b.dataset.s:'')},30)});io.unobserve(t)})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var tb=document.getElementById('tb'),out=document.getElementById('out'),ti=document.getElementById('ti'),hist=[],hp=0;
var C={help:'Commands: whoami, skills, certs, services, contact, clear',
whoami:'Antu Debnath — Security Engineer & Security Researcher\nCEH · 6+ years of experience',
skills:'Web app security · Pentesting · Network security · Vulnerability research · Automation',
certs:'- Certified Ethical Hacker (CEH), EC-Council\n- Certified Red Team Operator (CRTO)\n- OffSec Certified Professional (OSCP)\n- Certified OSINT Specialist (COSP)',
services:'Web pentest · Network testing · Vulnerability assessment · Audits · Bug bounty · Security Training',
contact:'Use the contact form below or email - antudebnath1010@gmail.com'};
function sp(c,t){var e=document.createElement('span');e.className=c;e.textContent=t;return e}
function pr(t){var d=document.createElement('div');d.textContent=t;out.appendChild(d);tb.scrollTop=tb.scrollHeight}
function echo(c){var d=document.createElement('div');d.className='ec';d.appendChild(sp('br','┌──('));d.appendChild(sp('u','antu㉿kali'));d.appendChild(sp('br',')-['));d.appendChild(sp('p','~'));d.appendChild(sp('br',']'));d.appendChild(document.createElement('br'));d.appendChild(sp('br','└─'));d.appendChild(sp('u','$'));d.appendChild(document.createTextNode(' '+c));out.appendChild(d)}
pr('Welcome. Type "help" to begin.');
document.getElementById('tf').onsubmit=function(e){e.preventDefault();var c=ti.value.trim().toLowerCase();ti.value='';if(!c)return;hist.push(c);hp=hist.length;echo(c);
if(c==='clear'){out.textContent=''}else pr(C[c]||'command not found: '+c+' (try "help")');tb.scrollTop=tb.scrollHeight};
ti.onkeydown=function(e){if(e.key==='ArrowUp'&&hp>0){hp--;ti.value=hist[hp]}else if(e.key==='ArrowDown'){hp=Math.min(hp+1,hist.length);ti.value=hist[hp]||''}};
document.getElementById('cf').onsubmit=function(e){e.preventDefault();var n=document.getElementById('cn').value,m=document.getElementById('cm').value,em=document.getElementById('ce').value;
location.href='mailto:antudebnath1010@gmail.com?subject='+encodeURIComponent('Security enquiry from '+n)+'&body='+encodeURIComponent(m+'\n\nReply to: '+em)};
})();

/* Recent activities: photo viewer */
(function(){var lb=document.getElementById('lb');if(!lb||!lb.showModal)return;
var im=lb.querySelector('img'),cp=lb.querySelector('figcaption');
document.querySelectorAll('.shot').forEach(function(b){b.addEventListener('click',function(){var s=b.querySelector('img');im.src=s.currentSrc||s.src;im.alt=s.alt;cp.textContent=b.dataset.cap||s.alt;lb.showModal()})});
document.getElementById('lbx').addEventListener('click',function(){lb.close()});
lb.addEventListener('click',function(e){if(e.target===lb||e.target.tagName==='FIGURE')lb.close()});
})();

/* Hero tag: decrypt-style scramble */
(function(){var el=document.getElementById('whoami'),tag=el&&el.parentNode;if(!el||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var txt=el.textContent,ch='01<>/\#$%&@!?',run=false;
function go(){if(run)return;run=true;tag.classList.add('scr');var f=0,n=22;
var t=setInterval(function(){f++;var k=Math.floor(txt.length*f/n),o='';
for(var i=0;i<txt.length;i++)o+=i<k||txt[i]===' '?txt[i]:ch[Math.floor(Math.random()*ch.length)];
el.textContent=o;if(f>=n){clearInterval(t);el.textContent=txt;tag.classList.remove('scr');run=false}},45)}
setTimeout(go,500);setInterval(go,4000)})();

document.getElementById('tb').addEventListener('click',function(e){if(!getSelection().toString())document.getElementById('ti').focus()});
