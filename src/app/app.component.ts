import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './services/app.service';
import { InformationComponent } from './shared/information/information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public appService: AppService,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) { }

  information(): void {
    if (this.appService.isMobile) {
      this.bottomSheet.open(InformationComponent);
    } else {
      this.dialog.open(InformationComponent);
    }
  }
}
