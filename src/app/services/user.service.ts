import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { State } from '../models/types';
import { PaginatorOptions } from '../models/types';
import { KullaniciResponse } from '../models/RehberServiceModels';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/rehberSorgulaRest'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<KullaniciResponse> {
    return this.http.get<KullaniciResponse>(this.apiUrl)
  }
  getUsersWithQuery(queryData: State, paginatorOptions?: PaginatorOptions): Observable<KullaniciResponse> {
    return this.http.get<KullaniciResponse>(this.apiUrl, {params: { page: paginatorOptions ? paginatorOptions.page : 0 , pageSize: paginatorOptions ? paginatorOptions.pageSize : 25, ...queryData}})
  }
}

// Promise