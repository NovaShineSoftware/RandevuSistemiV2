import { Component, NgModule,OnInit } from '@angular/core';
declare var $: any;

import 'jquery-ui-dist/jquery-ui';
@Component({
  selector: 'employee',
  templateUrl: '././employee.component.html',
  styleUrls: ['././employee.component.css'],
 

})
export class employeeComponent  implements OnInit {
  //event dizisine aktif randevular çekilecek
  events: any[] = [
  
    {
      title: 'ışık bilge 14.00 A DERSİ',
      start: new Date('2023-06-25'),
      end: new Date('2023-06-27')
    },
    {
      title: 'Öğrenci adı 09.00 A DERSİ',
      start: new Date('2023-06-24'),
      end: new Date('2023-06-25')
    }
  ];

  ngOnInit() {
    $(document).ready(() => {
      $('#takvim').datepicker({
        format: 'dd/mm/yyyy',
        // Diğer yapılandırma seçenekleri
        beforeShowDay: this.highlightDays.bind(this)
      });
    });
  }

  highlightDays(date:any ) {
    for (let event of this.events) {
      let eventStartDate = new Date(event.start);
      let eventEndDate = new Date(event.end);

      if (date >= eventStartDate && date <= eventEndDate) {
        return [true, 'highlight bg-success', event.title];
      }
    }

    return [true, 'bg-warning', 'etkinlik yok'];
  }
}