import { delay, forkJoin, interval, of, take } from "rxjs";


const numbers$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const chars$ = of('a', 'b', 'c').pipe(delay(3500));

/*
forkJoin(
    numbers$,
    interval$,
    chars$
).subscribe(console.log);
*/

/*
forkJoin(
    numbers$,
    interval$,
    chars$
).subscribe(resp => {
    console.log('numbers:', resp[0]);
    console.log('interval:', resp[1]);
    console.log('chars:', resp[2]);
});
*/

/*
forkJoin({
    numbers$,
    interval$,
    chars$
}).subscribe(resp => {
    console.log(resp);
});
*/

forkJoin({
    num: numbers$,
    int: interval$,
    ch: chars$
}).subscribe(resp => {
    console.log(resp);
});