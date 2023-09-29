import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MudurlukBilgileriResponse,
  BaskanlikBilgileriResponse,
} from '../models/RehberServiceModels';
import {
  AboneTuruBilgileriResponse,
  AboneYeriBilgileriResponse,
  AdSoyadBilgileriResponse,
  AltUniteBilgileriResponse,
  AnaUniteBilgileriResponse,
  IlgiliYTMBilgileriResponse,
  TransformatorMerkeziBilgileriResponse,
} from '../models/PaxRehberServiceModels';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  private mudurlukApiUrl: string =
    'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getMudurlukBilgileri';
  private baskanlikApiUrl: string =
    'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getBaskanlikBilgileri';
  private transformatorMerkeziApiUrl: string =
    'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getTrafoMerkeziAd';
  private ilgiliYTMBilgileriApiUrl: string =
    'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getTrafoMerkeziAd?xlook_up_id=1251';
  private aboneTuruBilgileriApiUrl: string =
    'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getTrafoMerkeziAd?xlook_up_id=2097';

  constructor(private http: HttpClient) {}

  getBaskanlikBilgileri(): Observable<Array<BaskanlikBilgileriResponse>> {
    return this.http.get<Array<BaskanlikBilgileriResponse>>(
      this.baskanlikApiUrl
    );
  }

  getMudurlukBilgileri(
    baskanlikKodu: number
  ): Observable<Array<MudurlukBilgileriResponse>> {
    return this.http.get<Array<MudurlukBilgileriResponse>>(
      this.mudurlukApiUrl,
      { params: { baskanlikKodu } }
    );
  }

  getAboneTuruBilgileri(): Observable<Array<AboneTuruBilgileriResponse>> {
    return this.http.get<Array<AboneTuruBilgileriResponse>>(
      this.aboneTuruBilgileriApiUrl
    );
  }

  getAnaUniteBilgileri(): Observable<Array<AnaUniteBilgileriResponse>> {
    return this.http.get<Array<AnaUniteBilgileriResponse>>(this.mudurlukApiUrl);
  }

  getAltUniteBilgileri(): Observable<Array<AltUniteBilgileriResponse>> {
    return this.http.get<Array<AltUniteBilgileriResponse>>(this.mudurlukApiUrl);
  }

  getTransformatorMerkeziBilgileri(): Observable<
    Array<TransformatorMerkeziBilgileriResponse>
  > {
    return this.http.get<Array<TransformatorMerkeziBilgileriResponse>>(
      this.transformatorMerkeziApiUrl
    );
  }

  getAdSoyadBilgileri(): Observable<Array<AdSoyadBilgileriResponse>> {
    return this.http.get<Array<AdSoyadBilgileriResponse>>(
      this.mudurlukApiUrl,
      {}
    );
  }

  getIlgiliYTMBilgileri(): Observable<Array<IlgiliYTMBilgileriResponse>> {
    return this.http.get<Array<IlgiliYTMBilgileriResponse>>(
      this.ilgiliYTMBilgileriApiUrl
    );
  }

  getAboneYeriBilgileri(): Observable<Array<AboneYeriBilgileriResponse>> {
    return this.http.get<Array<AboneYeriBilgileriResponse>>(
      this.mudurlukApiUrl
    );
  }
}
