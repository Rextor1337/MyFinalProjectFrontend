import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialogRef, MatDialog} from '@angular/material/dialog';
import { Contact } from 'src/app/modules/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm!:FormGroup
  updatedContact! : Contact

  constructor(
    private fb : FormBuilder,
    private contactService : ContactService,
    private dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Contact,
    private toastr:ToastrService
    

  ) { }

  ngOnInit( ): void {
    this.contactForm=this.fb.group({
      contactNick:[this.data?.contactNick||'',[Validators.minLength(2),Validators.required]],
      contactNumber:[this.data?.contactNumber||'',[Validators.minLength(2),Validators.required]],
      contactName:[this.data?.contactName||'',],
      contactSurname:[this.data?.contactSurname||''],
      contactMail: [this.data?.contactMail||'',Validators.email],
      contactRelation: [this.data?.contactRelation||''],
      contactAddress: [this.data?.contactAddress||''],
      contactAdditionalNotes: [this.data?.contactAdditionalNotes||'']
    })
  }
  addContact(){
    this.contactService.addContacts(this.contactForm.value).subscribe((res)=>{
      this.toastr.success('Contact Added', 'Successful');
      console.log("kişi eklendi")
      setTimeout(() => {
        window.open('http://localhost:4200/', '_self')
      },500);
    })

  }
  updateContact(){
    this.updatedContact = this.contactForm.value;
    this.updatedContact.contactId= this.data.contactId;
    this.contactService.updateContacts(this.updatedContact).subscribe((res)=>{
      this.toastr.success('Contact Updated', 'Successful');
      console.log("güncelledim abi")
      setTimeout(() => {
        window.open('http://localhost:4200/', '_self')
      },500);
    })
  }
}
