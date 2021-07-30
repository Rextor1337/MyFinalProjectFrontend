import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/modules/contact';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: Contact[], filterText: string): Contact[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Contact)=>p.contactNick
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
