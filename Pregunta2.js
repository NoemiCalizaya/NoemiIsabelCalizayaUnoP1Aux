'use strict';

// Parte 1
// 1. Calcule la propina, dependiendo del valor de la factura. Cree una variable
//llamada ‘tip' para esto. No está permitido usar una declaración if / else 
const factura1 = 120;
const factura2 = 200;
const factura3 = 275;

let tip = factura1>=50 && factura1<=300 ? factura1*0.15: factura1*0.20;

//--------------------------------------------------------------------------------
// 2. Imprima una cadena en la consola que contenga el valor de la factura, la
//propina y el valor final. (factura + propina). Ejemplo: "La factura fue 275, la
//propina fue 41,25 y el valor total 316.25 "

//console.log(`La factura fue ${factura1}, la propina fue ${tip} y el valor total ${factura1 + tip}`);
//--------------------------------------------------------------------------------------
// 3. Escriba una arrow function 'calcTip' que tome un valor de factura como entrada
//y devuelva la propina correspondiente, calculada según las reglas anteriores.

/* const calcTip = (factura) => factura>=50 && factura<=300 ? factura*0.15: factura*0.20;

console.log(calcTip(factura1)); */
//------------------------------------------------------------------------------------
// Parte 2
// 4. Cree un array de facturas ‘bills’ que contenga los datos de prueba.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//----------------------------------------------------------------
// 5. Cree arrays vacíos para las propinas y los totales (‘tips' y 'totals')

const tips =[];
const totals = [];
//-------------------------------------------------------------------------
// 6. Utilice la función 'calcTip' que escribimos antes para calcular propinas y valores
//totales (factura + propina) para cada valor de factura en la matriz de facturas y
//almacénelos en los arrays correspondientes.

const calcTip = (array) => {
    let propina = 0;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        propina = array[i]>=50 && array[i]<=300 ? array[i]*0.15: array[i]*0.20;
        tips[i] = propina;
    }
    for (let i = 0; i < array.length; i++) {
        total = array[i] + tips[i];
        totals[i] = total;
    }
    return `Propinas: ${tips} y valores totales ${totals}`;
};

console.log(calcTip(bills));
//-----------------------------------------------------------------------------------------
// 7. Cree una función para calcular el promedio de cualquier array que se le pase
//como argumento y úselo para calcular el promedio de los tres arrays que tiene
//(‘bills’, ‘tips’ y ‘totals’)

const promArray = (array) => {
    let suma = 0;
    let promedioArray = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    promedioArray = suma/array.length;
    return promedioArray;
}

const prombills = promArray(bills);
const promtips = promArray(tips);
const promtotals = promArray(totals);

console.log(`Promedio de facturas: ${prombills}`);
console.log(`Promedio de propinas: ${promtips}`);
console.log(`Promedio de valores totales, facturas + propinas: ${promtotals}`);
