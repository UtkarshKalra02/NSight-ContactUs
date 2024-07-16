import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-us';
  activeRoute: string = '';

  constructor(private location: Location) {

  }



  ngOnInit(): void {
    this.getCurrentUrl();
  }

  changeTab(url: string) {
    this.getCurrentUrl();
  }

  getCurrentUrl() {
    this.activeRoute = this.location.path();
  }



}

