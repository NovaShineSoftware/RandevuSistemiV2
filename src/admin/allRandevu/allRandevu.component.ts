import { Component } from '@angular/core';

@Component({
  selector: 'allRandevu',
  templateUrl: '././allRandevu.component.html',
  styleUrls: ['././allRandevu.component.css']
})
export class allRandevuComponent {
    //randevu dizisindeki veriler tabloya çekildi ve status(durum)una göre renklendirildi
    appointments = [
      { id: 1, studentName: 'Öğrenci 1', teacherName: 'Hoca 1', date: '2023-06-20', time: '14:00', status: 'aktif' },
      { id: 2, studentName: 'Öğrenci 2', teacherName: 'Hoca 2', date: '2023-06-21', time: '10:30', status: 'aktif' },
      { id: 3, studentName: 'Öğrenci 3', teacherName: 'Hoca 3', date: '2023-06-22', time: '16:15', status: 'iptal' },
      { id: 4, studentName: 'Öğrenci 4', teacherName: 'Hoca 4', date: '2023-06-23', time: '09:45', status: 'aktif' },
      { id: 5, studentName: 'Öğrenci 1', teacherName: 'Hoca 1', date: '2023-06-07', time: '14:00', status: 'aktif' },
      { id: 6, studentName: 'Öğrenci 2', teacherName: 'Hoca 2', date: '2023-06-08', time: '10:30', status: 'iptal' },
      { id: 7, studentName: 'Öğrenci 3', teacherName: 'Hoca 3', date: '2023-06-02', time: '16:15', status: 'askıda' },
      { id: 8, studentName: 'Öğrenci 4', teacherName: 'Hoca 4', date: '2023-06-03', time: '09:45', status: 'aktif' },
    ];
 
   
  
  filteredAppointments!: any[];
  teachers: string[] = [];
  selectedTeacher!: string;
  selectedDate!: string;

  constructor() {
    this.initializeTeachers();
    this.filterAppointments();
  }

  initializeTeachers() {//dizide aynı adlı verileri teke indirdi
    const uniqueTeachers = new Set(this.appointments.map(appointment => appointment.teacherName));
    this.teachers = Array.from(uniqueTeachers);
  }

  filterAppointments() {//öğretmene ve tarihe göre filtreleme işlemi
    this.filteredAppointments = this.appointments.filter(appointment => {
      if (this.selectedTeacher && this.selectedDate) {
        return appointment.teacherName === this.selectedTeacher && appointment.date === this.selectedDate;
      } else if (this.selectedTeacher) {
        return appointment.teacherName === this.selectedTeacher;
      } else if (this.selectedDate) {
        return appointment.date === this.selectedDate;
      } else {
        return true;
      }
    });
  }

  getStatusClass(status: string): string {//renklendirme işlemi
    switch (status) {
      case 'aktif':
        return 'table-success';
      case 'askıda':
        return 'table-warning';
      case 'iptal':
        return 'table-danger';
      default:
        return '';
    }
  }
}