import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/modules/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private contactService : ContactService,
    @Inject(MAT_DIALOG_DATA) private data : Contact
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  deleteContact(){
    this.contactService.deleteContacts(this.data).subscribe((res)=>{
      console.log(res.message);
      this.toastr.success('Contact is deleted', 'Successful');
      setTimeout(() => {
        window.open('http://localhost:4200/', '_self')
      },500);
      
      
      
    });
  }

}
