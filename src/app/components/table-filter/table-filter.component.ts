import { Component, EventEmitter, Output } from '@angular/core';
import {
  BaskanlikBilgileriResponse,
  MudurlukBilgileriResponse,
} from 'src/app/models/RehberServiceModels';
import { State } from 'src/app/models/types';
import { SelectInput } from 'src/app/models/types';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css'],
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
  };

  constructor(private paramService: ParametersService) {}

  @Output() buttonClicked = new EventEmitter<State>();
  @Output() temizleButtonClicked = new EventEmitter<State>();

  baskanlik: BaskanlikBilgileriResponse[] = [];

  mudurluk: MudurlukBilgileriResponse[] = [];

  ngOnInit() {
    let baskanlikData: BaskanlikBilgileriResponse[] = [];
    this.paramService.getBaskanlikBilgileri().subscribe((res) => {
      this.baskanlik = res;
      console.log('baskanlik data:', baskanlikData);
    });
  }

  onStateChanged(event: number) {
    console.log('event', event);
    this.paramService.getMudurlukBilgileri(event).subscribe((mudurlukRes) => {
      console.log('mudurluk:', mudurlukRes);
      this.mudurluk = mudurlukRes
    });
  }

  onAraButtonClick() {
    console.log('state', this.state);
    this.buttonClicked.emit(this.state);
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
    };
    this.temizleButtonClicked.emit(this.state);
  }
}
