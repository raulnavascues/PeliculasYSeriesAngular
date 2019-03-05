export class Episodio {
    private Id: number;
    public Pelicula: string;
    private Episodio: string;
    public Temporada: number;
    public NumEpisodio: number;
    private RutaFichero: string;

    constructor( private _id: number, private _pelicula: string, private _episodio: string,
        private _temporada: number, private _numEpisodio: number, _RutaFichero: string ) {
        this.Id = _id ;
        this.Pelicula = _pelicula;
        this.Episodio = _episodio;
        this.Temporada = _temporada;
        this.NumEpisodio = _numEpisodio;
        this.RutaFichero = _RutaFichero;
    }

}
