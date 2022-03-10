import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [AlertComponent],
  exports: [AlertComponent],
  imports: [
    CommonModule, 
    SweetAlert2Module.forChild()
  ],
  providers: [AlertService]
})
export class AlertModule { }
