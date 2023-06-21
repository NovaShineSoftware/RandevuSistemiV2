import { Component , OnInit} from '@angular/core';
declare var $: any;

import 'jquery-ui-dist/jquery-ui';
@Component({
  selector: 'clientAnaliz',
  templateUrl: './clientAnaliz.component.html',
  styleUrls: ['./clientAnaliz.component.css']
})
export class clientAnalizComponent implements OnInit {
  //event dizisine aktif randevular çekilecek
  title="analiz";
  day: string[];
  constructor() {
    this.day = ["Pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"];
  }
  ngOnInit() {
  }
}