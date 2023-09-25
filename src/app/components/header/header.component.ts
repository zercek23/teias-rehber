import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = "";
  // Component LifeCycle metod

  ngOnInit() {
    console.log('title: ', this.title)
  }
}
