'use strict';

// 1. Calcule el puntaje promedio de cada equipo, 
//utilizando los datos de prueba proporcionados al final del enunciado.
const Ricks = [97, 112, 101];
const Mortys = [109, 95, 123];

const datos1ofRicks = [96, 108, 89];
const datos1ofMortys = [88, 91, 110];

const datos2ofRicks = [97, 112, 101];
const datos2ofMortys = [109, 95, 123];

/* const promRicks = (Ricks[0] + Ricks[1] + Ricks[2])/Ricks.length;
const promMortys = (Mortys[0] + Mortys[1] + Mortys[2])/Mortys.length; */
//--------------------------------------------------------------------------------
// 2. Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.

/* let ganador = 0;
if (promRicks === promMortys) {
    ganador= 0;
    console.log("Empate, el ganador de la competencia es ninguno de los equipos.");
} else if (promRicks > promMortys) {
    ganador= promRicks;
    console.log(`El ganador de la competencia son los Ricks
con un promedio de: ${ganador}.`);
} else {
    ganador= promMortys;
    console.log(`El ganador de la competencia son los Mortys
con un promedio de: ${ganador}.`);
} */
//--------------------------------------------------------------------------------------
// 3. Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
//solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
//una puntuación de al menos 100 puntos.

let ganador= 0;
const puntuacionmin = 100;
/*if (promRicks > promMortys && promRicks >= puntuacionmin) {
    ganador= promRicks;
    console.log(`El ganador de la competencia son los Ricks
con un promedio de: ${ganador}.`);
} else if (promMortys > promRicks && promMortys >= puntuacionmin) {
            ganador= promMortys;
            console.log(`El ganador de la competencia son los Mortys
con un promedio de: ${ganador}.`);
} else {
    ganador= 0;
    console.log("El ganador de la competencia es ninguno de los equipos, ya que no alcanzan la puntuacion minima.");
} */
//----------------------------------------------------------------------------------
// 4. ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.

/* if (promRicks == promMortys && promRicks >= puntuacionmin && promMortys >= puntuacionmin) {
    ganador= 0;
    console.log("Empate, ningun equipo es el ganador."); 
} else if (promRicks > promMortys && promRicks >= puntuacionmin) {
            ganador= promRicks;
            console.log(`El ganador de la competencia son los Ricks
con un promedio de: ${ganador}.`);
        } else if (promMortys > promRicks && promMortys >= puntuacionmin){
                    ganador= promMortys;
                    console.log(`El ganador de la competencia son los Mortys
con un promedio de: ${ganador}.`);
                } else
                    console.log("Ningun equipo es el ganador, ya que no alcanzan la puntuacion minima."); */

//-------------------------------------------------------------------------------------------
// 5. Cree una arrow function 'calcAverage' 
//para calcular el promedio de 3 puntuaciones

/* const calcAverage = (array) => {
    let promR = (array[0] + array[1] + array[2])/array.length;
    return promR;
};

console.log(calcAverage(Ricks)); */
//-----------------------------------------------------------------------------
// 6. Usa la función para calcular el promedio de ambos equipos.

const calcAverage = (array) => (array[0] + array[1] + array[2])/array.length;

const promRicks = calcAverage(Ricks);
const promMortys = calcAverage(Mortys);

const d1Ricks = calcAverage(datos1ofRicks);
const d1Mortys = calcAverage(datos1ofMortys);

const d2Ricks = calcAverage(datos2ofRicks);
const d2Mortys = calcAverage(datos2ofMortys);

//console.log(promRicks);
//----------------------------------------------------------------------------------
// 7. Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
//como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
//con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
//(30 contra 13)"

const checkWinner = (avgRIcks, avgMortys) => {
    if (avgRIcks == avgMortys && avgRIcks >= puntuacionmin && avgMortys >= puntuacionmin) {
        return "Empate, ningun equipo es el ganador."; 
    } else if (avgRIcks > avgMortys && avgRIcks >= puntuacionmin) {
                return `Los Ricks ganan (${avgRIcks} contra ${avgMortys}).`;
            } else if (avgMortys > avgRIcks && avgMortys >= puntuacionmin){
                        return `Los Mortys ganan (${avgMortys} contra ${avgRIcks}).`;
            } else
                    return "Ningun equipo es el ganador, ya que no alcanzan la puntuacion minima.";
}

//const datos = checkWinner(promRicks, promMortys);
//console.log(datos);
//--------------------------------------------------------------------------------------------
// 8. Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y Datos 2

const datos1 = checkWinner(d1Ricks, d1Mortys);
const datos2 = checkWinner(d2Ricks, d2Mortys);

console.log(datos1);
console.log(datos2);
