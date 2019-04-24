import {
  Component,
  OnInit
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddinClientInitArgs,
  AddinButtonStyle
} from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-button',
  template: ''
})
export class MyButtonComponent implements OnInit {
  public context: any;
  public modalResponse: string;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.context = args.context;

      args.ready({
        showUI: true,
        title: 'Add customer',
        buttonConfig: {
          style: AddinButtonStyle.Add
        }
      });
    });

    this.addinClientService.buttonClick.subscribe(() => {
      this.showModal();
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
