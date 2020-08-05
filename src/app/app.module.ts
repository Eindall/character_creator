import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { PfSheetCreatorComponent } from './pathfinder/sheet-creator/sheet-creator.component';
import { PfSheetDetailsComponent } from './pathfinder/sheet-details/sheet-details.component';
import { NhSheetCreatorComponent } from './naheulbeuk/sheet-creator/sheet-creator.component';
import { NhSheetDetailsComponent } from './naheulbeuk/sheet-details/sheet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PfSheetCreatorComponent,
    PfSheetDetailsComponent,
    NhSheetCreatorComponent,
    NhSheetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
