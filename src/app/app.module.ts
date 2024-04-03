import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PumpsListComponent } from './components/pumps/pumps-list/pumps-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPumpComponent } from './components/pumps/add-pump/add-pump.component';
import { FormsModule } from '@angular/forms';
import { EditPumpComponent } from './components/pumps/edit-pump/edit-pump.component';

@NgModule({
  declarations: [
    AppComponent,
    PumpsListComponent,
    AddPumpComponent,
    EditPumpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
