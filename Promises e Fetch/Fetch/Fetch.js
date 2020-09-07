const url = 'https://pokeapi.co/api/v2/pokemon/ninetales';

fetch('url', {
	method: 'post' //por default é um get	
})
	.then(responseStream => {
		if (responseStream.status === 200) {
			return reponseStream.json();
		} else {
			throw new Error('Request error')
        }
    })
	.then(data => {
		console.log(data)
	}).catch(err => {
		console.log('Erro:', err)
	})

//não funciona no Node??
//instalar node-fetch
