export class Cancion {
    constructor(
        public titulo: string,
        public genero: string,
        private autor: string = '',
    ) {}
    
    get getAutor(): string {
        return this.autor;
    }

    set setAutor(valor: string) {
        this.autor = valor;
    }

    mostrarDatos(): void {
        console.log('--- Ejercicio 03 ---');
        console.log('- Datos de la Cancion -');
        console.log('Titulo:', this.titulo);
        console.log('Genero:', this.genero);
        console.log('Autor:', this.autor);
        console.log('--------------------------');
    }
}
