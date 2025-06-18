import { CabeceraPagina } from "./ejercicios/ejercicio-01";
import { Calculadora } from "./ejercicios/ejercicio-02";
import { Cancion } from "./ejercicios/ejercicio-03";
import { Cuenta } from "./ejercicios/ejercicio-04";
import { Empleado } from "./ejercicios/ejercicio-05";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Guía de ejercicios de TypeScript</h1>
  <h2> Abrir consola para ver resultados </h2>
`

// Ejercicio 01
const cabecera = new CabeceraPagina('Bienvenido', 'azul', 'Arial');
cabecera.establecerAlineacion('derecha');
cabecera.imprimir();

// Ejercicio 02
const calc = new Calculadora(5, 3);

console.log('--- Ejercicio 02 ---');

console.log('Suma:', calc.sumar());
console.log('Resta:', calc.restar());
console.log('Multiplicacion:', calc.multiplicar());
console.log('Division:', calc.dividir());
console.log('Potencia:', calc.potencia());
console.log('Factorial de 5:', calc.factorial(5));
console.log('Factorial de 3:', calc.factorial(3));

// Ejercicio 03
const cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor = 'Queen'; 
cancion.mostrarDatos();
console.log('Autor leído por getter:', cancion.getAutor);

// Ejercicio 04
const cuenta = new Cuenta('Steve Dev', 10, 'Ahorro', '1234567890');

cuenta.depositar(); 
cuenta.retirar(6);  
cuenta.retirar(50);
cuenta.mostrarDatos();

// Ejercicio 05
const empleado = new Empleado('Steve', 'Dev', 'San Salvador', '7890-1234', 25);
empleado.cargarSueldo(950.75);
empleado.mostrarDatos();