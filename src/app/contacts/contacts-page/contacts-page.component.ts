import { Component, OnInit } from '@angular/core';
import { ContactsQuery } from '../state/contacts.query';
import { Observable } from 'rxjs';
import { Contact } from '../state/contact.model';
import { ID } from '@datorama/akita';
import { ContactsService } from '../state/contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private contactsQuery: ContactsQuery, private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts$ = this.contactsQuery.selectAll();
  }

  toggleActive(id: ID) {
    this.contactsService.toggleActive(id);
  }

  isActive(id: ID) {
    return this.contactsQuery.hasActive(id);
  }
}
