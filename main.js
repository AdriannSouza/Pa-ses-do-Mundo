const paises = [
    {
      "nome": "Antígua e Barbuda",
      "sigla": "ag",
      "regiao": "CA"
    },
    {
      "nome": "Argentina",
      "sigla": "ar",
      "regiao": "SA"
    },
    {
      "nome": "Bahamas",
      "sigla": "bs",
      "regiao": "CA"
    },
    {
      "nome": "Barbados",
      "sigla": "bb",
      "regiao": "CA"
    },
    {
      "nome": "Belize",
      "sigla": "bz",
      "regiao": "CA"
    },
    {
      "nome": "Bolívia",
      "sigla": "bo",
      "regiao": "SA"
    },
    {
      "nome": "Brasil",
      "sigla": "br",
      "regiao": "SA"
    },
    {
      "nome": "Canadá",
      "sigla": "ca",
      "regiao": "NA"
    },
    {
      "nome": "Chile",
      "sigla": "cl",
      "regiao": "SA"
    },
    {
      "nome": "Colômbia",
      "sigla": "co",
      "regiao": "SA"
    },
    {
      "nome": "Costa Rica",
      "sigla": "cr",
      "regiao": "CA"
    },
    {
      "nome": "Cuba",
      "sigla": "cu",
      "regiao": "CA"
    },
    {
      "nome": "Dominica",
      "sigla": "dm",
      "regiao": "CA"
    },
    {
      "nome": "República Dominicana",
      "sigla": "do",
      "regiao": "CA"
    },
    {
      "nome": "Equador",
      "sigla": "ec",
      "regiao": "SA"
    },
    {
      "nome": "El Salvador",
      "sigla": "sv",
      "regiao": "CA"
    },
    {
      "nome": "Estados Unidos",
      "sigla": "us",
      "regiao": "NA"
    },
    {
      "nome": "Granada",
      "sigla": "gd",
      "regiao": "CA"
    },
    {
      "nome": "Guatemala",
      "sigla": "gt",
      "regiao": "CA"
    },
    {
      "nome": "Guiana",
      "sigla": "gy",
      "regiao": "SA"
    },
    {
      "nome": "Haiti",
      "sigla": "ht",
      "regiao": "CA"
    },
    {
      "nome": "Honduras",
      "sigla": "hn",
      "regiao": "CA"
    },
    {
      "nome": "Jamaica",
      "sigla": "jm",
      "regiao": "CA"
    },
    {
      "nome": "México",
      "sigla": "mx",
      "regiao": "NA"
    },
    {
      "nome": "Nicarágua",
      "sigla": "ni",
      "regiao": "CA"
    },
    {
      "nome": "Panamá",
      "sigla": "pa",
      "regiao": "CA"
    },
    {
      "nome": "Paraguai",
      "sigla": "py",
      "regiao": "SA"
    },
    {
      "nome": "Peru",
      "sigla": "pe",
      "regiao": "SA"
    },
    {
      "nome": "República Dominicana",
      "sigla": "do",
      "regiao": "CA"
    },
    {
      "nome": "Santa Lúcia",
      "sigla": "lc",
      "regiao": "CA"
    },
    {
      "nome": "São Cristóvão e Neves",
      "sigla": "kn",
      "regiao": "CA"
    },
    {
      "nome": "São Vicente e Granadinas",
      "sigla": "vc",
      "regiao": "CA"
    },
    {
      "nome": "Suriname",
      "sigla": "sr",
      "regiao": "SA"
    },
    {
      "nome": "Trinidad e Tobago",
      "sigla": "tt",
      "regiao": "CA"
    },
    {
      "nome": "Uruguai",
      "sigla": "uy",
      "regiao": "SA"
    },
    {
      "nome": "Venezuela",
      "sigla": "ve",
      "regiao": "SA"
    }
]

//Botões no HTML
const btns = document.querySelectorAll('.btn_filtro');

//Recebe os paises
const sec_paises = document.querySelector('.sec_paises');

//Executa ao clickar
btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        filtrar(btn.getAttribute('value'))
    })
})

exibir(paises);

function filtrar(value_region) {

    console.log(value_region)
    let filtrados = paises.filter(country => country.regiao == value_region);
    exibir(filtrados);

    if (value_region == 'todos') {exibir(paises)}
}

function exibir(filtrados) {

    sec_paises.innerHTML = "";

    filtrados.forEach(pais => {
        sec_paises.innerHTML += `
            <div class="pais">
                <img class="bandeira" src="img/${pais.sigla}.png" alt="bandeira de ${pais.nome}">
                <p>${pais.nome}</p>
                <p>${pais.regiao}</p>
            </div>
        `
    });

}
