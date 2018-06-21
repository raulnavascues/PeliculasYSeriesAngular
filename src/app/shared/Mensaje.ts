export class Mensaje {
    private tipoMensaje: string;
    private textoMensaje: string;

    constructor(
                private _tipoMensaje: string, private _textoMensaje: string) {
        this.tipoMensaje = _tipoMensaje ;
        this.textoMensaje = _textoMensaje;
    }

}
