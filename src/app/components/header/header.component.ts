import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = "";
  @Output() newEvent = new EventEmitter<string>();
  name: string = "Burak Bayram";
  // Component LifeCycle metod

  ngOnInit() {
    console.log('title: ', this.title)
    this.newEvent.emit(this.name);
  }
}
