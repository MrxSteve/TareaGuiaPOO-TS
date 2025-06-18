export abstract class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public edad: number
    ) {}

    esMayorDeEdad(): void {
        if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad`);
        } else {
        console.log(`${this.nombre} es menor de edad`);
        }
    }

    abstract mostrarDatos(): void;
}

export class Empleado extends Persona {
    private sueldo: number = 0;

    cargarSueldo(sueldo: number): void {
        if (sueldo < 0) {
        throw new Error('El sueldo no puede ser negativo');
        }
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo del empleado: $${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log('--- Ejercicio 05 ---');
        console.log('- Datos del Empleado -');
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('Dirección:', this.direccion);
        console.log('Teléfono:', this.telefono);
        console.log('Edad:', this.edad);
        this.esMayorDeEdad();
        this.imprimirSueldo();
    }
}
