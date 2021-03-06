import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PICTUREPARK_API_URL } from '@picturepark/sdk-v1-angular';
import { PictureparkUiModule } from '@picturepark/sdk-v1-angular-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PictureparkUiModule
  ],
  providers: [
    { provide: PICTUREPARK_API_URL, useValue: "https://devnext.preview-picturepark.com" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
