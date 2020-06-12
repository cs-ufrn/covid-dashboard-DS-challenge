//==========================Auxiliary functions=======================

updateDate = (date) => {
    var newDate = String(date).slice(8, 10) + '/' + String(date).slice(5, 7) + '/' + String(date).slice(0, 4);
    return newDate;
}

//===========================Chart=============================

const apiBrazil = 'https://api.covid19api.com/country/brazil/status/confirmed';

const loadCasesBrazil = async () => {
    const response = await axios.get(apiBrazil);
    const casos = response.data;

    if (response.status === 200) {  //Se obteve resposta

        var eixoX = [], eixoY = [], colors = [];

        for (var i = 0; i < casos.length; i++) {
            console.log(casos[i].Date);
            if(new Date(casos[i].Date) > new Date('2020-02-26')){
                eixoX.push(updateDate(casos[i].Date));
                eixoY.push(casos[i].Cases);
                colors.push('#dd4ecc');
            }
        }
        const chartBrazil = document.querySelector("#chart-brazil").getContext('2d');

        var myChart = new Chart(chartBrazil, {
            type: 'line',
            data: {
                labels: eixoX,
                datasets: [{
                    data: eixoY,
                    backgroundColor: '#dd4ecc2e',
                    borderColor: colors,
                    borderWidth: 1,
                    pointBackgroundColor: '#dd4ecc'
                }]
            },
            options: {
                responsive : true,
                legend:{
                    display: false,
                },  
                title: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: "rgba(122, 122, 122, 0.30)",
                        },
                        ticks: {
                            fontColor: 'grey'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: "rgba(122, 122, 122, 0)",
                        },
                        ticks:{
                            display: true,
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