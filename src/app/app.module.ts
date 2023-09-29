import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RehberSecimComponent } from './screens/rehber-secim/rehber-secim.component';
import { TelefonRehberiComponent } from './screens/telefon-rehberi/telefon-rehberi.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableComponent } from './components/table/table.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { UnlessDirective } from './directives/unless.directive';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor } from '@angular/common';
import { PaxRehberiComponent } from './screens/pax-rehberi/pax-rehberi.component';
import { PaxTableFilterComponent } from './components/pax-table-filter/pax-table-filter.component';
import { PaxTableComponent } from './components/pax-table/pax-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RehberSecimComponent,
    TelefonRehberiComponent,
    HeaderComponent,
    TableComponent,
    TableFilterComponent,
    UnlessDirective,
    PaxRehberiComponent,
    PaxTableFilterComponent,
    PaxTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
