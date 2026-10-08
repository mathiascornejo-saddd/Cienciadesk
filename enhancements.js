// CienciaDesk 0.3: backup, restore, progress summary. No external data transfers.
(()=>{
const keys=['cd_curriculum_v02','cd_curriculum_tracking_v02','cd_items','cd_tasks'];
const parse=(key,def)=>{try{return JSON.parse(localStorage.getItem(key))??def}catch{return def}};
const el=id=>document.getElementById(id);
function stats(){
 const records=parse(keys[0],[]),progress=parse(keys[1],{}),items=parse(keys[2],[]),tasks=parse(keys[3],[]);
 const done=records.filter(r=>progress[r.id]?.estado==='Trabajado').length;
 const low=items.filter(x=>Number(x.qty)<=Number(x.min)).length;
 el('dashboard-stats').innerHTML=[['OA importados',records.length],['OA trabajados',done],['Materiales por reponer',low],['Notas y tareas',tasks.length]].map(([label,n])=>`<div class="card"><div class="stat">${n}</div><div class="muted">${label}</div></div>`).join('');
}
function download(name,content){const url=URL.createObjectURL(new Blob([JSON.stringify(content,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)}
el('backup-download').addEventListener('click',()=>download('cienciadesk-respaldo-v03.json',{format:'cienciadesk-backup',version:1,exportedAt:new Date().toISOString(),data:Object.fromEntries(keys.map(k=>[k,parse(k,k.endsWith('tracking_v02')?{}:[])]))}));
el('backup-import').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;const msg=el('backup-message');try{if(f.size>4000000)throw Error('El respaldo supera los 4 MB');const b=JSON.parse(await f.text());if(b.format!=='cienciadesk-backup'||b.version!==1||!b.data||typeof b.data!=='object')throw Error('Formato de respaldo incorrecto');for(const k of keys){const value=b.data[k];if(k===keys[1]){if(!value||Array.isArray(value)||typeof value!=='object')throw Error('Seguimiento inválido')}else if(!Array.isArray(value))throw Error('Lista inválida: '+k)}if(!confirm('Restaurar reemplazará los datos actuales de este dispositivo. ¿Continuar?'))return;for(const k of keys)localStorage.setItem(k,JSON.stringify(b.data[k]));window.dispatchEvent(new Event('cd-restored'));msg.textContent='Respaldo restaurado correctamente.';stats()}catch(err){msg.textContent='No se pudo restaurar: '+err.message}finally{e.target.value=''}});
window.addEventListener('cd-data-updated',stats);stats();
})();
