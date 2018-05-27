export class Pelicula {
    private Id: number;
    public Clave: string;
    private Nombre: string;
    private Formato: string;
    private Tipo: string;
    private Productora: string;
    private Temporada: number;
    private sipnosis: string;
    private estado: string;
    private genero: string;
    public claveTipo: string;
    private claveEstado: string;

    constructor(
                private _id: number,        private _clave: string,     private _titulo: string,
                private _formato: string,   private _tipo: string,      private _productora: string,
                private _temporada: number, private _sipnosis: string,  private _estado: string,
                private _genero: string,    private _claveTipo: string, private _claveEstado: string
                ) {
        this.Id = _id ;
        this.Clave = _clave;
        this.Nombre = _titulo;
        this.Formato = _formato;
        this.Tipo = _tipo;
        this.Productora = _productora;
        this.Temporada = _temporada;
        this.sipnosis = _sipnosis;
        this.estado = _estado;
        this.genero = _genero;
        this.claveTipo = _claveTipo;
        this.claveEstado = _claveEstado;
    }

}
