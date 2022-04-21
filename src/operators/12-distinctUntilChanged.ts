import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numbers$.pipe(
    distinctUntilChanged()
)
.subscribe(console.log);

interface Character {
    name: string;
}

const characters: Character[] = [
    {name: 'Megaman'},
    {name: 'Megaman'},
    {name: 'Zero'},
    {name: 'Willy'},
    {name: 'X'},
    {name: 'X'},
    {name: 'X'},
    {name: 'Megaman'},
    {name: 'Zero'},
];

from(characters).pipe(
    distinctUntilChanged((prev, act) => prev.name === act.name)
)
.subscribe(console.log);