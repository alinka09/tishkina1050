import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(arr: any[], param: string) {
    if (param == '') {
      return arr;
    } else {
      arr.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        } else {
          return 1;
        }
        return 0;
      });
      return arr;
    }
  }
}
