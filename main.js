//Botões no HTML
const btns = document.querySelectorAll('.btn_filtro');

//Recebe os paises
const sec_paises = document.querySelector('.sec_paises');

//Executa ao clicar
btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    filtrar(btn.getAttribute('value'))
  })
});

exibir(paises);

//Filtra baseado na região do país (SA, NA, etc...).
function filtrar(value_region) {
  console.log(value_region)
  let filtrados = paises.filter(country => country.regiao === value_region.toUpperCase());
  exibir(filtrados);

  if (value_region === 'todos') {
    exibir(paises);
  }
}

function exibir(filtrados) {
  // Cria um documento fragmento
  const fragment = document.createDocumentFragment();

  filtrados.forEach(pais => {
    // Cria os elementos individualmente
    const divPais = document.createElement('div');
    divPais.classList.add('pais');

    const imgBandeira = document.createElement('img');
    imgBandeira.classList.add('bandeira');
    imgBandeira.src = `img/${pais.sigla}.png`;
    imgBandeira.alt = `bandeira de ${pais.nome}`;

    const pNome = document.createElement('p');
    pNome.textContent = pais.nome;

    const divLink = document.createElement('div');
    const pLink = document.createElement('p');
    const aLink = document.createElement('a');
    aLink.href = `https://pt.wikipedia.org/wiki/${pais.nome}`;
    aLink.target = '_blank';
    aLink.textContent = 'Wikipédia';

    // Anexa os elementos ao documento fragmento
    pLink.appendChild(aLink);
    divLink.appendChild(pLink);
    divPais.appendChild(imgBandeira);
    divPais.appendChild(pNome);
    divPais.appendChild(divLink);
    fragment.appendChild(divPais);
  });

  // Limpa o conteúdo existente e adiciona o documento fragmento ao elemento 'sec_paises'
  sec_paises.innerHTML = '';
  sec_paises.appendChild(fragment);
}
