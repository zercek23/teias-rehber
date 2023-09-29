import { FormControl } from '@angular/forms';
import {
  BaskanlikBilgileriResponse,
  MudurlukBilgileriResponse,
} from './RehberServiceModels';
import {
  AboneTuruBilgileriResponse,
  AboneYeriBilgileriResponse,
  AdSoyadBilgileriResponse,
  AltUniteBilgileriResponse,
  AnaUniteBilgileriResponse,
  IlgiliYTMBilgileriResponse,
  TransformatorMerkeziBilgileriResponse,
} from './PaxRehberServiceModels';

export interface Kullanici {
  adi: string;
  baskanlikAdi: string;
  blok: string;
  dahili: number;
  fax: string;
  hariciTelefon1: string;
  kat: string;
  mudurlukadi: string;
  oda: string;
  personelKodu: number;
  soyadi: string;
  unvan: string;
}

export interface PaxKullanici {
  lkp_sorumlu_ytm_qw_: string;
  lkp_mulkiyet_qw_: string;
  abone_tip_id_qw_: string;
  pax_no: number;
  lkp_ana_unite_qw_: string;
  adi: string;
  soyadi: string;
  alt_unite_id_yeni_qw_: string;
}

export interface State {
  baskanlik?: string;
  mudurluk?: string;
  ad?: string;
  soyadi?: string;
  dahili?: string;
  kat?: string;
  oda?: string;
}

export interface TableFilterQuery {
  baskanlik: BaskanlikBilgileriResponse;
  mudurluk: MudurlukBilgileriResponse;
  ad: string;
  soyadi: string;
  dahili: number;
  kat: number;
  oda: number;
}

export interface TableFilterQueryParams {
  baskanlik: string;
  mudurluk: string;
  ad: string;
  soyadi: string;
  dahili: string;
  kat: string;
  oda: string;
}

export interface PaxTableFilterQuery {
  aboneTuru: AboneTuruBilgileriResponse;
  anaUnite: AnaUniteBilgileriResponse;
  altUnite: AltUniteBilgileriResponse;
  transformatorMerkezi: TransformatorMerkeziBilgileriResponse;
  adSoyad: AdSoyadBilgileriResponse;
  ilgiliYTM: IlgiliYTMBilgileriResponse;
  aboneYeri: AboneYeriBilgileriResponse;
  paxNumarasi: number;
}

export interface PaxTableFilterQueryParams {
  aboneTuru: string;
  anaUnite: string;
  altUnite: string;
  transformatorMerkezi: string;
  adSoyad: string;
  paxNumarasi: string;
}

export interface FilterFormElements {
  baskanlik: FormControl;
  mudurluk: FormControl;
  ad: FormControl;
  soyadi: FormControl;
  dahili: FormControl;
  kat: FormControl;
  oda: FormControl;
}

export interface SelectInput {
  value: string;
  text: string;
}

export interface PaginatorOptions {
  page: number;
  pageSize: number;
}
