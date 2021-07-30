import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { ContactResponseModel } from '../modules/contactResponseModel';
import { Observable } from 'rxjs';
import { Contact } from '../modules/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl  = 'https://localhost:44387/api/contacts/'

  constructor(private httpClient:HttpClient) { }

  getContacts():Observable<ContactResponseModel>{
    return this.httpClient.get<ContactResponseModel>(this.apiUrl+"getall");
  }
  addContacts(contact:Contact):Observable<ContactResponseModel>{
    return this.httpClient.post<ContactResponseModel>(this.apiUrl+"add",contact);
  }
  updateContacts(contact:Contact):Observable<ContactResponseModel>{
    return this.httpClient.post<ContactResponseModel>(this.apiUrl+"update",contact);
  }
  deleteContacts(contact:Contact):Observable<ContactResponseModel>{
    return this.httpClient.post<ContactResponseModel>(this.apiUrl+"delete",contact);
  }
}
