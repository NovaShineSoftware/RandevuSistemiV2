import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: '././navbar.component.html',
  styleUrls: ['././navbar.component.css']
})
export class navbarComponent implements OnInit {
  
  yetki: string[];
  constructor() {
    this.yetki = ["client","admin","employee"];
  }
  ngOnInit() {
  }
}