//requiereds 
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('============'.green);
    console.log(`tabla de ${base}`.green);
    console.log('============'.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`The value ${base} introduced is not a number `);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tables/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

module.exports = {
    createFile,
    listarTabla
}