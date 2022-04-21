import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";


const calculateScrollPercent = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
};

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat metus at nibh cursus, a pulvinar purus maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ut enim ex. Duis rutrum elit nunc, accumsan sollicitudin orci dapibus non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent porttitor arcu risus, non ultricies massa ultrices in. Donec tristique eros eu est rutrum tempus. Nulla facilisi. Morbi gravida diam a nisi ultrices, at venenatis velit sodales. Fusce vestibulum semper dolor, ut imperdiet felis fermentum vitae. Integer dapibus orci eget sem congue, eget aliquet quam mattis. Duis dictum mauris vitae lectus gravida, id egestas ligula sollicitudin.
<br/><br/>
Nullam at libero purus. Maecenas pulvinar maximus lorem eu ornare. Proin sit amet dui leo. Vivamus varius enim ipsum, ut tempor leo scelerisque id. Mauris mollis turpis id lectus ornare, vel tincidunt ligula tincidunt. Duis at aliquet neque, a aliquet nisi. Etiam sed orci tincidunt, rutrum lacus et, rutrum ante. Nulla placerat vitae elit in pharetra. Morbi condimentum hendrerit leo eu convallis. Praesent ornare tortor non euismod vestibulum. Vestibulum massa lorem, tempus sit amet commodo non, aliquam quis nisi.
<br/><br/>
Sed finibus felis sapien, vitae volutpat nisi mattis in. Aliquam egestas nunc enim, vel accumsan neque convallis non. Duis faucibus dolor non massa suscipit vehicula. In posuere, metus et feugiat semper, nulla sapien fringilla nibh, non scelerisque nibh tellus non erat. Sed arcu elit, sollicitudin eu consequat et, pharetra nec lorem. Pellentesque sagittis posuere odio porttitor porta. Morbi ac malesuada neque.
<br/><br/>
Donec et urna sed est pulvinar auctor in ut justo. Vestibulum ullamcorper ultricies aliquet. Curabitur congue, ligula tempor finibus pretium, magna dui rhoncus ex, nec commodo sapien massa convallis lectus. Quisque eleifend fringilla sapien et ultricies. Nullam et eros non ex pretium ullamcorper. Donec mattis pharetra volutpat. Pellentesque ac nunc consequat, sollicitudin nisi ut, pretium est. Sed sed luctus eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo ligula, finibus at mauris ut, rutrum imperdiet felis. Suspendisse tortor urna, sodales consectetur ligula a, egestas placerat odio.
<br/><br/>
Donec mollis leo nibh, non condimentum dui congue in. In semper ante et arcu pulvinar, quis feugiat odio dictum. Sed in libero sed velit cursus volutpat at ac lorem. Suspendisse rutrum condimentum odio at posuere. Morbi tincidunt lectus et condimentum faucibus. Cras commodo lacus sit amet rhoncus ornare. Praesent convallis tincidunt felis ac varius. Vestibulum et libero lectus. Integer quis faucibus augue. Proin tincidunt dolor eu quam ultrices, ut faucibus dui sollicitudin.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map( event => calculateScrollPercent(event) ),
    tap( console.log )
);
progress$.subscribe(prct => {
    progressBar.style.width = `${prct}%`;
});

