export class Episodio {
    private Id: number;
    private Pelicula: string;
    private Episodio: string;
    private Temporada: number;
    private NumEpisodio: number;
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
