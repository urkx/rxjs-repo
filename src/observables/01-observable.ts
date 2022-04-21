import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next: (v) => console.log('Next: ', v),
    error: (e) => console.warn('Error: ', e),
    complete: () => console.info('Completed')
};

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    // Forced error
    // const a = undefined;
    // a.nombre = 'Urko';

    subs.complete();
} );


obs$.subscribe( observer );