import { switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';


const operatorPipe = () => {
    const inputValue = document.querySelector('.inputValue');

    inputValue.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(searchTerm => typeaheadApi.search(searchTerm))
        )
        .subscribe(results => {
            console.log(results);
        });
}

export default operatorPipe;