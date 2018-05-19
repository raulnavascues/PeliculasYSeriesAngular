export class Episodio{
    private Id: number;
	private Pelicula: string;
	private Episodio: string;
	private Temporada: number;
	private NumEpisodio: number;
    
    constructor( private _id: number, private _pelicula: string, private _episodio: string, 
                private _temporada: number, private _numEpisodio: number ){
        this.Id = _id ;
        this.Pelicula = _pelicula;
        this.Episodio = _episodio;
        this.Temporada = _temporada;
        this.NumEpisodio = _numEpisodio;
    }
  
}