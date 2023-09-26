import { Component, EventEmitter, Output } from '@angular/core';

export interface State {
  baskanlik?: string;
  mudurluk?: string;
  ad?: string;
  soyadi?: string;
  dahili?: string;
  kat?: string;
  oda?: string;
}

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
  state: State = {
    baskanlik: '',
    mudurluk: '',
    ad: '',
    soyadi: '',
    dahili: '',
    kat: '',
    oda: '',
  }

  @Output() buttonClicked = new EventEmitter<State>();
  @Output() temizleButtonClicked = new EventEmitter<State>();

  onStateChanged(event: string) {
    console.log('event', event)
  }

  onAraButtonClick() {
    console.log('state', this.state)
    this.buttonClicked.emit(this.state)
  }

  onTemizleClick() {
    this.state = {
      baskanlik: '',
      mudurluk: '',
      ad: '',
      soyadi: '',
      dahili: '',
      kat: '',
      oda: '',
    }
    this.temizleButtonClicked.emit(this.state)
  }

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
