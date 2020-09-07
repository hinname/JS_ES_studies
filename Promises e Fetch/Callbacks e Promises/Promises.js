//PROMISES

const doSomethingPromise = new Promise((resolve, reject) => {
	setTimeout(function() {
		//did something
		resolve('First data')
	}, 1000)
})

const doOtherthingPromise = new Promise((resolve, reject) => {
	setTimeout(function() {
		//did something
		resolve('Second data')
	}, 1000)
})


doSomethingPromise
	.then(data => { console.log(data); return doOtherthingPromise})
    .then(data2 => console.log(data2));
    
//status de uma promise:
//pending
//Fulfilled
//Rejected

//promises em paralelo

Promise.all([doSomethingPromise, doOtherthingPromise]).then((data) => {
	console.log(data)
});

Promise.race([doSomethingPromise, doOtherthingPromise]).then((data) => {
	console.log(data)
}); //o que resolver primeiro é oq vai retorna