import { Component } from '@angular/core';
import { Kullanici } from 'src/app/common/data';
import { State } from 'src/app/components/table-filter/table-filter.component';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) {
    
  }
  
  ngOnInit() {
    this.loading = true;
    this.userService.getUsersWithQuery(this.queryData).subscribe((data) => {
      this.dataSource = data.rehberListesi;
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
      this.loading = false;
    })
  }

  filterFormClear(state: State) {
    this.queryData = this.initialQueryData
    this.loading = true;
    this.userService.getUsersWithQuery(this.queryData).subscribe((data) => {
      this.dataSource = data.rehberListesi;
      this.loading = false;
    })
  }
  
}
