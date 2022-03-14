import { Component } from '@angular/core';
import { CounterStore } from './component-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [CounterStore],
})
export class AppComponent {

  constructor(private readonly counterStore: CounterStore){}

  readonly count$ = this.counterStore.count$

  onClickAddButton(): any{
    this.counterStore.add();
  }

}
