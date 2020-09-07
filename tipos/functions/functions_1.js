(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user ={
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getName()); //respeita o escopo do this na função normal
    console.log(user.getNameArrowFn()); //arrow function não respeita
})();


