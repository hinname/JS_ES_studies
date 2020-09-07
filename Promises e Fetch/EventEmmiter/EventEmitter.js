//EXCLUSIVO NODE.JS
//EventEmmiter

const EventEmitter = require('events')

const emitter = new EventEmitter();

emitter.on('User logged', data => {
	console.log(data)
});

emitter.emit('User logged', {user: 'Celso Henrique'});

//OR

const EventEmitter = require('events')

class Users extends EventEmitter {
	userLogged(data) {
		this.emit('User logged', data);
	}
}

const users = new Users();

users.on('User Logged', data => {
	console.log(data)
});

Users.userLogged({ user: 'Celso Henrique' })

//ONCE

const EventEmitter = require('events')

class Users extends EventEmitter {
	userLogged(data) {
		this.emit('User logged', data);
	}
}

const users = new Users();

users.once('User Logged', data => { //apenas o primeiro a logar
	console.log(data)
});

Users.userLogged({ user: 'Celso Henrique' })
Users.userLogged({user: 'herivelton'})