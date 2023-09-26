import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DATA, Kullanici } from '../common/data';
import { HttpClient } from '@angular/common/http';
import { State } from '../components/table-filter/table-filter.component';

interface KullaniciResponse {
  rehberListesi: Kullanici[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://ws.teias.gov.tr/apigateway/rehber/RehberServiceRest/rehberSorgulaRest'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<KullaniciResponse> {
    return this.http.get<KullaniciResponse>(this.apiUrl)
  }
  getUsersWithQuery(queryData: State): Observable<KullaniciResponse> {
    // structure ve destructre
    const obj = {
      name: 'burak',
      surname: 'bayram',
      age: 5
    }
    const { name, surname } = obj
    //spread func ...
    return this.http.get<KullaniciResponse>(this.apiUrl, {params: { page:0, pageSize:25, ...queryData}})
  }
}

// Promise