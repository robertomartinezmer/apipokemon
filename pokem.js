boton.addEventListener("click", () => {
    function aleatorio(max) {
        a = Math.floor(Math.random() * max);
        return a;
    }
    let naleatorio = aleatorio(150);
    let naleatorio2 = aleatorio(150);
    console.log(naleatorio);
    generarPoke(naleatorio);
    generarPoke(naleatorio2);

    function buildTarget(name, foto) {
        document.getElementById("personaje1").innerHTML =`
            <article>
            <div class="image-container">
                <img src= ${foto} alt="per">
            </div>
            <h2>${name}</h2>
        </article>
        `
        document.getElementById("personaje2").innerHTML =`
            <article>
            <div class="image-container">
                <img src= ${foto} alt="per">
            </div>
            <h2>${name}</h2>
        </article>
        `
        main.append(article);

    }
    function generarPoke(naleatorio2) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${naleatorio2}`)
            .then(response => response.json())
            .then(datos => {
                buildTarget(datos.name, datos.sprites.front_default);
            })
            .catch((err) => {
                console.log("Error al consumir la API")
            })
            .finally(() => {
                console.log("Se ha consumido todo el API")
            })
    }
});



