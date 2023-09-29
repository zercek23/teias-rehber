import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AboneTuruBilgileriResponse,
  AboneYeriBilgileriResponse,
  AdSoyadBilgileriResponse,
  AltUniteBilgileriResponse,
  AnaUniteBilgileriResponse,
  IlgiliYTMBilgileriResponse,
  TransformatorMerkeziBilgileriResponse,
} from 'src/app/models/PaxRehberServiceModels';
import { PaxTableFilterQuery } from 'src/app/models/types';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-pax-table-filter',
  templateUrl: './pax-table-filter.component.html',
  styleUrls: ['./pax-table-filter.component.css'],
})
export class PaxTableFilterComponent {
  query: PaxTableFilterQuery;

  constructor(private paramService: ParametersService) {}

  @Output() buttonClicked = new EventEmitter<PaxTableFilterQuery>();
  @Output() temizleButtonClicked = new EventEmitter<PaxTableFilterQuery>();

  aboneTuru: AboneTuruBilgileriResponse[] = [];
  anaUnite: AnaUniteBilgileriResponse[] = [];
  altUnite: AltUniteBilgileriResponse[] = [];
  transformatorMerkezi: TransformatorMerkeziBilgileriResponse[] = [];
  adSoyad: AdSoyadBilgileriResponse[] = [];
  ilgiliYTM: IlgiliYTMBilgileriResponse[] = [];
  aboneYeri: AboneYeriBilgileriResponse[] = [];

  filterFormElements = {
    aboneTuru: new FormControl({
      aboneTuruAdi: '',
      aboneTuruKodu: 0,
    }),
    anaUnite: new FormControl({
      anaUniteAdi: '',
      anaUniteKodu: 0,
    }),
    altUnite: new FormControl({
      anaUniteAdi: '',
      anaUniteKodu: 0,
    }),
    transformatorMerkezi: new FormControl({
      anaUniteAdi: '',
      anaUniteKodu: 0,
    }),
    adSoyad: new FormControl({
      anaUniteAdi: '',
      anaUniteKodu: 0,
    }),
    ilgiliYTM: new FormControl({
      anaUniteAdi: '',
      anaUniteKodu: 0,
    }),
    paxNumarasi: new FormControl('', [Validators.max(100)]),
    aboneYeri: new FormControl({
      anaUniteAdi: '',
      anaUniteKodu: 0,
    }),
  };

  filterForm = new FormGroup(this.filterFormElements);

  ngOnInit() {
    this.paramService.getAboneYeriBilgileri().subscribe((res) => {
      this.aboneYeri = res;
    });

    this.paramService.getTransformatorMerkeziBilgileri().subscribe((tmRes) => {
      this.transformatorMerkezi = tmRes;
      console.log('tmRes:', tmRes);
    });

    this.paramService.getIlgiliYTMBilgileri().subscribe((ilgiliYTMRes) => {
      this.ilgiliYTM = ilgiliYTMRes;
      console.log('ilgiliYTMRes:', ilgiliYTMRes);
    });
  }

  onStateChanged(event: any) {
    console.log('event', event);
  }

  onAraButtonClick() {
    this.query = {
      aboneTuru: this.filterFormElements.aboneTuru.value ?? '',
      anaUnite: this.filterFormElements.anaUnite.value ?? '',
      altUnite: this.filterFormElements.altUnite.value ?? '',
      transformatorMerkezi:
        this.filterFormElements.transformatorMerkezi.value ?? '',
      adSoyad: this.filterFormElements.adSoyad.value ?? '',
      ilgiliYTM: this.filterFormElements.ilgiliYTM.value ?? '',
      aboneYeri: this.filterFormElements.aboneYeri.value ?? '',
    } as any;
    console.log('query', this.query);
    this.buttonClicked.emit(this.query);
  }

  onTemizleClick() {
    this.filterForm.reset();
    this.temizleButtonClicked.emit(this.query);
  }

  displayFnAboneYeri(aboneYeri: AboneYeriBilgileriResponse): string {
    return aboneYeri && aboneYeri.aboneYeriAdi ? aboneYeri.aboneYeriAdi : '';
  }

  displayFnTransformatorMerkezi(
    transformatorMerkezi: TransformatorMerkeziBilgileriResponse
  ): string {
    return transformatorMerkezi && transformatorMerkezi.transformatorMerkeziAdi
      ? transformatorMerkezi.transformatorMerkeziAdi
      : '';
  }

  displayFnIlgiliYTM(ilgiliYTM: IlgiliYTMBilgileriResponse): string {
    return ilgiliYTM && ilgiliYTM.ilgiliYTMAdi ? ilgiliYTM.ilgiliYTMAdi : '';
  }
}
