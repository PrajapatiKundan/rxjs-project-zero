import { Component } from '@angular/core';
import { interval, take, map, filter, of, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-project-zero';

  ngOnInit() {
    const numbers$ = interval(1000);
    // numbers$.subscribe((payLoad: any) => console.log(payLoad));

    // numbers$
    //   .pipe(
    //     take(5),
    //     filter((x: any) => x % 2 !== 0),
    //     map((x: any) => x * 100)
    //   )
    //   .subscribe((x: any) => console.log('first subscriber:', x));

    // mergeMap operator
    // const letters$ = of('a', 'b', 'c', 'd', 'e');
    // letters$
    //   .pipe(
    //     mergeMap((x: any) => {
    //       return numbers$.pipe(
    //         take(5),
    //         map((i: any) => i + x)
    //       );
    //     })
    //   )
    //   .subscribe((x: any) => console.log('second subscriber:', x));

    const letters$ = of('a', 'b', 'c', 'd', 'e');
    letters$
      .pipe(
        switchMap((x: any) => {
          return numbers$.pipe(
            take(5),
            map((i: any) => i + x)
          );
        })
      )
      .subscribe((x: any) => console.log('second subscriber:', x));
  }
}
