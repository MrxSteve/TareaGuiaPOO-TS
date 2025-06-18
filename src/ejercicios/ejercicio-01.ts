export class CabeceraPagina {
    constructor(
        private titulo: string,
        private color: string,
        private fuente: string,
        private alineacion: 'izquierda' | 'centro' | 'derecha' = 'centro'
    ) {}

    establecerPropiedades(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    establecerAlineacion(alineacion: 'izquierda' | 'centro' | 'derecha'): void {
        this.alineacion = alineacion;
    }
    imprimir(): void {
        console.log('--- Ejericio 01 ---');
        
        console.log('- Cabecera de Pagina -');
        console.log('Titulo:', this.titulo);
        console.log('Color:', this.color);
        console.log('Fuente:', this.fuente);
        console.log('Alineación:', this.alineacion);
    }
}

