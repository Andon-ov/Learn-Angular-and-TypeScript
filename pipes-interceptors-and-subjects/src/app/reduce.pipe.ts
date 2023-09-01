import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false => not pure function will re-render
  // pure: true => pure function will be memoized // DEFAULT
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: T
  ): unknown {
    // const sum = (acc, curr)=> acc + curr;
    // [1,2,3,4].reduce(sum,0)
    return array.reduce(reduceFn, initialValue);
  }
}
