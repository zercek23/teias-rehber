export interface Kullanici {
  adi: string,
  baskanlikAdi: string,
  blok: string,
  dahili: number,
  fax: string,
  hariciTelefon1: string,
  kat: string,
  mudurlukadi: string,
  oda: string,
  personelKodu: number,
  soyadi: string,
  unvan: string
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

export interface SelectInput {
  value: string;
  text: string;
}

export interface PaginatorOptions {
  page: number;
  pageSize: number;
}