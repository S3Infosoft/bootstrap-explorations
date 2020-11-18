import { Component, OnInit, NgZone, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FlashmessageService } from './flashmessage.service';
declare var $: any;
@Component({
  selector: 'tool-flashmessage',
  templateUrl: './flashmessage.component.html',
  styleUrls: ['./flashmessage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashmessageComponent implements OnInit {
  @ViewChild('flashalert') flashalert: any;
  default: any = { message: "", type: "success", delay: 1000, timeout: 2000 };
  constructor(private zone: NgZone, private fs: FlashmessageService, private cd: ChangeDetectorRef) {
    this.fs.show = this.showmsg.bind(this);
  }

  ngOnInit() {

  }

  showmsg(modal: any) {
    this.cd.markForCheck();
    this.default={}
    for (let key in modal) {
      this.default[key] = modal[key];
    }
    this.zone.runOutsideAngular(() => {
      if (modal.timeout) {
        $(".alertMsg").fadeIn(10).delay(this.default.delay).fadeOut(this.default.timeout, function () {
          this.default = {}
         });
      } else {
        $(".alertMsg").fadeIn(10);
      }
    });
  }

  hidemsg() {
    this.zone.runOutsideAngular(() => {
      this.flashalert.nativeElement.style.display = 'none';
    });
  }

}
