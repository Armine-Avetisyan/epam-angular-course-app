import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvidersViewProvidersComponent } from './providers-view-providers/providers-view-providers.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import {FormsModule} from "@angular/forms";
import {ResolutionModifiersModule} from "./resolution-modifiers/resolution-modifiers.module";
import {ProvidersViewProvidersModule} from "./providers-view-providers/providers-view-providers.module";

@NgModule({
  declarations: [
    AppComponent,
    ProvidersViewProvidersComponent,
    ResolutionModifiersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ResolutionModifiersModule,
    ProvidersViewProvidersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
