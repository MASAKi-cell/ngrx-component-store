import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Counter } from './models/counter';

@Injectable()
export class CounterStore extends ComponentStore<Counter> {
    
}