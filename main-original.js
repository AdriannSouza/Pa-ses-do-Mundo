//Botões no HTML
const btns = document.querySelectorAll('.btn_filtro');

//Recebe os paises
const sec_paises = document.querySelector('.sec_paises');

//Executa ao clickar
btns.forEach((btn) => {

  btn.addEventListener('click', function () {
    filtrar(btn.getAttribute('value'))
  })

})

exibir(paises);

//Filtra baseado na região do país (SA, NA, etc...).
function filtrar(value_region) {

    console.log(value_region)
    let filtrados = paises.filter(country => country.regiao == value_region.toUpperCase());
    exibir(filtrados);

    if (value_region == 'todos') { exibir(paises) }

}

function exibir(filtrados) {

  sec_paises.innerHTML = "";

  filtrados.forEach(pais => {
    sec_paises.innerHTML += `
            <div class="pais">
                <img class="bandeira" src="img/${pais.sigla}.png" alt="bandeira de ${pais.nome}">
                <p>${pais.nome}</p><br>
                <div>
                  <p><a href="https://pt.wikipedia.org/wiki/${pais.nome}" target="blank">Wikipédia</a></p> 
                </div>
            </div>
        `
  });

}
