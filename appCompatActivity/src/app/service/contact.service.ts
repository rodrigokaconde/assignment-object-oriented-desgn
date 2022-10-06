import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contact} from '../model/contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseURL = 'http://localhost:8080/contact';

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseURL);
  }

  saveContacts(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.baseURL, contact);
  }

  delContacts(id: string): Observable<Contact>{
    return this.http.delete<Contact>(`${this.baseURL}/${id}`);
  }

  getContactById(id: string): Observable<Contact>{
    return this.http.get<Contact>(`${this.baseURL}/${id}`);
  }

  updateContacts(contact: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.baseURL, contact);
  }
  constructor(private http: HttpClient) { }
}
