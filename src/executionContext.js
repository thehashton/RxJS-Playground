import {fromEvent} from 'rxjs';

export const executionContext = () => {
    const button = document.getElementById("myButton");
    // an observable from button clicks
    const myObservable = fromEvent(button, "click");

    // addEventListener called
    const subscription = myObservable.subscribe(event => console.log(event));

    // addEventListener called again!
    const secondSubscription = myObservable.subscribe(event => console.log(event));

    // clean up with unsubscribe
    subscription.unsubscribe();
    secondSubscription.unsubscribe();
}

export default executionContext;