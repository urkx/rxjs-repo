import { from, of } from "rxjs";


const observer = {
    next: val => console.log('Next', val),
    complete: () => console.log('Complete')
};

const generator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = generator();

from(iterable).subscribe(observer);

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

const source$ = from( fetch('https://api.github.com/users/urkx') );
/* 
source$.subscribe( async(resp) => {
    
    console.log(resp);

    const dataResp = await resp.json();
    console.log(dataResp);

}); 
*/

source$.subscribe(observer);