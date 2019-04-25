import { NgModule } from '@angular/core';
import { AppSkyModule } from './app-sky.module';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddCustomerModalComponent } from './shared/components/add-customer/add-customer-modal.component';
import { MyTileSettingsModalComponent } from './shared/components/my-tile-settings/my-tile-settings-modal.component';

@NgModule({
  exports: [
    AppSkyModule
  ],
  providers: [
    AddinClientService
  ],
  entryComponents: [
    AddCustomerModalComponent,
    MyTileSettingsModalComponent
  ]
})
export class AppExtrasModule { }
