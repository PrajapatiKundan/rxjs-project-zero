import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-project-zero';
  observable$: any;

  ngOnInit() {
    this.observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.observable$.subscribe({
      next: (value: any) => console.log(value),
      error: () => console.log('Error'),
      complete: () => console.log('This is the end'),
    });
  }

  ngOnDestroy() {
    this.observable$.unsubscribe();
  }
}
