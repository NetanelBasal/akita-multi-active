import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, environment.production ? [] : AkitaNgDevtools.forRoot(), ContactsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
