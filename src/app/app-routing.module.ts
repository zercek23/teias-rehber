import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RehberSecimComponent } from './screens/rehber-secim/rehber-secim.component';
import { TelefonRehberiComponent } from './screens/telefon-rehberi/telefon-rehberi.component';
import { PaxRehberiComponent } from './screens/pax-rehberi/pax-rehberi.component';

const routes: Routes = [
  { path: '', component: RehberSecimComponent },
  { path: 'telefon-rehberi', component: TelefonRehberiComponent },
  { path: 'pax-rehberi', component: PaxRehberiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
