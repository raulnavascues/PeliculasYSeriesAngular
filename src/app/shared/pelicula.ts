import { Productora } from './productora';
export class Pelicula {
    public Id: Number;
    public Clave: String;
    public Nombre: String;
    public Formato: string;
    public Tipo: string;
    public Productora: String;
    public Temporada: number;
    public Sipnosis: string;
    public Estado: string;
    public Genero: string;
    public claveTipo: string;
    private claveEstado: string;

    constructor(
                private _id: number,        private _clave: string,     private _titulo: string,
                private _formato: string,   private _tipo: string,      private _productora: string,
                private _temporada: number, private _sipnosis: string,  private _estado: string,
                private _genero: string,    private _claveTipo: string, private _claveEstado: string
                ) {
        this.Id = _id ;
        this.setClave = _clave;
        this.setNombre = _titulo;
        this.Formato = _formato;
        this.Tipo = _tipo;
        this.Productora = _productora;
        this.Temporada = _temporada;
        this.Sipnosis = _sipnosis;
        this.Estado = _estado;
        this.Genero = _genero;
        this.claveTipo = _claveTipo;
        this.claveEstado = _claveEstado;
    }

    public get getClave(): String {
        return this.Clave;
    }

    set setClave(clav: string) {
        console.error (clav);
       this.Clave = clav;
    }

    public get getNombre(): String {
        return this.Nombre;
    }

    set setNombre(nom: string) {
       this.Nombre = nom;
    }

    public get getProductora(): String {
        return this.Productora;
    }

    set productora(product: string) {
        /*if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }*/
    }
}
