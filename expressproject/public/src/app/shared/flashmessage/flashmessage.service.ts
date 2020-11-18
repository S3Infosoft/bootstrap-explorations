import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class FlashmessageService {
  flashmessageEvent:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  show:(modal:any)=>void;
  showOrHideModal:(modal:any)=>void;
}
