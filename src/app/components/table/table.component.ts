import { Component, Input } from '@angular/core';
import { DATA, Kullanici } from '../../common/data';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['adi', 'soyad', 'baskanlikAdi', 'mudurlukadi', 'unvan', 'blok', 'kat', 'oda', 'dahili', 'hariciTelefon1', 'fax'];
  @Input() dataSource: Kullanici[] = [];
  @Input() loading: boolean = true;

  constructor() { }

  ngOnInit() {
    console.log('dataSource: ', this.dataSource)
  }
}
