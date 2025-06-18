export class Calculadora {
    constructor(
        private a: number,
        private b: number
    ) {}

    sumar(): number {
        return this.a + this.b;
    }

    restar(): number {
        return this.a - this.b;
    }

    multiplicar(): number {
        return this.a * this.b;
    }

    dividir(): number {
        if (this.b === 0) {
        throw new Error('No se puede dividir entre cero');
        }
        return this.a / this.b;
    }

    potencia(): number {
        return Math.pow(this.a, this.b);
    }

    factorial(n: number): number {
        if (n < 0) throw new Error('No se puede calcular el factorial de un número negativo');
        return n <= 1 ? 1 : n * this.factorial(n - 1);
    }
}

