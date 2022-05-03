import { Component } from '@angular/core';
import {
  Subject,
  debounceTime,
  map,
  Observable,
  switchMap,
  distinctUntilChanged,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-project-zero';
  searchString: string = '';
  searchSubject$ = new Subject<string>();
  results$ = new Observable<any>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe((x: any) => console.log(x));

    this.results$ = this.searchSubject$.pipe(
      debounceTime(200),
      distinctUntilChanged(), // skip value which is identical to previous value
      switchMap((searchString) => this.queryAPI(searchString))
    );
  }

  inputChanged($event: any) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  queryAPI(searchString: string) {
    console.log('queryAPI', searchString);
    return this.http
      .get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
      .pipe(map((result: any) => result['data']['children']));
  }
}
