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

loadBrazilData();