import { GameMaterial } from './../randomaizer.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-regular-map',
  templateUrl: './regular-map.component.html',
  styleUrls: ['./regular-map.component.scss']
})
export class RegularMapComponent implements OnInit {
  @Input() fullMap: GameMaterial[];
  constructor() { }

  ngOnInit() {
  }

}
