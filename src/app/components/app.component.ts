import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: Observable<number>

  constructor(
    private counterService: CounterService
  ) {
    this.counter = counterService.getCounter()
  }
}
