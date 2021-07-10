import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import { UserComponent } from './user/user.component';
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListOffersComponent } from './dashboard/offers/list-offers/list-offers.component';
import { PreviewOfferComponent } from './dashboard/offers/preview-offer/preview-offer.component';
import { AddEditDeleteDestinationComponent } from './dashboard/destinations/add-edit-delete-destination/add-edit-delete-destination.component';
import { AddEditDeleteOfferComponent } from './dashboard/offers/add-edit-delete-offer/add-edit-delete-offer.component';
import { ListDestinationsComponent } from './dashboard/destinations/list-destinations/list-destinations.component';
import { PreviewDestinationComponent } from './dashboard/destinations/preview-destination/preview-destination.component';
import { AddEditDeleteClientComponent } from './dashboard/clients/add-edit-delete-client/add-edit-delete-client.component';
import { ListClientsComponent } from './dashboard/clients/list-clients/list-clients.component';
import { PreviewClientComponent } from './dashboard/clients/preview-client/preview-client.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MyAccountComponent } from './my-account/my-account.component';
import { AddEditDeleteCountryComponent } from './dashboard/destinations/add-edit-delete-destination/add-edit-delete-country/add-edit-delete-country.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { ListCountriesComponent } from './dashboard/destinations/list-countries/list-countries.component';
import { CountryPreviewComponent } from './dashboard/destinations/country-preview/country-preview.component';
import { BuyOfferComponent } from './buy-offer/buy-offer.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    ListOffersComponent,
    PreviewOfferComponent,
    AddEditDeleteDestinationComponent,
    AddEditDeleteOfferComponent,
    ListDestinationsComponent,
    PreviewDestinationComponent,
    AddEditDeleteClientComponent,
    ListClientsComponent,
    PreviewClientComponent,
    MyAccountComponent,
    AddEditDeleteCountryComponent,
    ListCountriesComponent,
    CountryPreviewComponent,
    BuyOfferComponent,
    HomeComponent,
    NavigationToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  entryComponents: [BuyOfferComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
