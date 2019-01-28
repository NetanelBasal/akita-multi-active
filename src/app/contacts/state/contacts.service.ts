import { Injectable } from '@angular/core';
import { ContactsStore } from './contacts.store';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private contactsStore: ContactsStore) {}

  toggleActive(id: ID) {
    this.contactsStore.toggleActive(id);
  }
}
