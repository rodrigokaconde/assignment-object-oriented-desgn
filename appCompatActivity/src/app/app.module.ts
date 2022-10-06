import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactspageComponent } from './contactspage/contactspage.component';
import { IndexComponent } from './index/index.component';
import {MatListModule} from '@angular/material/list';
import { PgcadastroComponent } from './pgcadastro/pgcadastro.component';
import { PgeditComponent } from './pgedit/pgedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactspageComponent,
    IndexComponent,
    PgcadastroComponent,
    PgeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
