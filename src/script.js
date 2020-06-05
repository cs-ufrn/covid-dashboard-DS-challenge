
new Chart(document.getElementById("chart-1").getContext('2d')
, {
    type: 'bar',
    data: {
      labels: ["Lagoa Azul","Planalto","Pajuçara","Alecrim","Cidade Alta","Tirol","Parque das Dunas", "Petrópolis","Barro Vermelho","Santos Reis","Redinha","Potengi","Nossa Sra. da Apresentação"],
      datasets: [{ 
          data: [43.60,37.60,41.60,43.70,41.90,53.00,42.20,44.10,44.60,67.90,44.30,45.60,46.40],
          label: "Isolamento Social",
          backgroundColor:['lightblue','Chocolate','coral','crimson','blueviolet','DarkCyan','darkgreen','darksalmon','darkslateblue','darkseagreen','darkred','goldenrod','indianred'],
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
                display:false
              }
          }],
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
          }]
      },
    }
  });

  
new Chart(document.getElementById("chart-2").getContext('2d')
, {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [28,35,41,50,63,80,94,14,30,57],
          label: "Asia",
          borderColor: "#dd4ecd",
          pointBackgroundColor : "#dd4ecd",
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
              }
          }],
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
          }]
      },
    }
  });

  
new Chart(document.getElementById("chart-3").getContext('2d')
, {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [28,35,41,50,63,80,94,14,30,57],
          label: "Asia",
          borderColor: "#dd4ecd",
          pointBackgroundColor : "#dd4ecd",
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
              }
          }],
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
          }]
      },
    }
  });