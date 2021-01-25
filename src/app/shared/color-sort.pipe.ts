import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorSort',
})
export class ColorSortPipe implements PipeTransform {
  transform(arr: any[]) {
    if (arr)
      arr = arr.sort((a, b) => {
        if (a.status == 'purchased' && b.status != 'purchased') return 1;
        if (a.status != 'purchased' && b.status == 'purchased') return -1;
        return 0;
      });

    return arr;
  }
}
