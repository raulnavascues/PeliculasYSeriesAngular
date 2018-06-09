import { Episodio } from './episodio';

export class Temporada {
    private codTemporada: string;
    private nomTemporada: string;
    private numTemporada: number;
    private episodios: Episodio;

    constructor(private _codTemporada: string, private _nomTemporada: string, private _numTem: number, private _episodios: Episodio) {
        this.codTemporada = _codTemporada;
        this.nomTemporada = _nomTemporada;
        this.numTemporada = _numTem;
        this.episodios = _episodios;
    }

}
