import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const errorHandler = (resp: Response) => {
    if(!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp;
}

const ajaxErrorHandler = (err: AjaxError) => {
    console.warn('Error:', err.message);
    return of([]);
}

const promise = fetch(url);

/*
promise
    .then(errorHandler)
    .then(resp => resp.json())
    .then(data => console.log('data', data))
    .catch(err => console.warn('error in users', err));
*/

ajax(url).pipe(
    //map(resp => resp.response)
    pluck('response'),
    catchError(ajaxErrorHandler)
).subscribe(users => console.log('Users:', users));