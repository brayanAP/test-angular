import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

type PickCharacter = Pick<Character, 'name' | 'power'>;

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<PickCharacter> = new EventEmitter();

  public character: PickCharacter = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    if (!this.character.name.trim()) {
      return;
    }

    if (this.character.power <= 0) {
      return;
    }

    this.onNewCharacter.emit({ ...this.character });

    this.character = {
      name: '',
      power: 0,
    };
  }
}
