const randomColor = () => {
  const hex = (Math.random()*0xFFFFFF<<0).toString(16);
  return `#${hex}`;
}
new Chart(document.getElementById("chart-1").getContext('2d')
, {
    type: 'bar',
    data: {
      labels: ["Lagoa Azul","Planalto","Pajuçara","Alecrim","Cidade Alta","Tirol","Parque das Dunas", "Petrópolis","Barro Vermelho","Santos Reis","Redinha","Potengi","Nossa Sra. da Apresentação"],
      datasets: [{ 
          data: [43.60,37.60,41.60,43.70,41.90,53.00,42.20,44.10,44.60,67.90,44.30,45.60,46.40],
          label: "Isolamento Social",
          backgroundColor:["#F11E1A","#D6D3DD","#DEED51","#EE7E33","#D5C383","#229635","#e6e610","#bdc8ba","#7B68EE","#edeeb0","#e08f16","#0000FF","#d7b9f1"],
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

