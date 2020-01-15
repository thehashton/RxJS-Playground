import {fromEvent} from 'rxjs';

const button = document.getElementById("myButton");

// an observable from button clicks
const myObservable = fromEvent(button, "click");

document.addEventListener("click", () => {
    console.log(myObservable);
})