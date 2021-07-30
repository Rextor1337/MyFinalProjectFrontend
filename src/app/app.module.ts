import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ContactFilterPipe } from './components/contact/contact-filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CategoryComponent,
    NaviComponent,
    DeleteContactComponent,
    ContactFormComponent,
    ContactFilterPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    NgbModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
