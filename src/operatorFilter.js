import {of} from 'rxjs';
import {filter} from 'rxjs/operators';


const operatorFilter = () => {
    const dataSource = of(1,2,3,4,5)

    const subscription = dataSource
    .pipe(
        // only accepts values 4 or greater
        filter(value => value >= 4)
    )
    .subscribe(value => console.log(value))
}

export default operatorFilter;