import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pgcadastro',
  templateUrl: './pgcadastro.component.html',
  styleUrls: ['./pgcadastro.component.css']
})
export class PgcadastroComponent implements OnInit {
  newContact ={} as Contact;

  constructor(private contactService:ContactService, private router: Router) {
   }

  ngOnInit(): void {
  
  }

  cadastrar(){
    if(this.newContact.email != '' && this.newContact.username!=''){
      this.contactService.saveContacts(this.newContact).subscribe();
      this.newContact.email = '';
      this.newContact.username = '';
    }
    this.router.navigate(['/contacts']);
  }

  cancel(){
    this.router.navigate(['/contacts']);
  }

}
