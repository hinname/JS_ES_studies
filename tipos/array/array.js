const users = ['Heri', 'Nara', 'Josuke'];

const gender = {
    MAN : Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'herivelton',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Narayana',
        age: 15,
        gender: gender.WOMAN
    },
    {
        name: 'Josuke',
        age: 16,
        gender: gender.MAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

// Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name}, index: ${index}`, arr);
});

// Filtrar Array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course: ', personWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0); //função e valor inicial

console.log('\nSoma de idade das pessoas ', totalAge);

// Juntando operações
const totalEvenAages = persons
                            .filter(person => person.age % 2 ===0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log('\nSoma de idades das pessoas que pessoas que possuem idade par', totalEvenAges);