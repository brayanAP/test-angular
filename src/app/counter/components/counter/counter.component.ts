import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter = 0;

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    this.counter -= 1;
  }

  public reset() {
    this.counter = 0;
  }
}
