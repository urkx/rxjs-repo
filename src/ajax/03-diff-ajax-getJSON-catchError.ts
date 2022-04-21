import { of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httxxxpbin.org/delay/1';

const errorHandler = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        users: []
    });
}

/*
const obs$ = ajax.getJSON(url).pipe(
    catchError(errorHandler)
);
const obs2$ = ajax(url).pipe(
    catchError(errorHandler)
);
*/

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(
    catchError(errorHandler)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
    error: err => console.warn('error:', err)
});
// obs2$.subscribe(data => console.log('ajax:', data));