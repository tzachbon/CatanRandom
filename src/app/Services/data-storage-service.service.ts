import { Injectable } from '@angular/core';

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
  private readonly NUMBER_OF_MATERIAL = [19, 30];
  public isExtension: boolean = false;
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
  ]
  public gameRegular: Game = {
    materiels: this.regularMaterials, numbers: this.regularNumbers
  }
  constructor() { }

  public getNumOfMaterial() {
    return this.NUMBER_OF_MATERIAL[this.isExtension ? 1 : 0];
  }
}
