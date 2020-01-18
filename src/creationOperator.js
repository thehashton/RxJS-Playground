import {fromEvent, takeUntil, pipe} from 'rxjs';

export const creationOperator = () => {
    fromEvent(document, 'scroll')
        .pipe(
            // takeUntil(footerElement)
        )
        .subscribe (event => {
        // calculate and update DOM
        console.log(event)
    })
}

export default creationOperator;