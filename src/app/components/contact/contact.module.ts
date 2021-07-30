import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFilterPipe } from './contact-filter.pipe';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact.component';




@NgModule({
  imports: [
    BrowserModule,NgbModule,CommonModule
  ],
  declarations: [ContactFilterPipe,ContactComponent],
  
})
export class ContactModule { }
