import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Material {
  maxSum: number;
  name: string;
}

export interface Number {
  sum: number;
  number: number;
}

export interface Game {
  materiels: Material[];
  numbers: Number[];
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceService {
  public toggleControlMenu: boolean;
  private readonly NUMBER_OF_MATERIAL = [19, 29];
  public isExtension: boolean = false;
  public isExtensionSub = new Subject<boolean>();
  private regularMaterials: Material[] = [
    { maxSum: 3, name: 'clay' },
    { maxSum: 1, name: 'desert' },
    { maxSum: 4, name: 'grain' },
    { maxSum: 3, name: 'ore' },
    { maxSum: 4, name: 'wool' },
    { maxSum: 4, name: 'wood' },
  ]
  private regularNumbers: Number[] = [
    { sum: 1, number: 2 },
    { sum: 2, number: 3 },
    { sum: 2, number: 4 },
    { sum: 2, number: 5 },
    { sum: 2, number: 6 },
    { sum: 2, number: 8 },
    { sum: 2, number: 9 },
    { sum: 2, number: 10 },
    { sum: 2, number: 11 },
    { sum: 1, number: 12 },
  ];
  private extensionMaterials: Material[] = [
    { maxSum: 5, name: 'clay' },
    { maxSum: 2, name: 'desert' },
    { maxSum: 6, name: 'grain' },
    { maxSum: 5, name: 'ore' },
    { maxSum: 6, name: 'wool' },
    { maxSum: 6, name: 'wood' },
  ];
  private extensionNumbers: Number[] = [
    { sum: 2, number: 2 },
    { sum: 3, number: 3 },
    { sum: 3, number: 4 },
    { sum: 3, number: 5 },
    { sum: 3, number: 6 },
    { sum: 3, number: 8 },
    { sum: 3, number: 9 },
    { sum: 3, number: 10 },
    { sum: 3, number: 11 },
    { sum: 2, number: 12 },
  ];


  public gameRegular: Game = {
    materiels: this.regularMaterials, numbers: this.regularNumbers
  };
  public extensionRegular: Game = {
    materiels: this.extensionMaterials, numbers: this.extensionNumbers
  };
  constructor() { }

  public getNumOfMaterial() {
    return this.NUMBER_OF_MATERIAL[this.isExtension ? 1 : 0];
  }
}
