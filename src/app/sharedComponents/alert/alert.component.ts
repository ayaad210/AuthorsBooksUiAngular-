import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from './alert.service';
import { SweetAlertOptions } from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public _alert: AlertService) {
    this.initToast();
    _alert.activate = this.activate.bind(this);
  }
  ngOnInit() {
  }
  // sweet alert
  alertOpt: SweetAlertOptions = {};
  @ViewChild("swalMsg") private swalMsg: SwalComponent;
  initToast() {
    this.alertOpt = {
      title: 'Error!',
      text: 'Some errors here',
      icon: 'error',
      toast: false,
      allowOutsideClick: false,
      showDenyButton: false,
      showCancelButton: false
    };
  }

  activate(title: string, message: string, messageType: 'success' | 'error' | 'warning' | 'info' | 'question') {
    // this.translate.get(title).subscribe(res => this.swalMsg.title = res);
    // this.translate.get(message).subscribe(res => this.swalMsg.text = res);

    this.swalMsg.title = this.swalMsg.title ? this.swalMsg.title : title;
    this.swalMsg.text = this.swalMsg.text ? this.swalMsg.text : message;

    this.swalMsg.icon = messageType;
    this.swalMsg.showCancelButton = messageType == 'question' ? true : false;
    this.swalMsg.focusCancel = messageType == 'question' ? true : false;
    this.swalMsg.fire();
    return this.swalMsg.confirm.asObservable();
  }
}
