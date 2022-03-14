import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Counter } from './models/counter';
import { Observable } from 'rxjs';

@Injectable()
export class CounterStore extends ComponentStore<Counter> {

  constructor() {
    super({ count: 0 });
  }

  // read state
  readonly count$: Observable<number> = this.select((state) => state.count);

}
