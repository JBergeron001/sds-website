{
 const pt=document.getElementById('pt');
 const map={'#demo':'SDS BMP Tracker demo','#inspection':'Free sample inspection'};
 if(map[location.hash])pt.value=map[location.hash];
 const f=document.getElementById('f'),sent=document.getElementById('sent');
 f.addEventListener('submit',e=>{
  const ok=document.getElementById('fn').value.trim()&&document.getElementById('em').value.includes('@');
  const live=/stormwaterdynamicsolutions\.com$|github\.io$/.test(location.hostname);
  if(ok&&live)return;
  e.preventDefault();
  sent.hidden=false;
  sent.style.color=ok?'var(--greenInk)':'#b3261e';
  sent.textContent=ok?'Preview: on the live site this request goes to jay@stormwaterdynamicsolutions.com.':'Add your first name and a valid email so we can reply.';
 });
}
