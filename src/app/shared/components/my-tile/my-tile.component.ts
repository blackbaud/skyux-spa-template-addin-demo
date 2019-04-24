import { Component, OnInit } from '@angular/core';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs, AddinTileSummaryStyle, AddinToastStyle } from '@blackbaud/sky-addin-client';
import { MyTileSettingsContext } from '../my-tile-settings/my-tile-settings-context';
import { SkyModalCloseArgs } from '@skyux/modals';

@Component({
  selector: 'my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {
  public closeHelp: boolean = true;
  public context: any;
  public modalResponse: string;
  public showWelcomeMessage: boolean = true;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.context = args.context;

      args.ready({
        showUI: true,
        title: 'My tile',
        tileConfig: {
          showHelp: true,
          showSettings: true,
          summaryStyle: AddinTileSummaryStyle.Check,
          summaryChecked: true
        }
      });
    });

    this.addinClientService.helpClick.subscribe(() => {
      this.showHelp();
    });

    this.addinClientService.settingsClick.subscribe(() => {
      this.showSettingsModal();
    });
  }

  public showModal() {
    // provide some context for the modal
    let context = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // TODO:  Update the token in the below URL (you could also build this URL at runtime by injecting the SkyAppConfig service)
    this.showModalInternal('https://host.nxt.blackbaud.com/REPLACE_WITH_YOUR_APP_NAME/add-customer', context);
  }

  public showToast() {
    const message: string = 'This is a toast message';
    const toastStyle: AddinToastStyle = AddinToastStyle.Success;
    this.addinClientService.showToast({ message: message, style: toastStyle });
  }

  public showSettingsModal() {
    // provide some context for the modal
    let context: MyTileSettingsContext = {
      showWelcomeMessage: this.showWelcomeMessage
    };

    this.addinClientService.showModal({
      url: 'https://host.nxt.blackbaud.com/REPLACE_WITH_YOUR_APP_NAME/my-tile-settings',
      context: context
    }).subscribe(
      (result: SkyModalCloseArgs) => {
        if (result.data && result.reason && result.reason.toLocaleLowerCase() === 'save') {
          this.showWelcomeMessage = result.data.showWelcomeMessage;
        }
      });
  }

  public helpClosed() {
    this.closeHelp = true;
  }

  private showHelp() {
    this.closeHelp = false;
  }

  private showModalInternal(url: string, context: any) {
    this.modalResponse = undefined;

    this.addinClientService.showModal({
      url: url,
      context: context
    }).subscribe(modalResponse => {
      this.modalResponse = JSON.stringify(modalResponse, undefined, 2);
    });
  }

}
