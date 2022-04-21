import { fromEvent, interval, of } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const chars$ = of('a', 'b', 'c');

chars$.pipe(
    mergeMap( (char) => interval(1000).pipe(
        map(i => char + i),
        take(3)
    ))
)
/*
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});
*/

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);
