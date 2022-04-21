import { from, reduce, scan, map } from "rxjs";

const numbers = [1,2,3,4,5];

const totalAcc = (acc, cur) => acc + cur;


// Reduce
from(numbers).pipe(
    reduce(totalAcc, 0)
)
.subscribe(console.log);

// Scan
from(numbers).pipe(
    scan(totalAcc, 0)
)
.subscribe(console.log);

// Redux
interface User {
    id?: string;
    auth?: boolean;
    token?: string;
    age?: number;
}

const users: User[] = [
    {id: 'fher', auth: false, token: null},
    {id: 'fher', auth: true, token: 'ABC'},
    {id: 'fher', auth: true, token: 'ABC123'},
];

const state$ = from(users).pipe(
    scan<User, User>((acc, cur) => {
        return {...acc, ...cur}
    }, {age: 33})
); 

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);