import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../stores/app.store';

@Injectable()
export class CounterService {

  constructor(
    private store: Store<AppStore>
  ) { }

  getCounter(): Observable<number> {
    return this.store.select('counter')
  }

  increment(){
    this.store.dispatch({type: 'INCREMENT'})
  }

  decrement(){
    this.store.dispatch({type: 'DECREMENT'})
  }
}
