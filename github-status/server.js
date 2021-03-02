const express = require('express');
const request = require('request');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;

//Configura o handlebars como o view engine do express
app.set('view engine', 'handlebars');

//Configura o handlebars e coloca o diretório principal em views/layouts
app.engine('handlebars', handlebars({
	layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'))

app.get('/', (express_req, express_res) => {

	//Cria uma variável que mais tarde virá a armazenar o JSON que a API irá retornar

	request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
    //Cria um array constante com todas informações sobre cada setor
    const statuses = body.components;

    //Cria um array vazio que será usado mais tarde
    const arrayStatuses = [];

    //Itera sobre todos os setores
    for(let i = 0; i < statuses.length; i++){
    	//Disponibiliza o nome e status filtrando um conteúdo sem necessidade
    	if(!statuses[i].name.includes('www.githubstatus.com')){
    	
    	//Armazena os valores nome e status do setor sendo iterado
    	let name = statuses[i].name
    	let status = statuses[i].status

    	//Coloca um objeto no array contendo as chaves nome e valor
    	//E armazenando o nome e valor atual
    	arrayStatuses.push({name: name, status: status});

    	}
    }

    express_res.render('main', {layout : 'index', statuses: arrayStatuses})
	})
	
})

app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`)
})

