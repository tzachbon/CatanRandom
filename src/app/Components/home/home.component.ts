import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activateAnimation: boolean;
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

  moveToRandom(timer = 0) {
    this.activateAnimation = true;
    setTimeout(() => {
      this.router.navigate(['/Random'], { relativeTo: this.route });
    }, timer);
  }


}
