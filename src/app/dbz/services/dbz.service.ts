import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';
import { Character } from '../interfaces/character.interface';

export type PickCharacter = Pick<Character, 'name' | 'power'>;

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuidV4(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuidV4(),
      name: 'Vegeta',
      power: 7500,
    },
    {
      id: uuidV4(),
      name: 'Trunks',
      power: 5000,
    },
  ];

  public onNewCharacter(character: PickCharacter): void {
    this.characters.push({
      id: uuidV4(),
      ...character,
    });
  }

  public onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
