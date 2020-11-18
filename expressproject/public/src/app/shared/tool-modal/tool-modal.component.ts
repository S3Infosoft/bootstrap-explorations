import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy,ViewEncapsulation } from '@angular/core';
import { FlashmessageService } from '../flashmessage/flashmessage.service';
// import { FlashmessageService } from '@root/components/flashmessage/flashmessage.service';
declare var $: any;

@Component({
  selector: 'tool-modal',
  templateUrl: './tool-modal.component.html',
  styleUrls: ['./tool-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ToolDeleteModalComponent  {
  @Input('id') _id: string = "showCommonModal";
  @Input('header') _header: string = ''; 
  @Input('modelContentStyle') modelContentStyle: string = "";
  @Input('modalDialogClass') modalDialogClass:string="modal-sm";
  @Input('modalDialogStyle') modalDialogStyle:any={};

  @Output('onClose') _onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fs:FlashmessageService) { 
    this.fs.showOrHideModal = this.showModal.bind(this);
  }    

  onCloseModal(){
    $("#"+this._id).modal('hide');
    this._onClose.emit();
  }
  
  showModal(modal){
    if (modal.show) {
      $("#" + modal.id).modal('show');
    } else {
      $("#" + modal.id).modal('hide');
    }
  }

}
