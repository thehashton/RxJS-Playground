import {fromEvent} from 'rxjs';

document.addEventListener("click", (evt) => {
    console.log(evt.target);
})