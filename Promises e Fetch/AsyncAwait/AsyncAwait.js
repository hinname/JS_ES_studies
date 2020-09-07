const asyncTimer = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Data');
	}, 1000);
});

const simpleFunc = async () => { //já transorma em uma promise
	const data = await asyncTimer();
	return data;	
};

simpleFunc()
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err);
	});