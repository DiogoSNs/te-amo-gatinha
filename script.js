// Data em que vocês começaram a namorar (AAAA, MM - 1, DD)
const dataInicio = new Date(2023, 6, 22); // Exemplo: 10 de junho de 2022

function atualizarContador() {
    const agora = new Date();
    
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diferenca = agora - dataInicio;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();

