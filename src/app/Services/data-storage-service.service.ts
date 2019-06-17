import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceService {
  public toggleControlMenu: boolean;
  public isExtension: boolean;
  constructor() { }
}
