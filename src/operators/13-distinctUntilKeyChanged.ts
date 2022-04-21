import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

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
    //distinctUntilChanged((prev, act) => prev.name === act.name)
    distinctUntilKeyChanged('name')
)
.subscribe(console.log);