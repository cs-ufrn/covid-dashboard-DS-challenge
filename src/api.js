const api = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';

const loadBrazilData = async () =>{
    const response = await axios.get(api);
    if(response.status === 200){
        
        const casosConfirmados = document.getElementById('casos');
        const obitosConfirmados = document.getElementById('obitos');
        const curadosConfirmados = document.getElementById('recuperados');

        casosConfirmados.textContent = response.data.data.confirmed;
        obitosConfirmados.textContent = response.data.data.deaths;
        curadosConfirmados.textContent = response.data.data.recovered;

    }
}
const loadRNData = async () =>{
    const response = await axios.get(api+'/uf/rn');

    if(response.status === 200){
        const casosConfirmados = document.getElementById('casos-rn');
        const obitosConfirmados = document.getElementById('obitos-rn');
        const curadosConfirmados = document.getElementById('suspects-rn');

        casosConfirmados.textContent = response.data.cases;
        obitosConfirmados.textContent = response.data.deaths;
        curadosConfirmados.textContent = response.data.suspects;

    }
}


loadBrazilData();
loadRNData();