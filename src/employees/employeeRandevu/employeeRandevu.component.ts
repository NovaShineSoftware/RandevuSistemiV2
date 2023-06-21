import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'employeeRandevu',
  templateUrl: '././employeeRandevu.component.html',
  styleUrls: ['././employeeRandevu.component.css']
})
export class employeeRandevuComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      studentName: '',
      course: '',
      date: '',
      time: '',
      note: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Form gönderildiğinde yapılacak işlemler
    console.log(this.studentForm.value);
  }
}