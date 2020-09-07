class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Herivelton';

    const myError = new CustomError({
        message: 'Custom message',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch (err) {
    console.log(err);
    console.log(err.data);
} finally {
    console.log('keep going...')
}