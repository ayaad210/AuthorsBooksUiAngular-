import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
   
  ) {

  }
  alertOpt: SweetAlertOptions = {};
  public activate(
    title?: string,
    message?: string,
    messageType?: 'success' | 'error' | 'warning' | 'info' | 'question'
  ): void { }

  public activateMsgDialog(message: string) {
    let msg = message;
    msg = msg ? msg : message;
    return Swal.fire({
      text: msg,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    });
  }

  // public warningAlert(textLine) {
  //   return Swal.fire({
  //     title: textLine,
  //     text: 'Do you want to continue',
  //     icon: 'question',
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText:'Yes',
  //     cancelButtonText: 'No',
  //     allowOutsideClick: false,
  //     showCancelButton: true,
  //   })
  // }

  public Confirm(MessageId: string, confirmButton: string = 'Ok', CancelButton: string = 'Cancel') {
    let message: string = '';
    return Swal.fire({
      text: message,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButton,
      cancelButtonText: CancelButton,
      reverseButtons: true
    })
  }

  public activateMsg(MessageEn: string, MessageAr: string, messageType: 'success' | 'error' | 'warning' | 'info' | 'question' = 'warning') {
    return Swal.fire({
      text: MessageEn,
      icon: messageType,
      showCancelButton: false,
      focusCancel: messageType == 'question' ? true : false
    })
  }

  public Confirmation(MessageEn: string, MessageAr: string, confirmButton: string = 'Ok', CancelButton: string = 'Cancel') {
    return Swal.fire({
      text:  MessageEn,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButton,
      cancelButtonText: CancelButton,
      reverseButtons: true
    })
  }
  public activateMsgWithKey(title: string, message: string, messageType: 'success' | 'error' | 'warning' | 'info' | 'question') {
    var stitle = title
    var smessage = message
   
    stitle = stitle ? stitle : title;
    smessage = smessage ? smessage : message;
    return Swal.fire({
      text: smessage,
      title: stitle,
      icon: messageType,
      showCancelButton: false,
      focusCancel: messageType == 'question' ? true : false
    })
  }
}
