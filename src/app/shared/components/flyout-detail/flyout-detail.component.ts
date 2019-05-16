import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { FlyoutService } from '../../services/flyout.service';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'flyout-detail',
  templateUrl: './flyout-detail.component.html'
})
export class FlyoutDetailComponent implements OnInit {
  @Input()
  public id: string;
  public record: any;

  constructor(
    private flyoutSvc: FlyoutService,
    private addinClientService: AddinClientService
  ) { }

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.record = args.context.data;
    });

    if (this.id) {
      this.record = this.flyoutSvc.getRecordById(this.id);
    }
  }
}
