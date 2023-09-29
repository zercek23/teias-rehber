import { Kullanici } from './types';

export interface KullaniciResponse {
  rehberListesi: Kullanici[];
  totalCount: number;
}

export interface MudurlukBilgileriResponse {
  baskanlikKodu: number;
  mudurlukAdi: string;
  mudurlukKodu: number;
}

export interface BaskanlikBilgileriResponse {
  baskanlikAdi: string;
  baskanlikKodu: number;
}
