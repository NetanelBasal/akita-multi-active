import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

@NgModule({
  declarations: [ContactsPageComponent],
  exports: [ContactsPageComponent],
  imports: [CommonModule]
})
export class ContactsModule {}
