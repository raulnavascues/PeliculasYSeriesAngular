import { Episodio } from './episodio';

export class Temporada {
    private nomTemporada: string;
    private episodios: Episodio;

    constructor(private _nomTemporada: string, private _episodios: Episodio) {
        this.nomTemporada = _nomTemporada;
        this.episodios = _episodios;
    }

}
