import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  yetki: string[];
  constructor() {
    this.yetki = ["client","admin","employee"];
  }
  ngOnInit() {
  }
}