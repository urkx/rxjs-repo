import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

/*
ajax.put(url, {
    id: 1,
    name: 'name'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log);
*/

ajax({
    url: url,
    method: 'PUT',
    headers: {
        'mi-token': '123456'
    },
    body: {
        id: 1,
        name: 'name'
    }
}).subscribe(console.log);