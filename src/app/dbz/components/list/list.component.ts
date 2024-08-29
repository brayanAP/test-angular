import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  public onDeleteCharacter(id: string): void {
    this.onDeleteCharacterById.emit(id);
  }
}
