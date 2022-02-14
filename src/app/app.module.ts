import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppMaterialModule } from './app.material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field/form-field';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule,FormsModule, ReactiveFormsModule, AppMaterialModule],
  declarations: [AppComponent, HelloComponent],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
