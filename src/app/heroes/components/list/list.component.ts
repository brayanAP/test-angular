import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = ['superman', 'batman', 'spiderman', 'hulk', 'thor'];
  public deletedHero?: string;

  public removeHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
