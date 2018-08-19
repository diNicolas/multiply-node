//Requierds
const fs = require('fs');

let showTable = (base, limit) => {
    for (var i = 0; i <= limit; i++) {
        console.log(` ${i} * ${base} = ${i*base}\n`);
    }
}

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} isn´t a number!`);
            return;
        }

        let data = '';

        for (var i = 0; i <= limit; i++) {
            data += `Multiplicar ${i} * ${base} = ${i*base}\n`;
        }

        fs.writeFile(`tables/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`table ${base}.txt`)

        });

    });
}


module.exports = {
    createFile,
    showTable
}