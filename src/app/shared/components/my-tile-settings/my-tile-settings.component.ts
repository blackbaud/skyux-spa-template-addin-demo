import { Component, OnInit } from '@angular/core';
import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';
import { MyTileSettingsContext } from './my-tile-settings-context';
import { MyTileSettingsModalComponent } from './my-tile-settings-modal.component';

@Component({
  selector: 'my-tile-settings',
  template: '',
  styleUrls: ['./my-tile-settings.component.scss']
})
export class MyTileSettingsComponent implements OnInit {
  private context: MyTileSettingsContext;

  constructor(
    private modalService: SkyModalService,
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.context = args.context;

      this.openModal();

      args.ready({
        showUI: true
      });
    });
  }

  private openModal() {
    const options: any = {
      providers: [{
        provide: MyTileSettingsContext,
        useValue: this.context
      }]
    };

    const modalInstance = this.modalService.open(MyTileSettingsModalComponent, options);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      // inform the host that the modal was closed and return the context
      this.addinClientService.closeModal({
        context: result
      });
    });
  }
}
