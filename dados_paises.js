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
  },
  {
    "nome": "Albânia",
    "sigla": "al",
    "regiao": "EU"
  },
  {
    "nome": "Alemanha",
    "sigla": "de",
    "regiao": "EU"
  },
  {
    "nome": "Andorra",
    "sigla": "ad",
    "regiao": "EU"
  },
  {
    "nome": "Armênia",
    "sigla": "am",
    "regiao": "EU"
  },
  {
    "nome": "Áustria",
    "sigla": "at",
    "regiao": "EU"
  },
  {
    "nome": "Azerbaijão",
    "sigla": "az",
    "regiao": "EU"
  },
  {
    "nome": "Bélgica",
    "sigla": "be",
    "regiao": "EU"
  },
  {
    "nome": "Bielorrússia",
    "sigla": "by",
    "regiao": "EU"
  },
  {
    "nome": "Bósnia e Herzegovina",
    "sigla": "ba",
    "regiao": "EU"
  },
  {
    "nome": "Bulgária",
    "sigla": "bg",
    "regiao": "EU"
  },
  {
    "nome": "Cazaquistão",
    "sigla": "kz",
    "regiao": "EU"
  },
  {
    "nome": "Chipre",
    "sigla": "cy",
    "regiao": "EU"
  },
  {
    "nome": "Croácia",
    "sigla": "hr",
    "regiao": "EU"
  },
  {
    "nome": "Dinamarca",
    "sigla": "dk",
    "regiao": "EU"
  },
  {
    "nome": "Eslováquia",
    "sigla": "sk",
    "regiao": "EU"
  },
  {
    "nome": "Eslovênia",
    "sigla": "si",
    "regiao": "EU"
  },
  {
    "nome": "Espanha",
    "sigla": "es",
    "regiao": "EU"
  },
  {
    "nome": "Estônia",
    "sigla": "ee",
    "regiao": "EU"
  },
  {
    "nome": "Finlândia",
    "sigla": "fi",
    "regiao": "EU"
  },
  {
    "nome": "França",
    "sigla": "fr",
    "regiao": "EU"
  },
  {
    "nome": "Geórgia",
    "sigla": "ge",
    "regiao": "EU"
  },
  {
    "nome": "Grécia",
    "sigla": "gr",
    "regiao": "EU"
  },
  {
    "nome": "Holanda",
    "sigla": "nl",
    "regiao": "EU"
  },
  {
    "nome": "Hungria",
    "sigla": "hu",
    "regiao": "EU"
  },
  {
    "nome": "Irlanda",
    "sigla": "ie",
    "regiao": "EU"
  },
  {
    "nome": "Islândia",
    "sigla": "is",
    "regiao": "EU"
  },
  {
    "nome": "Itália",
    "sigla": "it",
    "regiao": "EU"
  },
  {
    "nome": "Letônia",
    "sigla": "lv",
    "regiao": "EU"
  },
  {
    "nome": "Liechtenstein",
    "sigla": "li",
    "regiao": "EU"
  },
  {
    "nome": "Lituânia",
    "sigla": "lt",
    "regiao": "EU"
  },
  {
    "nome": "Luxemburgo",
    "sigla": "lu",
    "regiao": "EU"
  },
  {
    "nome": "Macedônia do Norte",
    "sigla": "mk",
    "regiao": "EU"
  },
  {
    "nome": "Malta",
    "sigla": "mt",
    "regiao": "EU"
  },
  {
    "nome": "Moldávia",
    "sigla": "md",
    "regiao": "EU"
  },
  {
    "nome": "Mônaco",
    "sigla": "mc",
    "regiao": "EU"
  },
  {
    "nome": "Montenegro",
    "sigla": "me",
    "regiao": "EU"
  },
  {
    "nome": "Noruega",
    "sigla": "no",
    "regiao": "EU"
  },
  {
    "nome": "Polônia",
    "sigla": "pl",
    "regiao": "EU"
  },
  {
    "nome": "Portugal",
    "sigla": "pt",
    "regiao": "EU"
  },
  {
    "nome": "Reino Unido",
    "sigla": "gb",
    "regiao": "EU"
  },
  {
    "nome": "República Tcheca",
    "sigla": "cz",
    "regiao": "EU"
  },
  {
    "nome": "Romênia",
    "sigla": "ro",
    "regiao": "EU"
  },
  {
    "nome": "Rússia",
    "sigla": "ru",
    "regiao": "EU"
  },
  {
    "nome": "San Marino",
    "sigla": "sm",
    "regiao": "EU"
  },
  {
    "nome": "Sérvia",
    "sigla": "rs",
    "regiao": "EU"
  },
  {
    "nome": "Suécia",
    "sigla": "se",
    "regiao": "EU"
  },
  {
    "nome": "Suíça",
    "sigla": "ch",
    "regiao": "EU"
  },
  {
    "nome": "Ucrânia",
    "sigla": "ua",
    "regiao": "EU"
  },
  {
    "nome": "Vaticano",
    "sigla": "va",
    "regiao": "EU"
  },
  {
    "nome": "Afeganistão",
    "sigla": "af",
    "regiao": "AS"
  },
  {
    "nome": "Arábia Saudita",
    "sigla": "sa",
    "regiao": "AS"
  },
  {
    "nome": "Armênia",
    "sigla": "am",
    "regiao": "AS"
  },
  {
    "nome": "Azerbaijão",
    "sigla": "az",
    "regiao": "AS"
  },
  {
    "nome": "Bangladesh",
    "sigla": "bd",
    "regiao": "AS"
  },
  {
    "nome": "Bareine",
    "sigla": "bh",
    "regiao": "AS"
  },
  {
    "nome": "Butão",
    "sigla": "bt",
    "regiao": "AS"
  },
  {
    "nome": "Brunei",
    "sigla": "bn",
    "regiao": "AS"
  },
  {
    "nome": "Camboja",
    "sigla": "kh",
    "regiao": "AS"
  },
  {
    "nome": "Cazaquistão",
    "sigla": "kz",
    "regiao": "AS"
  },
  {
    "nome": "China",
    "sigla": "cn",
    "regiao": "AS"
  },
  {
    "nome": "Chipre",
    "sigla": "cy",
    "regiao": "AS"
  },
  {
    "nome": "Coreia do Norte",
    "sigla": "kp",
    "regiao": "AS"
  },
  {
    "nome": "Coreia do Sul",
    "sigla": "kr",
    "regiao": "AS"
  },
  {
    "nome": "Emirados Árabes Unidos",
    "sigla": "ae",
    "regiao": "AS"
  },
  {
    "nome": "Filipinas",
    "sigla": "ph",
    "regiao": "AS"
  },
  {
    "nome": "Geórgia",
    "sigla": "ge",
    "regiao": "AS"
  },
  {
    "nome": "Iêmen",
    "sigla": "ye",
    "regiao": "AS"
  },
  {
    "nome": "Índia",
    "sigla": "in",
    "regiao": "AS"
  },
  {
    "nome": "Indonésia",
    "sigla": "id",
    "regiao": "AS"
  },
  {
    "nome": "Irã",
    "sigla": "ir",
    "regiao": "AS"
  },
  {
    "nome": "Iraque",
    "sigla": "iq",
    "regiao": "AS"
  },
  {
    "nome": "Israel",
    "sigla": "il",
    "regiao": "AS"
  },
  {
    "nome": "Japão",
    "sigla": "jp",
    "regiao": "AS"
  },
  {
    "nome": "Jordânia",
    "sigla": "jo",
    "regiao": "AS"
  },
  {
    "nome": "Laos",
    "sigla": "la",
    "regiao": "AS"
  },
  {
    "nome": "Líbano",
    "sigla": "lb",
    "regiao": "AS"
  },
  {
    "nome": "Malásia",
    "sigla": "my",
    "regiao": "AS"
  },
  {
    "nome": "Maldivas",
    "sigla": "mv",
    "regiao": "AS"
  },
  {
    "nome": "Mianmar",
    "sigla": "mm",
    "regiao": "AS"
  },
  {
    "nome": "Mongólia",
    "sigla": "mn",
    "regiao": "AS"
  },
  {
    "nome": "Nepal",
    "sigla": "np",
    "regiao": "AS"
  },
  {
    "nome": "Omã",
    "sigla": "om",
    "regiao": "AS"
  },
  {
    "nome": "Paquistão",
    "sigla": "pk",
    "regiao": "AS"
  },
  {
    "nome": "Qatar",
    "sigla": "qa",
    "regiao": "AS"
  },
  {
    "nome": "Quirguistão",
    "sigla": "kg",
    "regiao": "AS"
  },
  {
    "nome": "Singapura",
    "sigla": "sg",
    "regiao": "AS"
  },
  {
    "nome": "Síria",
    "sigla": "sy",
    "regiao": "AS"
  },
  {
    "nome": "Sri Lanka",
    "sigla": "lk",
    "regiao": "AS"
  },
  {
    "nome": "Tailândia",
    "sigla": "th",
    "regiao": "AS"
  },
  {
    "nome": "Taiwan",
    "sigla": "tw",
    "regiao": "AS"
  },
  {
    "nome": "Tajiquistão",
    "sigla": "tj",
    "regiao": "AS"
  },
  {
    "nome": "Timor-Leste",
    "sigla": "tl",
    "regiao": "AS"
  },
  {
    "nome": "Turcomenistão",
    "sigla": "tm",
    "regiao": "AS"
  },
  {
    "nome": "Turquia",
    "sigla": "tr",
    "regiao": "AS"
  },
  {
    "nome": "Uzbequistão",
    "sigla": "uz",
    "regiao": "AS"
  },
  {
    "nome": "Vietnã",
    "sigla": "vn",
    "regiao": "AS"
  },
  {
    "nome": "África do Sul",
    "sigla": "za",
    "regiao": "AF"
  },
  {
    "nome": "Angola",
    "sigla": "ao",
    "regiao": "AF"
  },
  {
    "nome": "Argélia",
    "sigla": "dz",
    "regiao": "AF"
  },
  {
    "nome": "Benin",
    "sigla": "bj",
    "regiao": "AF"
  },
  {
    "nome": "Botsuana",
    "sigla": "bw",
    "regiao": "AF"
  },
  {
    "nome": "Burquina Faso",
    "sigla": "bf",
    "regiao": "AF"
  },
  {
    "nome": "Burundi",
    "sigla": "bi",
    "regiao": "AF"
  },
  {
    "nome": "Cabo Verde",
    "sigla": "cv",
    "regiao": "AF"
  },
  {
    "nome": "Camarões",
    "sigla": "cm",
    "regiao": "AF"
  },
  {
    "nome": "Chade",
    "sigla": "td",
    "regiao": "AF"
  },
  {
    "nome": "Comores",
    "sigla": "km",
    "regiao": "AF"
  },
  {
    "nome": "Congo",
    "sigla": "cg",
    "regiao": "AF"
  },
  {
    "nome": "Costa do Marfim",
    "sigla": "ci",
    "regiao": "AF"
  },
  {
    "nome": "Djibuti",
    "sigla": "dj",
    "regiao": "AF"
  },
  {
    "nome": "Egito",
    "sigla": "eg",
    "regiao": "AF"
  },
  {
    "nome": "Eritreia",
    "sigla": "er",
    "regiao": "AF"
  },
  {
    "nome": "Esuatíni",
    "sigla": "sz",
    "regiao": "AF"
  },
  {
    "nome": "Etiópia",
    "sigla": "et",
    "regiao": "AF"
  },
  {
    "nome": "Gabão",
    "sigla": "ga",
    "regiao": "AF"
  },
  {
    "nome": "Gâmbia",
    "sigla": "gm",
    "regiao": "AF"
  },
  {
    "nome": "Gana",
    "sigla": "gh",
    "regiao": "AF"
  },
  {
    "nome": "Guiné",
    "sigla": "gn",
    "regiao": "AF"
  },
  {
    "nome": "Guiné Equatorial",
    "sigla": "gq",
    "regiao": "AF"
  },
  {
    "nome": "Guiné-Bissau",
    "sigla": "gw",
    "regiao": "AF"
  },
  {
    "nome": "Lesoto",
    "sigla": "ls",
    "regiao": "AF"
  },
  {
    "nome": "Libéria",
    "sigla": "lr",
    "regiao": "AF"
  },
  {
    "nome": "Líbia",
    "sigla": "ly",
    "regiao": "AF"
  },
  {
    "nome": "Madagáscar",
    "sigla": "mg",
    "regiao": "AF"
  },
  {
    "nome": "Maláui",
    "sigla": "mw",
    "regiao": "AF"
  },
  {
    "nome": "Mali",
    "sigla": "ml",
    "regiao": "AF"
  },
  {
    "nome": "Marrocos",
    "sigla": "ma",
    "regiao": "AF"
  },
  {
    "nome": "Maurícia",
    "sigla": "mu",
    "regiao": "AF"
  },
  {
    "nome": "Mauritânia",
    "sigla": "mr",
    "regiao": "AF"
  },
  {
    "nome": "Moçambique",
    "sigla": "mz",
    "regiao": "AF"
  },
  {
    "nome": "Namíbia",
    "sigla": "na",
    "regiao": "AF"
  },
  {
    "nome": "Níger",
    "sigla": "ne",
    "regiao": "AF"
  },
  {
    "nome": "Nigéria",
    "sigla": "ng",
    "regiao": "AF"
  },
  {
    "nome": "Quênia",
    "sigla": "ke",
    "regiao": "AF"
  },
  {
    "nome": "República Centro-Africana",
    "sigla": "cf",
    "regiao": "AF"
  },
  {
    "nome": "República Democrática do Congo",
    "sigla": "cd",
    "regiao": "AF"
  },
  {
    "nome": "Ruanda",
    "sigla": "rw",
    "regiao": "AF"
  },
  {
    "nome": "Saara Ocidental",
    "sigla": "eh",
    "regiao": "AF"
  },
  {
    "nome": "São Tomé e Príncipe",
    "sigla": "st",
    "regiao": "AF"
  },
  {
    "nome": "Senegal",
    "sigla": "sn",
    "regiao": "AF"
  },
  {
    "nome": "Seychelles",
    "sigla": "sc",
    "regiao": "AF"
  },
  {
    "nome": "Serra Leoa",
    "sigla": "sl",
    "regiao": "AF"
  },
  {
    "nome": "Somália",
    "sigla": "so",
    "regiao": "AF"
  },
  {
    "nome": "Suazilândia",
    "sigla": "sz",
    "regiao": "AF"
  },
  {
    "nome": "Sudão",
    "sigla": "sd",
    "regiao": "AF"
  },
  {
    "nome": "Sudão do Sul",
    "sigla": "ss",
    "regiao": "AF"
  },
  {
    "nome": "Tanzânia",
    "sigla": "tz",
    "regiao": "AF"
  },
  {
    "nome": "Togo",
    "sigla": "tg",
    "regiao": "AF"
  },
  {
    "nome": "Tunísia",
    "sigla": "tn",
    "regiao": "AF"
  },
  {
    "nome": "Uganda",
    "sigla": "ug",
    "regiao": "AF"
  },
  {
    "nome": "Zâmbia",
    "sigla": "zm",
    "regiao": "AF"
  },
  {
    "nome": "Zimbábue",
    "sigla": "zw",
    "regiao": "AF"
  },
  {
    "nome": "Austrália",
    "sigla": "au",
    "regiao": "OC"
  },
  {
    "nome": "Fiji",
    "sigla": "fj",
    "regiao": "OC"
  },
  {
    "nome": "Ilhas Marshall",
    "sigla": "mh",
    "regiao": "OC"
  },
  {
    "nome": "Ilhas Salomão",
    "sigla": "sb",
    "regiao": "OC"
  },
  {
    "nome": "Kiribati",
    "sigla": "ki",
    "regiao": "OC"
  },
  {
    "nome": "Micronésia",
    "sigla": "fm",
    "regiao": "OC"
  },
  {
    "nome": "Nauru",
    "sigla": "nr",
    "regiao": "OC"
  },
  {
    "nome": "Nova Zelândia",
    "sigla": "nz",
    "regiao": "OC"
  },
  {
    "nome": "Palau",
    "sigla": "pw",
    "regiao": "OC"
  },
  {
    "nome": "Papua Nova Guiné",
    "sigla": "pg",
    "regiao": "OC"
  },
  {
    "nome": "Samoa",
    "sigla": "ws",
    "regiao": "OC"
  },
  {
    "nome": "Tonga",
    "sigla": "to",
    "regiao": "OC"
  },
  {
    "nome": "Tuvalu",
    "sigla": "tv",
    "regiao": "OC"
  },
  {
    "nome": "Vanuatu",
    "sigla": "vu",
    "regiao": "OC"
  }
]

window.paises = paises;