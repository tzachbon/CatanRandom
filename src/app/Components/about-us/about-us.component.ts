import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public materials: string[] = [
    'wool',
    'ore',
    'wood',
    'desert',
    'grain',
    'clay'
  ];
  constructor() { }

  ngOnInit() {
  }

}
