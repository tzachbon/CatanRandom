import { Game } from './../../Services/data-storage-service.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageServiceService } from 'src/app/Services/data-storage-service.service';

export interface GameMaterial {
  name: string;
  number: number;
}

@Component({
  selector: 'app-randomaizer',
  templateUrl: './randomaizer.component.html',
  styleUrls: ['./randomaizer.component.scss']
})
export class RandomaizerComponent implements OnInit {
  public fullMap: GameMaterial[] = [];
  constructor(public dsService: DataStorageServiceService) { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    let numbers = [];
    let materials = [];
    this.dsService.gameRegular.materiels.forEach(material => {
      for (let i = 0; i < material.maxSum; i++) {
        materials.push(material.name);
      }
    });
    this.dsService.gameRegular.numbers.forEach(number => {
      for (let o = 0; o < number.sum; o++) {
        numbers.push(number.number);
      }
    });

    numbers = this.shuffle(numbers);
    materials = this.shuffle(materials);
    const indexOfDesert = materials.indexOf('desert');
    materials.splice(indexOfDesert, 1);

    for (let i = 0; i < this.dsService.getNumOfMaterial() - 1; i++) {
      const gameMaterial: GameMaterial = {
        name: materials[i],
        number: numbers[i]
      }
      this.fullMap.push(gameMaterial);
    }
    const randomNum = Math.round((Math.random() * this.dsService.getNumOfMaterial() - 1) + 1);
    const desert = ({ name: 'desert', number: 0 });
    this.fullMap.splice(randomNum, 0, desert);


    console.log(this.fullMap);




  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
