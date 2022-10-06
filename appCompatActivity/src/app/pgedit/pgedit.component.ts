import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pgedit',
  templateUrl: './pgedit.component.html',
  styleUrls: ['./pgedit.component.css']
})
export class PgeditComponent implements OnInit {
  editContact!: Contact;

  constructor(private contactService:ContactService, private AcRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.AcRoute.params.subscribe( parametros => {
      if (parametros['id']) {
        this.contactService.getContactById(parametros['id']).subscribe(contact => this.editContact = contact);
      }
    });
    console.log(this.editContact.username);
  }

  atualizar(){
    this.contactService.updateContacts(this.editContact).subscribe({complete: () => this.router.navigate(['contacts'])});
  }

  deletContact(){
    this.contactService.delContacts(this.editContact.id).subscribe({
      complete: () => this.router.navigate(['contacts']) 
  });
    
  }
}
