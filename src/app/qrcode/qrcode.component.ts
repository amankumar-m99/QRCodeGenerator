import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  elementType = 'url';
  // data = 'https://geeksforgeeks.org/';
  obj = {
    cellTowers: [
      {
        cellId: 170402199,
        locationAreaCode: 35632,
        mobileCountryCode: 310,
        mobileNetworkCode: 410,
        age: 0,
        signalStrength: -60,
        timingAdvance: 15
      }
    ]
  }
  data = JSON.stringify(this.obj);
}
