import { Pipe, PipeTransform } from '@angular/core';
import {ListItem} from '../../../services/list-data.service';

@Pipe({
  name: 'bought'
})
export class BoughtPipe implements PipeTransform {

  transform(value: ListItem[], check: boolean): ListItem[] {
      return value.filter( e => e.bought === check );
  }

}
