import { Component } from '@angular/core';
import { SkyWaitService } from '@skyux/indicators';
import { SkyModalInstance } from '@skyux/modals';
import { MyTileSettingsContext } from './my-tile-settings-context';

@Component({
  selector: 'my-tile-settings-modal',
  templateUrl: './my-tile-settings-modal.component.html'
})
export class MyTileSettingsModalComponent {
  public errorMessage: string;
  constructor(
    public context: MyTileSettingsContext,
    public instance: SkyModalInstance,
    private waitSvc: SkyWaitService
  ) {
  }

  public save() {
    this.waitSvc.beginBlockingPageWait();

    // simulate performing a save operation that takes 1 second
    // in order to persist these settings, you may want to send them to your backend, save in local storage, etc..
    setTimeout(() => {
      this.waitSvc.endBlockingPageWait();

      // provide the settings context back to the tile so it can respond appropriately
      this.instance.save(this.context);
    }, 1000);

  }
}
