import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'musteri',
  templateUrl: './musteri.component.html',
  styleUrls: ['./musteri.component.css']
})
export class musteriComponent  implements OnInit {
  data = [
    {id:'1' ,ad: 'John', soyad: 'Doe', tc: '123456789', telefon: '555-1234', durum: 'Aktif' },
    { id:'2' ,ad: 'Jane', soyad: 'Smith', tc: '987654321', telefon: '555-5678', durum: 'Pasif' },
    // Diğer veri örnekleri...
  ];
  constructor() { }
  ngOnInit() {
  }
}