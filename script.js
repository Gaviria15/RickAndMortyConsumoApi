const apiUrl = 'https://rickandmortyapi.com/api/character'
let request = document.getElementById('request');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => renderizar(data.results));

function renderizar(personajes) {
    personajes.forEach(p => {
        request.innerHTML += `<div class="tarjeta">
            <img class="imagen" src="${p.image}" alt="${p.name}">
            <div class="contenido">
              <h2>${p.name}</h2>
              <p class="estado">Especie: ${p.species}</p>
              <p class="estado">Estado: ${p.status}</p>
              <p class="estado">Locación: ${p.location.name}</p>
            </div>
          </div>`;
    });
}