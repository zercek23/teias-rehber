import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MudurlukBilgileriResponse, BaskanlikBilgileriResponse } from '../models/RehberServiceModels';


@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  mudurlukApiUrl: string = "https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getMudurlukBilgileri";
  baskanlikApiUrl: string = "https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getBaskanlikBilgileri";

  constructor(private http: HttpClient) { }

  getBaskanlikBilgileri(): Observable<Array<BaskanlikBilgileriResponse>> {
    return this.http.get<Array<BaskanlikBilgileriResponse>>(this.baskanlikApiUrl)
  }

  getMudurlukBilgileri(baskanlikKodu: number): Observable<Array<MudurlukBilgileriResponse>> {
    return this.http.get<Array<MudurlukBilgileriResponse>>(this.mudurlukApiUrl, {params: {baskanlikKodu}})
  }

}
