import { count, Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (v) => console.log('Next: ', v),
    error: (e) => console.warn('Error: ', e),
    complete: () => console.info('Completed')
};

const intervalo$ = new Observable<number>( subs => {
    // Create counter
    let count = 0;

    const interval = setInterval( () => {
        count++;
        subs.next(count);
        console.log(count);
    }, 1000 );

    setTimeout( () => {
        subs.complete();
    }, 2500);

    // Callback called at unsubscribe()
    return () => {
        clearInterval(interval);
        console.log('Interval removed');
    };
    
});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

// Chained subscriptions
subs1.add( subs2 );
subs1.add( subs3 );

setTimeout( () => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Timeout completed');
}, 6000 );