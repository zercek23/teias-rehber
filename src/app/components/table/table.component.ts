import { Component, Input, ViewChild } from '@angular/core';
import { Kullanici } from 'src/app/models/types';
import { UserService } from '../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { State } from 'src/app/models/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['adi', 'soyad', 'baskanlikAdi', 'mudurlukadi', 'unvan', 'blok', 'kat', 'oda', 'dahili', 'hariciTelefon1', 'fax'];
  @Input() dataSource: Kullanici[] = [];
  @Input() loading: boolean = true;
  @Input() totalCount: number;
  @Input() getData: (pageIndex: number, pageSize: number, queryData: State) => void = () => 0; // bakılacak
  @Input() queryData: State;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('dataSource: ', this.dataSource)
    
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => this.loadPage())).subscribe();
  }

  loadPage() {
    this.getData(this.paginator.pageIndex, this.paginator.pageSize, this.queryData)
  }
}
