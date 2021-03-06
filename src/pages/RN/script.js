const apiRN = "https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=RN";
const api = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';

let data;

const loadCitys = async () => {
    const response = await axios.get(apiRN);
    const cidades = response.data.results;
    const selectBox = document.getElementById('city-names')
    for (let cidade of cidades) {
        if(cidade.city !== null){
            const newOption = document.createElement('option');
            newOption.textContent = cidade.city;
            newOption.value = cidade.city;
            selectBox.appendChild(newOption);
        }
    }
}    
const loadCitysCases = async (nome) => {
    const response = await axios.get(`https://brasil.io/api/dataset/covid19/caso/data/?city=${nome}&is_last=true`);
    const cidade = response.data.results[0];

    const casos = document.getElementById('confirmados');
    const obitos = document.getElementById('obitos');

    casos.textContent = cidade.confirmed;
    obitos.textContent = cidade.deaths;

    const chart_info = [parseInt(casos.textContent),parseInt(obitos.textContent)];
    attData(cityChart,chart_info);
}

const loadRNData = async () => {
    const response = await axios.get(api + '/uf/rn');

    if (response.status === 200) {
        const casosConfirmados = document.getElementById('casos-rn');
        const obitosConfirmados = document.getElementById('obitos-rn');
        const curadosConfirmados = document.getElementById('suspects-rn');

        casosConfirmados.textContent = response.data.cases;
        obitosConfirmados.textContent = response.data.deaths;
        curadosConfirmados.textContent = response.data.suspects;

    }
}

let cityChart = new Chart(document.getElementById("city-chart").getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["Casos Confirmados","Obitos"],
        datasets: [{ 
            data: [500,500],
            label: "Casos Confirmados e Obitos",
            backgroundColor:["rgba(144, 238, 144,0.3)","rgba(245, 174, 174,0.3)"],
            borderColor:['rgb(144, 238, 144)','rgb(245, 174, 174)'],
            borderWidth: 1,
            fill: false,
        }
        ],
    },
    options:{
        responsive:true,
        legend:{
            display:false,
        },scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(122, 122, 122, 0.25)",
                },
                ticks:{
                beginAtZero:true,
                display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(122, 122, 122, 0.25)",
                }   
            }]
        },
    }
    });

const attData = (chart,data) => {
    chart.data.datasets[0].data= data;
    chart.update();
}



loadCitys();
loadRNData();
loadCitysCases('Natal');


