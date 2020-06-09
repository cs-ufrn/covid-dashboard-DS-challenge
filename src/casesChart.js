//==========================Auxiliary functions=======================

updateDate = (date) => {
    var newDate = String(date).slice(8, 10) + '/' + String(date).slice(5, 7) + '/' + String(date).slice(0, 4);
    return newDate;
}

const randomColorBrazil = () => {
    var hexBrazil = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexBrazil[Math.floor(Math.random() * 16)];
    }
    return color;
}

//===========================Chart=============================

const apiBrazil = 'https://api.covid19api.com/country/brazil/status/confirmed';

const loadCasesBrazil = async () => {
    const response = await axios.get(apiBrazil);
    const casos = response.data;

    if (response.status === 200) {  //Se obteve resposta

        var eixoX = [], eixoY = [], colors = [];

        for (var i = 0; i < casos.length; i++) {
            eixoX.push(updateDate(casos[i].Date));
            eixoY.push(casos[i].Cases);
            colors.push(randomColorBrazil());
        }
        const chartBrazil = document.querySelector("#chart-brazil").getContext('2d');

        var myChart = new Chart(chartBrazil, {
            type: 'line',
            data: {
                labels: eixoX,
                datasets: [{
                    label: 'Quantidade de casos',
                    data: eixoY,
                    backgroundColor: ['white'],
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                legend: { labels: { fontColor: 'orange' } },
                title: {
                    display: true,
                    fontColor: 'blue',
                    text: 'Casos de COVID-19 no Brasil'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: 'red'
                        }
                    }],
                    xAxes: [{
                        ticks:{
                            fontColor: 'green'
                        }
                    }]
                }
            }

        });

    } else {
        alert('error');
    }
}
loadCasesBrazil();