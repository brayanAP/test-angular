import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'superman';
  public age: number = 30;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  public changeName(): void {
    this.name = 'batman';
  }

  public changeAge(): void {
    this.age = 40;
  }

  public reset(): void {
    this.name = 'superman';
    this.age = 30;
  }
}
