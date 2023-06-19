import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'employeeRandevularim',
  templateUrl: '././employeeRandevularim.component.html',
  styleUrls: ['././employeeRandevularim.component.css']
})
export class employeeRandevularimComponent implements OnInit {
  title="randevularım";
  randevu: string[];
  constructor() {
    this.randevu = ["Aktif Randevu","Onay Bekleyen","İptal Edilen"];
  }
  ngOnInit() {
  }
}