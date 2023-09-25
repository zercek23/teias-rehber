import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RehberSecimComponent } from "./screens/rehber-secim/rehber-secim.component";
import { TelefonRehberiComponent } from "./screens/telefon-rehberi/telefon-rehberi.component";

const routes: Routes = [
  {path: '', component: RehberSecimComponent},
  {path: 'telefon-rehberi', component: TelefonRehberiComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }