const argv = require('./configs/yargs').argv;
var colors = require('colors');

const { createFile, listarTabla } = require('./multiply/multiply'); //before a const or let {} is destructuration
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`File crated: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}