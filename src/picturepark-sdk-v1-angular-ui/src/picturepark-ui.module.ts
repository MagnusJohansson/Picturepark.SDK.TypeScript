import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { PictureparkModule } from '@picturepark/sdk-v1-angular'; 
import { LoginComponent } from './components/login/login.component'; 
import { LogoutComponent } from './components/logout/logout.component'; 
import { ShareCardComponent } from './components/share-card/share-card.component';
import { ChannelPickerComponent } from './components/channel-picker/channel-picker.component';
import { ContentBrowserComponent } from './components/content-browser/content-browser.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AggregationFilterComponent } from './components/aggregation-filter/aggregation-filter.component';

import { ContentBrowserItemComponent } from "./components/content-browser-item/content-browser-item.component";

import { TranslatePipe } from "./pipes/translate.pipe";

@NgModule({
  declarations: [ 
    LoginComponent, 
    LogoutComponent, 
    ShareCardComponent, 
    ChannelPickerComponent, 
    ContentBrowserComponent, 
    SearchBoxComponent, 
    AggregationFilterComponent, 
    ContentBrowserItemComponent, 
    TranslatePipe
  ],
  imports: [ 
    BrowserModule, 
    FormsModule, 
    PictureparkModule, 
    VirtualScrollModule
  ], 
  exports: [ 
    PictureparkModule, 
    LoginComponent, 
    LogoutComponent, 
    ShareCardComponent, 
    ChannelPickerComponent, 
    ContentBrowserComponent, 
    SearchBoxComponent, 
    AggregationFilterComponent
  ]
})
export class PictureparkUiModule { }