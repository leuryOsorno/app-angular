import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  urlBase = 'https://rickandmortyapi.com/api';
  
  constructor(private _httpClient:HttpClient) { };

  getAllCharacters(){
    return this._httpClient.get(`${this.urlBase}/character`)
  }
}

