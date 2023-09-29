import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BaskanlikBilgileriResponse,
  MudurlukBilgileriResponse,
} from 'src/app/models/RehberServiceModels';
import {
  FilterFormElements,
  State,
  TableFilterQuery,
} from 'src/app/models/types';
import { SelectInput } from 'src/app/models/types';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css'],
})
export class TableFilterComponent {
  query: TableFilterQuery;

  constructor(private paramService: ParametersService) {}

  @Output() buttonClicked = new EventEmitter<TableFilterQuery>();
  @Output() temizleButtonClicked = new EventEmitter<TableFilterQuery>();

  baskanlik: BaskanlikBilgileriResponse[] = [];

  mudurluk: MudurlukBilgileriResponse[] = [];

  filterFormElements: FilterFormElements = {
    baskanlik: new FormControl({
      baskanlikAdi: '',
      baskanlikKodu: 0,
    }),
    mudurluk: new FormControl({
      mudurlukAdi: '',
      mudurlukKodu: 0,
    }),
    ad: new FormControl('', [Validators.minLength(2), Validators.maxLength(5)]),
    soyadi: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(3),
    ]),
    dahili: new FormControl('', [Validators.max(100)]),
    kat: new FormControl(''),
    oda: new FormControl(''),
  };

  filterForm = new FormGroup(this.filterFormElements);

  ngOnInit() {
    let baskanlikData: BaskanlikBilgileriResponse[] = [];
    this.paramService.getBaskanlikBilgileri().subscribe((res) => {
      this.baskanlik = res;
      console.log('baskanlik data:', baskanlikData);
    });
  }

  adChange() {
    console.log('ad', this.filterForm.get('ad')?.errors);
  }

  onStateChanged(event: any) {
    console.log('event', event);
    this.paramService
      .getMudurlukBilgileri(event.option.value.baskanlikKodu)
      .subscribe((mudurlukRes) => {
        console.log('mudurluk:', mudurlukRes);
        this.mudurluk = mudurlukRes;
      });
  }

  onAraButtonClick() {
    this.query = {
      baskanlik: this.filterFormElements.baskanlik.value ?? '',
      mudurluk: this.filterFormElements.mudurluk.value ?? '',
      ad: this.filterFormElements.ad.value ?? '',
      soyadi: this.filterFormElements.soyadi.value ?? '',
      dahili: this.filterFormElements.dahili.value ?? '',
      kat: this.filterFormElements.kat.value ?? '',
      oda: this.filterFormElements.oda.value ?? '',
    };
    console.log('query', this.query);
    this.buttonClicked.emit(this.query);
  }

  onTemizleClick() {
    this.filterForm.reset();
    this.temizleButtonClicked.emit(this.query);
  }

  displayFnBaskanlik(baskan: BaskanlikBilgileriResponse): string {
    return baskan && baskan.baskanlikAdi ? baskan.baskanlikAdi : '';
  }

  displayFnMudurluk(mudur: MudurlukBilgileriResponse): string {
    return mudur && mudur.mudurlukAdi ? mudur.mudurlukAdi : '';
  }
}
