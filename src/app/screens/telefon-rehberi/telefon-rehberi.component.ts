import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Kullanici, TableFilterQuery } from 'src/app/models/types';

@Component({
  selector: 'app-telefon-rehberi',
  templateUrl: './telefon-rehberi.component.html',
  styleUrls: ['./telefon-rehberi.component.css'],
})
export class TelefonRehberiComponent {
  dataSource: Kullanici[] = [];

  queryData: TableFilterQuery;
  loading: boolean = true;
  totalCount: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.totalCount = data.totalCount;
      this.loading = false;
    });
  }

  getDataSourceWithQuery(query: TableFilterQuery) {
    this.queryData = query;
    this.loading = true;
    console.log('query filter', this.queryData);
    if (this.queryData) {
      const baskanlik = this.queryData.baskanlik.baskanlikKodu;
      const mudurluk = this.queryData.mudurluk.mudurlukKodu;
      const { ad, soyadi, dahili, kat, oda } = this.queryData;
      const newQueryData = {
        baskanlik: baskanlik ? baskanlik.toString() : '',
        mudurluk: mudurluk ? mudurluk.toString() : '',
        ad: ad ? ad.toString() : '',
        soyadi: soyadi ? soyadi.toString() : '',
        dahili: dahili ? dahili.toString() : '',
        kat: kat ? kat.toString() : '',
        oda: oda ? oda.toString() : '',
      };
      this.userService.getUsersWithQuery(newQueryData).subscribe((data) => {
        this.dataSource = data.rehberListesi;
        this.totalCount = data.totalCount;
        this.loading = false;
      });
    } else {
      this.userService.getUsers().subscribe((data) => {
        this.dataSource = data.rehberListesi;
        this.totalCount = data.totalCount;
        this.loading = false;
      });
    }
  }

  filterFormClear(state: TableFilterQuery) {
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.totalCount = data.totalCount;
      this.loading = false;
    });
  }

  getData(pageIndex: number, pageSize: number, queryData: TableFilterQuery) {
    this.loading = true;
    if (queryData) {
      const baskanlik = queryData.baskanlik.baskanlikKodu;
      const mudurluk = queryData.mudurluk.mudurlukKodu;
      const { ad, soyadi, dahili, kat, oda } = queryData;
      const newQueryData = {
        baskanlik: baskanlik ? baskanlik.toString() : '',
        mudurluk: mudurluk ? mudurluk.toString() : '',
        ad: ad ? ad.toString() : '',
        soyadi: soyadi ? soyadi.toString() : '',
        dahili: dahili ? dahili.toString() : '',
        kat: kat ? kat.toString() : '',
        oda: oda ? oda.toString() : '',
      };
      this.userService
        .getUsersWithQuery(newQueryData, { page: pageIndex, pageSize })
        .subscribe((data) => {
          this.dataSource = data.rehberListesi;
          this.totalCount = data.totalCount;
          this.loading = false;
        });
    } else {
      this.userService.getUsers().subscribe((data) => {
        this.dataSource = data.rehberListesi;
        this.totalCount = data.totalCount;
        this.loading = false;
      });
    }
  }
}
