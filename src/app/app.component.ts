import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // DOM Document Object Model
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tempTitle = 'Teiaş Rehber';

  getItem(newItem: string) {
    console.log('name: ', newItem)
  }
}
