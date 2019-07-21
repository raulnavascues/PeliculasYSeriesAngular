export class Episodio {
    public Id: number;
    public Pelicula: string;
    public Episodio: string;
    public Temporada: number;
    public NumEpisodio: number;
    public Formato: string;
    public Sipnosis: string;
    private RutaFichero: string;

    constructor( private _id: number, private _pelicula: string, private _episodio: string,
        private _temporada: number, private _numEpisodio: number, _RutaFichero: string, _Formato: string, _Sipnosis: string ) {
        this.Id = _id ;
        this.Pelicula = _pelicula;
        this.Episodio = _episodio;
        this.Temporada = _temporada;
        this.NumEpisodio = _numEpisodio;
        this.Formato = _Formato;
        this.Sipnosis = _Sipnosis;
        this.RutaFichero = _RutaFichero;
    }

}
