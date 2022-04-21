import { combineLatest, fromEvent, map } from "rxjs";

/*
const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest(
    keyup$.pipe(map(ev => ev.type)), 
    click$.pipe(map(ev => ev.type))
).subscribe(console.log);
*/

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***************';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputStream = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map<KeyboardEvent, string>(ev => ev.target['value'])
    );

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);