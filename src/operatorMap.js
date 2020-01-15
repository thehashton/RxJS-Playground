import {of, observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const operatorMap = () => {
    const dataSource = of(1,2,3,4,5);

    // subscribe to source observable
    const subscription = dataSource.pipe(
        // +1 to each emitted value
        map(value => value +1)
    )
    .subscribe(value => console.log(value)
    )
}

export default operatorMap;