import {fromEvent} from 'rxjs';

const button = document.getElementById("myButton");

// an observable from button clicks
const myObservable = fromEvent(button, "click");

//log the event on each click
const subscription = myObservable.subscribe({
    // on successful emission
    next: event => console.log(event),
    // on errors
    error: error => console.log(error),
    // on completion
    complete: () =>console.log('complete!')
});