import {Pipe, PipeTransform} from '@angular/core';
import {Article} from "./DB/Article";

@Pipe({
  name: 'Titlefilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Article[], searchText: string): Article[] {
    if(!items) return [];
    if(!searchText) {
      return items;
    }else{
      searchText = searchText.toLowerCase();
      return items.filter( article => {
        return JSON.stringify(article).toLowerCase().includes(searchText);
      });
    }
  }
}

