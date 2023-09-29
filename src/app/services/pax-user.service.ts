import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaxKullaniciResponse } from '../models/PaxRehberServiceModels';
import { PaginatorOptions, PaxTableFilterQueryParams } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class PaxUserService {
  private apiUrl =
    'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/getPaxBilgileri';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<PaxKullaniciResponse> {
    return this.http.get<PaxKullaniciResponse>(this.apiUrl, {
      params: { page: 0, pageSize: 25 },
    });
  }
  getUsersWithQuery(
    queryData: PaxTableFilterQueryParams,
    paginatorOptions?: PaginatorOptions
  ): Observable<PaxKullaniciResponse> {
    return this.http.get<PaxKullaniciResponse>(this.apiUrl, {
      params: {
        page: paginatorOptions ? paginatorOptions.page : 0,
        pageSize: paginatorOptions ? paginatorOptions.pageSize : 25,
        ...queryData,
      },
    });
  }
}
