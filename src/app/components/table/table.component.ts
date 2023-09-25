import { Component } from '@angular/core';
import { DATA } from '../../common/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['adi', 'soyad', 'baskanlikAdi', 'mudurlukadi', 'unvan', 'blok', 'kat', 'oda', 'dahili', 'hariciTelefon1', 'fax'];
  dataSource = DATA;
}
