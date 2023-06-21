import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'clientRandevularim',
  templateUrl: '././clientRandevularim.component.html',
  styleUrls: ['././clientRandevularim.component.css']
})
export class clientRandevularimComponent implements OnInit {
  title="randevularım";
  randevu: string[];
  constructor() {
    this.randevu = ["Aktif Randevu","Onay Bekleyen","İptal Edilen"];
  }
  ngOnInit() {
  }
}