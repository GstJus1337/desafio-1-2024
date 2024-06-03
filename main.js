console.log('JavaScript carregado com sucesso!');

//Validações
function validarFormLogin() {
    var email = document.getElementById('email').value;

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    return true;
}

function validarFormCadastro() {
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    var regexTelefone = /^\d{10,11}$/;
    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return false;
    }

    return true;
}

function validarFormContato() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === '' || sobrenome === '' || email === '' || telefone === '' || mensagem === '') {
        alert('Todos os campos são obrigatórios.');
        return false;
    }

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    var regexTelefone = /^\d{10,11}$/;
    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return false;
    }

    alert('Contato realizado com sucesso!');
    return true;
}

function getWeather() {
    var city = document.getElementById('city').value;
    if (city.toLowerCase() === 'ponta grossa') {
        var weatherDiv = document.getElementById('weather');
        var forecastHtml = `
            <span> Selecione o dia: </span>
            <select id="day-selector" onchange="updateWeatherData(this.value)">
                <option value="1">Dia 02/06/2024</option>
                <option value="2">Dia 03/06/2024</option>
                <option value="3">Dia 04/06/2024</option>
                <option value="4">Dia 05/06/2024</option>
                <option value="5">Dia 06/06/2024</option>
                <option value="6">Dia 07/06/2024</option>
                <option value="7">Dia 08/06/2024</option>
            </select>
            <div id="icons"></div>
            <div id="temperature"></div>
            <div id="rain"></div>
            <div id="moon"></div>
            <div id="soil-humidity"></div>
            <div id="air-humidity"></div>
            <div id="forecast"></div>
        `;
        weatherDiv.innerHTML = forecastHtml;
        weatherDiv.style.display = 'flex'; 
        updateWeatherData('1'); 
    } else {
        console.error('Cidade não suportada');
    }
}

function updateWeatherData(day) {
    var weatherData = {
        '1': {temperature: '25°C', rain: '0mm - 0%', moon: 'Minguante', soilHumidity: '46%', airHumidity: '47%', forecast: 'Sol com algumas nuvens. Não chove', icons: ['imagens/noite.png', 'imagens/diaEnsolarado.png', 'imagens/diaEnsolarado.png', 'imagens/noite.png']},
        '2': {temperature: '24°C', rain: '5mm - 8%', moon: 'Minguante', soilHumidity: '44%', airHumidity: '60%', forecast: 'Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.', icons: ['imagens/noite.png', 'imagens/diaNublado.png', 'imagens/diaChuvoso.png', 'imagens/noite.png']},
        '3': {temperature: '26°C', rain: '2mm - 6%', moon: 'Minguante', soilHumidity: '43%', airHumidity: '92%', forecast: 'Nublado com aberturas de sol à tarde. Pode garoar de manhã e à noite.', icons: ['imagens/noiteChuvosa.png', 'imagens/diaChuvoso.png', 'imagens/diaNublado.png', 'imagens/noiteChuvosa.png']},
        '4': {temperature: '24°C', rain: '0mm - 0%', moon: 'Minguante', soilHumidity: '42%', airHumidity: '98%', forecast: 'Dia de sol com algumas nuvens e névoa ao amanhecer. Noite com poucas nuvens.', icons: ['imagens/noite.png', 'imagens/diaNublado.png', 'imagens/diaEnsolarado.png', 'imagens/noite.png']},
        '5': {temperature: '23°C', rain: '0mm - 0%', moon: 'Nova', soilHumidity: '41%', airHumidity: '93%', forecast: 'Dia de sol, com nevoeiro ao amanhecer. As nuvens aumentam no decorrer da tarde.', icons: ['imagens/noite.png', 'imagens/diaEnsolarado.png', 'imagens/diaNublado.png', 'imagens/noite.png']},
        '6': {temperature: '22°C', rain: '0mm - 0%', moon: 'Nova', soilHumidity: '40%', airHumidity: '92%', forecast: 'Sol com algumas nuvens. Não chove.', icons: ['imagens/noite.png', 'imagens/diaNublado.png', 'imagens/diaNublado.png', 'imagens/noite.png']},
        '7': {temperature: '21°C', rain: '0mm - 0%', moon: 'Nova', soilHumidity: '39%', airHumidity: '95%', forecast: 'Sol com algumas nuvens. Não chove.', icons: ['imagens/noite.png', 'imagens/diaEnsolarado.png', 'imagens/diaEnsolarado.png', 'imagens/noite.png']},
    };
    document.getElementById('temperature').innerText = 'Temperatura: ' + weatherData[day].temperature;
    document.getElementById('rain').innerText = 'Chuva: ' + weatherData[day].rain;
    document.getElementById('moon').innerText = 'Lua: ' + weatherData[day].moon;
    document.getElementById('soil-humidity').innerText = 'Umidade do Solo: ' + weatherData[day].soilHumidity;
    document.getElementById('air-humidity').innerText = 'Umidade do Ar: ' + weatherData[day].airHumidity;
    document.getElementById('forecast').innerText = 'Previsão: ' + weatherData[day].forecast;

    var data = weatherData[day];
    var iconsDiv = document.getElementById('icons');
    iconsDiv.innerHTML = '';
    var moments = ['Madrugada', 'Manhã', 'Dia', 'Noite'];
    for (var i = 0; i < data.icons.length; i++) {
        var img = document.createElement('img');
        img.src = data.icons[i];
        img.classList.add('weather-icon');
        iconsDiv.appendChild(img);

        var label = document.createElement('p');
        label.innerText = moments[i];
        label.classList.add('icon-label');
        iconsDiv.appendChild(label);
    }
}

