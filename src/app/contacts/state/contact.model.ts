import { ID, guid } from '@datorama/akita';

export interface Contact {
  id: ID;
  name: string;
}

/**
 * A factory function that creates Contacts
 */
export function createContact(name: string) {
  return {
    id: guid(),
    name
  } as Contact;
}
