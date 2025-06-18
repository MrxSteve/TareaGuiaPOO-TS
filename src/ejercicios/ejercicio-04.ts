export class Cuenta {
    constructor(
        public nombre: string,
        private cantidad: number,
        public tipoCuenta: string,
        public numeroCuenta: string
    ) {}

    depositar(): void {
        if (this.cantidad < 5) {
        console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
        console.log(`Se ha depositado correctamente $${this.cantidad}`);
        }
    }

    retirar(valor: number): void {
        if (valor > 5) {
        if (this.cantidad >= valor) {
            this.cantidad -= valor;
            console.log(`Has retirado $${valor}. Saldo restante: $${this.cantidad}`);
        } else {
            console.log('No hay suficiente efectivo en la cuenta');
        }
        } else {
        console.log('El valor a retirar debe ser mayor a $5.00');
        }
    }

    mostrarDatos(): void {
        console.log('--- Ejercicio 04 ---');
        
        console.log('- Datos de la Cuenta -');
        console.log('Nombre:', this.nombre);
        console.log('Tipo de Cuenta:', this.tipoCuenta);
        console.log('Número de Cuenta:', this.numeroCuenta);
        console.log('Cantidad Actual:', this.cantidad);
    }
}
