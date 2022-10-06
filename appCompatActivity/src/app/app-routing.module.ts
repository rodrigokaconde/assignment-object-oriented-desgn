import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ContactspageComponent} from './contactspage/contactspage.component'
import {IndexComponent} from './index/index.component'
import {PgcadastroComponent} from './pgcadastro/pgcadastro.component'
import {PgeditComponent} from './pgedit/pgedit.component'

const routes: Routes = [
  { path: 'contacts',     component: ContactspageComponent},
  { path: '',     component: IndexComponent },
  { path: 'index',     component: IndexComponent },
  {path: 'cadastro', component: PgcadastroComponent},
  {path: 'edit/:id', component: PgeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
