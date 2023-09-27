import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Kullanici } from 'src/app/models/types';
import { State } from 'src/app/models/types';

@Component({
  selector: 'app-telefon-rehberi',
  templateUrl: './telefon-rehberi.component.html',
  styleUrls: ['./telefon-rehberi.component.css']
})
export class TelefonRehberiComponent {
  dataSource: Kullanici[] = [];

  initialQueryData: State = {
    baskanlik: '',
    mudurluk: '',
    ad: '',
    soyadi: '',
    dahili: '',
    kat: '',
    oda: '',
  }
  queryData: State = this.initialQueryData
  loading: boolean = true;
  totalCount: number;


  constructor(private userService: UserService) {
    
  }
  
  ngOnInit() {
    this.loading = true;
    this.userService.getUsersWithQuery(this.queryData).subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.totalCount = data.totalCount
      this.loading = false;
    })
  }

  getDataSourceWithQuery(state: State) {
    // Ara butonuna tıklandığında çalışan servis
    console.log('state1:', state)
    this.queryData = state;
    this.loading = true;
    this.userService.getUsersWithQuery(state).subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.totalCount = data.totalCount
      this.loading = false;
    })
  }

  filterFormClear(state: State) {
    this.queryData = this.initialQueryData
    this.loading = true;
    this.userService.getUsersWithQuery(this.queryData,).subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.totalCount = data.totalCount
      this.loading = false;
    })
  }

  getData(pageIndex: number, pageSize: number, queryData: State) {
    this.loading = true;
    console.log('queryData', queryData)
    this.userService.getUsersWithQuery(queryData, {page: pageIndex, pageSize}).subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.totalCount = data.totalCount
      this.loading = false;
    })
  }
  
}
