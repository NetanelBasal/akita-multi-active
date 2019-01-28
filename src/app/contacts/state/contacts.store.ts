import { Injectable } from '@angular/core';
import { EntityState, EntityStore, MultiActiveState, StoreConfig } from '@datorama/akita';
import { Contact, createContact } from './contact.model';
import faker from 'faker';

export interface ContactsState extends EntityState<Contact>, MultiActiveState {}

const initialState = {
  active: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'contacts' })
export class ContactsStore extends EntityStore<ContactsState, Contact> {
  constructor() {
    super(initialState);
    this.set(mockContacts());
  }
}

function mockContacts() {
  return Array.from({ length: 10 }, () => createContact(faker.name.findName()));
}
