const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol é igual a sybom2: ', symbol1 === symbol2);

// previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1] : 'Herivelton',
    [nameSymbol2] : 'Outro nome',
    lastName: 'Borges da Costa'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('\nPropriedades do objeto user: ', Object.keys(user));
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP      : Symbol('UP'),
    DOWN    : Symbol('DOWN'),
    LEFT    : Symbol('LEFT'),
    RIGHT   : Symbol('RIGHT')
};