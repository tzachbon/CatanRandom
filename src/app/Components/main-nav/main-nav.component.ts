import { DataStorageServiceService } from './../../Services/data-storage-service.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  public isExtension: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dsService: DataStorageServiceService) { }

  toggleControlMenu(timer = 0) {
    if (timer > 0) {
      setTimeout(() => {
        this.dsService.toggleControlMenu = !this.dsService.toggleControlMenu;
      }, timer);
    } else {
      this.dsService.toggleControlMenu = !this.dsService.toggleControlMenu;
    }
    console.log(this.dsService.toggleControlMenu);
  }
  ngOnInit(): void {
    this.dsService.isExtension = this.isExtension;
  }
}
