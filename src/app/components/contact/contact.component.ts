import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/modules/contact';


import { ContactService } from 'src/app/services/contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
 
  contacts: Contact[] = [];
  dataLoaded = false;
  
  

  constructor(
    private contactService:ContactService,
    private dialog: MatDialog
    ) {}
  filterText = "";
    
    
  ngOnInit(): void {
    this.getContacts();
    
  }

  getContacts(){
    

    this.contactService.getContacts().subscribe(response=>{
      this.contacts = response.data
      this.dataLoaded = true;
    })
  }
  deleteContact(contact : Contact){
    this.dialog.open(DeleteContactComponent,{
      data : contact
    });
  }
  openAddForm(){
    this.dialog.open(ContactFormComponent,{
      width : "500px"
    })
  }
  openUpdateForm(contact : Contact){
    this.dialog.open(ContactFormComponent,{
      data : contact,
      width : "500px"
    })
  }
}
