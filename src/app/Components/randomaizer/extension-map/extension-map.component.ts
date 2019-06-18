import { GameMaterial } from './../randomaizer.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extension-map',
  templateUrl: './extension-map.component.html',
  styleUrls: ['./extension-map.component.scss']
})
export class ExtensionMapComponent implements OnInit {
  @Input() fullMap: GameMaterial[];

  constructor() { }

  ngOnInit() {
  }

}
