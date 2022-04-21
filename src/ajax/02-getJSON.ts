import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': '123abc'
});

obs$.subscribe(data => console.log('data:', data));