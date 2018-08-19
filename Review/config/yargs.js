const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Show in console the multply table', options)
    .command('crear', 'Generate a multiply table base on the base number', options)
    .help()
    .argv;


module.exports = {
    argv
}