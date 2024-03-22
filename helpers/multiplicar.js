const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try{
        
        let salida = '';
        
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if(listar) {
            console.log(`====================`.magenta);
            console.log(`   Tabla del:`.magenta, base);
            console.log(`====================`.magenta);
            console.log(salida.blue);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`.magenta;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}