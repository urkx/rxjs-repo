import { interval, reduce, take, tap } from "rxjs";


const numbers = [1,2,3,4,5];

const totalReducer = ( acc: number, act: number ) => {
    return acc + act;
};

const total = numbers.reduce( totalReducer, 0 );
console.log('Total arr', total);

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});