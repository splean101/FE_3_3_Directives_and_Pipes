import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

   transform(users: any[], args?: any): any {
    if (!users) return users;
    return users.sort((a, b) => a.name.localeCompare(b.name));
  }

}
