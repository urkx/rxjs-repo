import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(5000);
const click$    = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);
