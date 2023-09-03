import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { count, map } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  transformedResult: number | undefined;
  intervalResults: any[] = [];
  subjectResults: any[] = [];

  //! Promise
  p = new Promise((resolve) => {
    resolve(100);
  });

  //! Observable
  o$ = new Observable<number>((obs) => {
    obs.next(1000);
    obs.next(2000);
    obs.next(3000);
    obs.complete();

    obs.error(new Error('Bad error right here!'));

    return () => {
      // cleanup
    };
  });

  transformedO$ = this.o$.pipe(map((num) => num + 1));

  interval(delay: number, count?: number) {
    let counter = 0;
    return new Observable((obs) => {
      if (counter === count) {
        obs.complete();
        return;
      }
      const i = setInterval(() => {
        obs.next(counter++);
      }, delay);

      return () => {
        clearInterval(i);
      };
    });
  }

  subscription = this.interval(1000, 8).subscribe({
    next: (result) => {
      this.intervalResults.push(result);
      console.log('Counter:', result);
    },
    error: (error) => {
      console.error('Error:', error);
    },
    complete: () => console.log('Observable completed'),
  });

  //! Subjects
  subj$$ = new Subject();

  //! Behavior subjects
  bSubj$$ = new BehaviorSubject(999);

  //! Replay subjects
  rSubj$$ = new ReplaySubject(10);

  //! Async subjects
  aSubj$$ = new AsyncSubject();

  constructor(private apiService: ApiServiceService) {
    //! Observable call
    this.transformedO$.subscribe({
      next: (result) => {
        this.transformedResult = result;
        console.log('Transformed:', result);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => console.log('Observable completed'),
    });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 3000);

    //! Subjects call
    this.subj$$.subscribe(console.log); // A
    this.subj$$.next(123);

    this.subj$$.subscribe(console.log); // B
    this.subj$$.subscribe(console.log); // C
    this.subj$$.next(400);

    setTimeout(() => {
      this.subj$$.subscribe(console.log); // D
      this.subj$$.next(100); // A, B, C, D
      setTimeout(() => {
        this.subj$$.subscribe(console.log); // E
        this.subj$$.next(1001); // A, B, C, D, E
      }, 2000);
    }, 2000);

    this.subj$$.subscribe((result) => {
      this.subjectResults.push(result);
    });

    //! Behavior subjects
    this.bSubj$$.subscribe(console.log);

    setTimeout(() => {
      this.bSubj$$.subscribe(console.log); // D
      this.bSubj$$.next(99); // A, B, C, D
      setTimeout(() => {
        this.bSubj$$.subscribe(console.log); // E
        this.bSubj$$.next(9); // A, B, C, D, E
      }, 2000);
    }, 2000);

    //! Replay subjects
    this.rSubj$$.next(1000);
    this.rSubj$$.subscribe((d) => console.log('Subscribe Replay 1: ', d));

    for (let i = 1; i <= 30; i++) {
      this.rSubj$$.next(i);
    }
    console.log('__________________________________');
    this.rSubj$$.subscribe((d) => console.log('Subscribe Replay 2: ', d));

    //! Async subjects
    this.aSubj$$.next(1);
    this.aSubj$$.next(2);
    this.aSubj$$.next(3);
    this.aSubj$$.subscribe((d) => console.log('Subscribe Async 1: ', d));
    this.aSubj$$.next(5);
    this.aSubj$$.subscribe((d) => console.log('Subscribe Async 2: ', d));
    this.aSubj$$.complete();
  }

  ngOnInit() {}

  reloadUsers(): void {
    this.apiService.loadUsersFromSubj();
  }
  users$ = this.apiService.userObs$;
}
