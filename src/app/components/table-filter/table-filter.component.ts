import { Component } from '@angular/core';

interface SelectInput {
  value: string;
  text: string;
}

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {
  baskanlik: SelectInput[] = [
    { value: 'a', text: 'A Başkanlık' },
    { value: 'b', text: 'B Başkanlık' },
    { value: 'c', text: 'C Başkanlık' }
  ]

  mudurluk: SelectInput[] = [
    { value: 'a', text: 'A Müdürlük' },
    { value: 'b', text: 'B Müdürlük' },
    { value: 'c', text: 'C Müdürlük' }
  ];
}
