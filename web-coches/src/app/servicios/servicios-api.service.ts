import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonInterface} from '../common/PokemonInterface';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {ValorantInterface} from '../common/ValorantInterface';
import {RyMInterface} from '../common/RickymortyInterface';
import {SWInterface} from '../common/StarWarsInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAPIService {

  // paso 1: inyectcion de dependencias de httpclient
  private URLPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  private URLvalorantAgent: string = 'https://valorant-api.com/v1/agents';
  private URLRyM: string = 'https://rickandmortyapi.com/api/character';
  private URLStarWars: string = 'https://swapi.info/api/films';


  constructor(private http: HttpClient) {
  }

  // paso 2: crear un metodo que se encargue de hacer la peticion a la api



  getPokemones(){
    return this.http.get<PokemonInterface>(this.URLPokemon)
  }

  getValorantAgent():Observable<ValorantInterface> {
    return this.http.get<ValorantInterface>(this.URLvalorantAgent)
  }


  getRyMCHAR(){
    return this.http.get<RyMInterface>(this.URLRyM)
  }

  getStarWars() {

    return this.http.get<SWInterface[]>(this.URLStarWars)

  }
}
