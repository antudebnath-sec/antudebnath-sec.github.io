(function(){
var r=document.documentElement;
try{var s=localStorage.getItem('theme');if(s)r.setAttribute('data-theme',s)}catch(e){}
document.getElementById('t').onclick=function(){var d=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;var n=d?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
var L=['Security Engineer','Penetration Tester','Security Researcher','Certified Ethical Hacker'],li=0,ci=0,del=false,el=document.getElementById('type');
(function tick(){var w=L[li];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?40:85;
if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;li=(li+1)%L.length;d=300}setTimeout(tick,d)})();
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
var out=document.getElementById('out'),ti=document.getElementById('ti'),hist=[],hp=0;
var C={help:'Commands: whoami, skills, certs, services, contact, clear',
whoami:'Antu Debnath — Security Engineer & Security Researcher\nCEH · 6+ years of experience',
skills:'Web app security · Pentesting · Network security · Vulnerability research · Automation',
certs:'- Certified Ethical Hacker (CEH), EC-Council\n- Certified Red Team Operator (CRTO)\n- OffSec Certified Professional (OSCP)\n- Certified OSINT Specialist (COSP)',
services:'Web pentest · Network testing · Vulnerability assessment · Audits · Bug bounty · Security Training',
contact:'Use the contact form below or email - antudebnath1010@gmail.com'};
function pr(t){out.textContent+=t+'\n';out.scrollTop=out.scrollHeight}
pr('Welcome. Type "help" to begin.');
document.getElementById('tf').onsubmit=function(e){e.preventDefault();var c=ti.value.trim().toLowerCase();ti.value='';if(!c)return;hist.push(c);hp=hist.length;pr('$ '+c);
if(c==='clear'){out.textContent=''}else pr(Object.prototype.hasOwnProperty.call(C,c)?C[c]:'command not found: '+c+' (try "help")')};
ti.onkeydown=function(e){if(e.key==='ArrowUp'&&hp>0){hp--;ti.value=hist[hp]}else if(e.key==='ArrowDown'){hp=Math.min(hp+1,hist.length);ti.value=hist[hp]||''}};
document.getElementById('cf').onsubmit=function(e){e.preventDefault();var n=document.getElementById('cn').value,m=document.getElementById('cm').value,em=document.getElementById('ce').value;
location.href='mailto:antudebnath1010@gmail.com?subject='+encodeURIComponent('Security enquiry from '+n)+'&body='+encodeURIComponent(m+'\n\nReply to: '+em)};
})();
