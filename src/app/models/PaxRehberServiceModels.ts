import { PaxKullanici } from './types';

export interface PaxKullaniciResponse {
  success?: boolean;
  error?: boolean;
  body: PaxKullanici[];
  totalCount: number;
}

export interface AboneTuruBilgileriResponse {
  abonelikKodu: number;
  abonelikAdi: string;
}

export interface AnaUniteBilgileriResponse {
  anaUniteAdi: string;
  anaUniteKodu: number;
}
export interface AltUniteBilgileriResponse {
  altUniteKodu: number;
  altUniteAdi: string;
}
export interface TransformatorMerkeziBilgileriResponse {
  transformatorMerkeziKodu: number;
  transformatorMerkeziAdi: string;
}
export interface AdSoyadBilgileriResponse {
  adSoyad: string;
  adSoyadKodu: number;
}
export interface IlgiliYTMBilgileriResponse {
  ilgiliYTMAdi: string;
  ilgiliYTMKodu: number;
}

export interface AboneYeriBilgileriResponse {
  aboneYeriAdi: string;
  aboneYeriKodu: number;
}
