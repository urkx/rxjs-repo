import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: (v) => console.log('Next: ', v),
    error: (e) => console.warn('Error: ', e),
    complete: () => console.info('Completed')
};

const interval$ = new Observable<number>( subs => {
    const intervalId = setInterval( 
        () => subs.next(Math.random()), 
        1000 
    );

    return () => {
        clearInterval( intervalId );
        console.log('Interval removed');
    };
});


const subject$ = new Subject();
const subscription = interval$.subscribe( subject$ );

// const subs1 = interval$.subscribe( rnd => console.log('subs1:', rnd) );
// const subs2 = interval$.subscribe( rnd => console.log('subs2:', rnd) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);