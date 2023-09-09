import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { CharacterService } from './service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private _charaterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this._charaterService.getAllCharacters()
      .subscribe((response: any) => {
        if (response?.results?.length) {
          const { info, results } = response;
          this.characters = [...this.characters, ...results];
        } else {
          this.characters = [];
        }
      });
  }
}
