import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class personelComponent  implements OnInit {
  title="Eğitmenler";
  city: string[];
  constructor() {
    this.city = ["Kayseri","İstanbul","Ankara"];
  }
  ngOnInit() {
  }
}