import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contactspage',
  templateUrl: './contactspage.component.html',
  styleUrls: ['./contactspage.component.css']
})
export class ContactspageComponent implements OnInit {
  contacts!: Contact[];
  constructor(private contactService:ContactService, private router:Router ) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contact => this.contacts = contact);
  }

  edit(contact: Contact){
    this.router.navigate(['edit/'+contact.id]);
  }
}
