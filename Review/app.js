const argv = require('./config/yargs').argv;
const { createFile, showTable } = require('./multply/multiply');

let argv2 = process.argv;
console.log('limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        showTable(argv.base, argv.limite)
        break;

    case 'crear':
        createFile(argv.base)
            .then(arch => console.log(`File created: ${arch}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido!');
}