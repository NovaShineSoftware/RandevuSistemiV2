import { Component,OnInit } from '@angular/core';
declare var $: any;

import 'jquery-ui-dist/jquery-ui';
@Component({
  selector: 'client',
  templateUrl: '././client.component.html',
  styleUrls: ['././client.component.css']
})
export class clientComponent implements OnInit {
  //event dizisine aktif randevular çekilecek
  events: any[] = [
    {
      title: 'dwfscewdsfwe',
      start: new Date('2023-06-20'),
      end: new Date('2023-06-21')
    },
    {
      title: '77777',
      start: new Date('2023-06-20'),
      end: new Date('2023-06-21')
    },
    {
      title: 'ışık bilge 14.00 A DERSİ',
      start: new Date('2023-06-25'),
      end: new Date('2023-06-27')
    },
    {
      title: 'DERYA YILDIRIM 09.00 A DERSİ',
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