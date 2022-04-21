import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, pluck, mergeMap, switchMap } from "rxjs/operators";
import { GithubUser, GithubUsers } from "../interfaces/GithubUsers.interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';

    for(const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'See page';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
};

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    //pluck('target', 'value'),
    map<KeyboardEvent, string>(event => event.target['value']),
    mergeMap<string, Observable<GithubUsers>>(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${text}`
    )),
    //pluck('items')
    map<GithubUsers, GithubUser[]>(resp => resp.items)
);//.subscribe(showUsers);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map(ev => ev.target['value']),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log);