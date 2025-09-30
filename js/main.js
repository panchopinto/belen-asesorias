async function loadJSON(path){
  const res = await fetch(path);
  return await res.json();
}
function mountServicios(){
  const el = document.querySelector('#cards-servicios');
  if(!el) return;
  loadJSON('data/servicios.json').then(items=>{
    el.innerHTML = items.map(i=>`
      <article class="card">
        <h3>${i.emoji} ${i.titulo}</h3>
        <p>${i.descripcion}</p>
        <p><span class="badge">Modalidad: ${i.modalidad}</span> <span class="badge">Duración: ${i.duracion}</span></p>
        <p><span class="badge">Desde: ${i.desde}</span></p>
      </article>`).join('');
  });
}
function mountTestimonios(){
  const el = document.querySelector('#cards-testimonios');
  if(!el) return;
  loadJSON('data/testimonios.json').then(items=>{
    el.innerHTML = items.map(t=>`
      <article class="card">
        <h3>“${t.titulo}”</h3>
        <p>${t.texto}</p>
        <p class="small">— ${t.autor}, ${t.cargo}</p>
      </article>`).join('');
  });
}
function mountPortafolio(){
  const el = document.querySelector('#cards-proyectos');
  if(!el) return;
  loadJSON('../data/proyectos.json').then(items=>{
    el.innerHTML = items.map(p=>`
      <article class="card">
        <h3>${p.emoji} ${p.nombre}</h3>
        <p>${p.resumen}</p>
        <p class="small">${p.etiquetas.join(' · ')}</p>
        ${p.url ? `<p><a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">Ver proyecto</a></p>`:''}
      </article>`).join('');
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  mountServicios(); mountTestimonios(); mountPortafolio();
});
