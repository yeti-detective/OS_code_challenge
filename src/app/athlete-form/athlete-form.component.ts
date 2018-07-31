import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Athlete } from '../athlete';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.css']
})
export class AthleteFormComponent implements OnInit {
  athlete: Athlete;

  constructor(private router: Router) {
    this.athlete = new Athlete({
      name: '',
      sport: '',
      about: ''
    });
  }

  postAthlete() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/new');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // const router = new Router();
        this.router.navigateByUrl('/main');
      }
    };
    xhr.send(this.athlete);
  }

  ngOnInit() {}
}
