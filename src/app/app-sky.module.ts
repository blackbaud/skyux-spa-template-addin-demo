import { NgModule } from '@angular/core';
import { SkyAvatarModule } from '@skyux/avatar';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyI18nModule } from '@skyux/i18n';
import { SkyWaitModule, SkyAlertModule, SkyKeyInfoModule, SkyLabelModule } from '@skyux/indicators';
import { SkyPageSummaryModule } from '@skyux/layout';
import { SkyListModule } from '@skyux/list-builder';
import { SkyListViewGridModule } from '@skyux/list-builder-view-grids';
import { SkyModalModule } from '@skyux/modals';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyAvatarModule,
    SkyCheckboxModule,
    SkyI18nModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyModalModule,
    SkyPageSummaryModule,
    SkyWaitModule
  ]
})
export class AppSkyModule { }
