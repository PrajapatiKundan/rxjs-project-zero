import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-project-zero';
  mySubject$: any;

  ngOnInit() {
    this.mySubject$ = new Subject();

    // First subscriber
    this.mySubject$.subscribe((x: any) => console.log('First subscriber: ', x));
    this.mySubject$.nex(1);
    this.mySubject$.nex(2);
    // this.mySubject$.unsubscribe();

    // Second subscriber
    this.mySubject$.subscribe((x: any) =>
      console.log('Second subscriber: ', x)
    );
    this.mySubject$.next(3);
  }

  ngOnDestroy() {
    this.mySubject$.unsubscribe();
  }
}
