// ----------------- data -------------------------------
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const natal = { ...natalNeighbors,  features: natalNeighbors.features.map((el) => { 
  return { 
    ...el, 
    properties: {
      ...el.properties, 
      txIso: parseFloat((Math.random()*100).toFixed(2))
    }
  }}
)};

//------------------------------------------------------------//
const randomColor = () => {
  const hex = (Math.random()*0xFFFFFF<<0).toString(16);
  return `#${hex}`;
}
new Chart(document.getElementById("chart-1").getContext('2d')
, {
    type: 'bar',
    data: {
      labels: natal.features.map((val) => val.properties.name),
      datasets:  [{
          data: natal.features.map((val) => val.properties.txIso),
          label: "Isolamento Social",
          backgroundColor: natal.features.map((val) => getColor(val.properties.txIso)),
          fill: true,
        }
      ],
    },
    options:{
      legend:{
          display:false,
      },scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(122, 122, 122, 0.25)",
            },
            ticks:{
              display:true
            },
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   
        }]
      },
    }
  });

  /* Request data Natal */
  const apiNatal = 'https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=RN';

  let casesNatal, deathsNatal, populationNatal;

  let h3ConfirmedNatal = document.querySelector("#casos");
  let h3DeathsNatal = document.querySelector("#obitos");
  let h3PopulationNatal = document.querySelector("#population");

  const loadDataNatal = async () =>{

    const responseNatal = await axios.get(apiNatal);

    for(var i=0; i< responseNatal.data.results.length;i++){
      if(responseNatal.data.results[i].city == 'Natal'){
        
        casesNatal =responseNatal.data.results[i].confirmed;
        deathsNatal = responseNatal.data.results[i].deaths;
        populationNatal = responseNatal.data.results[i].estimated_population_2019;

      }
    }

    h3ConfirmedNatal.textContent = casesNatal;
    h3DeathsNatal.textContent = deathsNatal;
    h3PopulationNatal.textContent = populationNatal;
  }

  loadDataNatal();

// ------------------Maps-------------------

// Inicia a plotagem do mapa
var map = L.map('mapid').setView([-5.80522,-35.20801], 11);
var info = L.control();

// Insere o mapa propriamente dito na biblioteca de plotagem
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// Cria info no gráfico
info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

// Atualiza info quando mouse posicionado sobre bairro
info.update = function (props) {
  this._div.innerHTML = '<p>Taxa de isolamento social por bairro em %</p>' +  (props ?
      '<b>' + props.name + '</b><br />' + props.txIso + '% de isolamento social'
      : '');
};
// Adiciona o objeto info no plot
info.addTo(map);

// Plota mapa na div posicionada no index.html
L.geoJSON(natal, {style: style, onEachFeature: onEachFeature}).addTo(map);

// ------------------ Styling things ------------

// Estiliza cada área demarcada no mapa
function style(feature) {
  return {
      fillColor: getColor(feature.properties.txIso),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

//De acordo com a escala criada, posibilita plot agregado a noção de intensidade
function getColor(d) {
  return d > 100 ? '#800026' :
    d > 80  ? '#BD0026' :
    d > 60  ? '#E31A1C' :
    d > 50  ? '#FC4E2A' :
    d > 40   ? '#FD8D3C' :
    d > 25   ? '#FEB24C' :
    d > 15   ? '#FED976' :
              '#FFEDA0';
}

// ------------- MouseOver Neighbor ---------

// Carrega os eventos abaixo no plot
function onEachFeature(feature, layer) {
  layer.on({
      mouseover: onMouseOver,
      mouseout: onMouseOut,
  });
}

// Repassa estilo criado para evento de mouseouver e atualiza o plot
function onMouseOver(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 4,
      color: "rgb(121, 131, 237)",
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

// Repassa estilo criado para evento de mouseout e atualiza o plot
function onMouseOut(e) {
  var layer = e.target;

  layer.setStyle(style(layer.feature));

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
  info.update();
}