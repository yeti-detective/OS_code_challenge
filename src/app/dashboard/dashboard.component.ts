import { Component, OnInit } from '@angular/core';
import { Athlete } from '../athlete';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  athletes: Athlete[];

  constructor() {
    this.athletes = [];
  }

  getAthletes() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/athletes');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        JSON.parse(xhr.response).forEach(athlete => {
          this.athletes.push(athlete);
        });
        console.log(this.athletes);
      }
    };
    xhr.send();
  }

  ngOnInit() {
    this.getAthletes();
  }
}
