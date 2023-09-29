import { Component } from '@angular/core';
import { PaxKullanici, PaxTableFilterQuery } from 'src/app/models/types';
import { PaxUserService } from 'src/app/services/pax-user.service';

@Component({
  selector: 'app-pax-rehberi',
  templateUrl: './pax-rehberi.component.html',
  styleUrls: ['./pax-rehberi.component.css'],
})
export class PaxRehberiComponent {
  dataSource: PaxKullanici[] = [];

  queryData: PaxTableFilterQuery;
  loading: boolean = true;
  totalCount: number;

  constructor(private paxUserService: PaxUserService) {}

  ngOnInit() {
    this.loading = true;
    this.paxUserService.getUsers().subscribe((data) => {
      this.dataSource = data.body;
      this.totalCount = data.totalCount;
      this.loading = false;
    });
  }

  getDataSourceWithQuery(query: PaxTableFilterQuery) {
    this.queryData = query;
    this.loading = true;
    console.log('query filter', this.queryData);
    if (this.queryData) {
      const aboneTuru = this.queryData.aboneTuru.abonelikKodu;
      const anaUnite = this.queryData.anaUnite.anaUniteKodu;
      const altUniteAdi = this.queryData.altUnite.altUniteAdi;
      const transformatorMerkezi =
        this.queryData.transformatorMerkezi.transformatorMerkeziKodu;
      const adSoyad = this.queryData.adSoyad.adSoyadKodu;
      const { paxNumarasi } = this.queryData;
      const newQueryData = {
        aboneTuru: aboneTuru ? aboneTuru.toString() : '',
        anaUnite: anaUnite ? anaUnite.toString() : '',
        altUnite: altUniteAdi ? altUniteAdi.toString() : '',
        transformatorMerkezi: transformatorMerkezi
          ? transformatorMerkezi.toString()
          : '',
        adSoyad: adSoyad ? adSoyad.toString() : '',
        paxNumarasi: paxNumarasi ? paxNumarasi.toString() : '',
      };
      this.paxUserService.getUsersWithQuery(newQueryData).subscribe((data) => {
        this.dataSource = data.body;
        this.totalCount = data.totalCount;
        this.loading = false;
      });
    } else {
      this.paxUserService.getUsers().subscribe((data) => {
        this.dataSource = data.body;
        this.totalCount = data.totalCount;
        this.loading = false;
      });
    }
  }

  filterFormClear(state: PaxTableFilterQuery) {
    this.loading = true;
    this.paxUserService.getUsers().subscribe((data) => {
      this.dataSource = data.body;
      this.totalCount = data.totalCount;
      this.loading = false;
    });
  }

  getData(pageIndex: number, pageSize: number, queryData: PaxTableFilterQuery) {
    this.loading = true;
    this.queryData = queryData;
    if (queryData) {
      const aboneTuru = this.queryData.aboneTuru.abonelikKodu;
      const anaUnite = this.queryData.anaUnite.anaUniteKodu;
      const altUniteAdi = this.queryData.altUnite.altUniteAdi;
      const transformatorMerkezi =
        this.queryData.transformatorMerkezi.transformatorMerkeziKodu;
      const adSoyad = this.queryData.adSoyad.adSoyadKodu;
      const { paxNumarasi } = this.queryData;
      const newQueryData = {
        aboneTuru: aboneTuru ? aboneTuru.toString() : '',
        anaUnite: anaUnite ? anaUnite.toString() : '',
        altUnite: altUniteAdi ? altUniteAdi.toString() : '',
        transformatorMerkezi: transformatorMerkezi
          ? transformatorMerkezi.toString()
          : '',
        adSoyad: adSoyad ? adSoyad.toString() : '',
        paxNumarasi: paxNumarasi ? paxNumarasi.toString() : '',
      };
      this.paxUserService
        .getUsersWithQuery(newQueryData, { page: pageIndex, pageSize })
        .subscribe((data) => {
          this.dataSource = data.body;
          this.totalCount = data.totalCount;
          this.loading = false;
        });
    } else {
      this.paxUserService.getUsers().subscribe((data) => {
        this.dataSource = data.body;
        this.totalCount = data.totalCount;
        this.loading = false;
      });
    }
  }
}
