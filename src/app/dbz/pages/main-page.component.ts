import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService, PickCharacter } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onNewCharacter(character: PickCharacter): void {
    this.dbzService.onNewCharacter(character);
  }

  public onDeleteCharacterById(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }
}
