import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { PaxKullanici, PaxTableFilterQuery } from 'src/app/models/types';
import { PaxUserService } from 'src/app/services/pax-user.service';

@Component({
  selector: 'app-pax-table',
  templateUrl: './pax-table.component.html',
  styleUrls: ['./pax-table.component.css'],
})
export class PaxTableComponent {
  displayedColumns: string[] = [
    'abone_tip_id_qw_',
    'lkp_ana_unite_qw_',
    'alt_unite_id_yeni_qw_',
    'lkp_mulkiyet_qw_',
    'lkp_sorumlu_ytm_qw_',
    'adi',
    'soyadi',
    'pax_no',
  ];
  @Input() dataSource: PaxKullanici[] = [];
  @Input() loading: boolean = true;
  @Input() totalCount: number;
  @Input() getData: (
    pageIndex: number,
    pageSize: number,
    queryData: PaxTableFilterQuery
  ) => void = () => 0; // bakılacak
  @Input() queryData: PaxTableFilterQuery;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private paxUserService: PaxUserService) {}

  ngOnInit() {
    console.log('dataSource: ', this.dataSource);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => this.loadPage())).subscribe();
  }

  loadPage() {
    this.getData(
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.queryData
    );
  }
}
