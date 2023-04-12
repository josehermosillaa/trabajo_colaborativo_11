var card = document.querySelector("#tarjeta")
var boton = document.getElementById("boton")
$(document).ready(function () {
    fetch("https://studio-ghibli-films-api.herokuapp.com/api/Tales%20from%20Earthsea")
        .then(response => response.json())
        .then(datos => generador(datos))

    boton.addEventListener("click", () => {
        var pelicula = document.getElementById("selectFilm").value;
        fetch("https://studio-ghibli-films-api.herokuapp.com/api/" + pelicula)
            .then(response => response.json())
            .then(nuevosDatos => generador(nuevosDatos))
    })

    function generador(datos) {
        card.innerHTML = ""
        card.innerHTML = `<img src="${datos.poster}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-center fw-bold">${datos.title}</h5>
      <p class="card-text">
        <span class="fw-bold">Descripcion: </span> ${datos.synopsis}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <span class="fw-bold">Titulo Romanizado:</span> ${datos.hepburn}
      </li>
      <li class="list-group-item">
        <span class="fw-bold">Año de estreno:</span>${datos.release}
      </li>
      <li class="list-group-item">
        <span class="fw-bold">Director:</span> ${datos.director}
      </li>
    </ul>
    <div class="card-body mx-auto">
      <a
        href="https://studio-ghibli-films-api.herokuapp.com"
        class="btn btn-primary"
        >Más Información</a
      >
    </div>`

    }

});