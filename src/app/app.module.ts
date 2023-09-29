import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
