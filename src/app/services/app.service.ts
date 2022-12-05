import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class AppService {
  header: boolean = true;
  left: boolean = true;
  right: boolean = true;
  footer: boolean = true;

  constructor(
    breakpointObserver: BreakpointObserver,
    private deviceService: DeviceDetectorService
  ) {
    console.log(deviceService.getDeviceInfo());

    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(
      untilDestroyed(this)
    ).subscribe(result => console.log(result));
  }

  get isMobile(): boolean { return this.deviceService.isMobile() }
  get isTablet(): boolean { return this.deviceService.isTablet() }
  get isDesktop(): boolean { return this.deviceService.isDesktop() }
}
