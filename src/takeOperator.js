import { of } from 'rxjs';
import { take } from 'rxjs/operators';

export const takeOperator = () => {
    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source.pipe(take(3)).subscribe(value => {
        console.log(value)
    });
}

export default takeOperator;