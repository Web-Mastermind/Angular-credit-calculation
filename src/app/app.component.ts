import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Credit Calculation</h2>
    <div>
      <label>Kredit Tutarı</label>
      <input [(ngModel)]="kreditTutari">
    </div>
    <div>
      <label>Taksit sayısı</label>
      <select [(ngModel)]="taksitSayisi">
        @for(data of taksitler; track data){
          <option>{{data}}</option>
        }
      </select>
    </div>
    <div>
      <button (click)="hesabla()">Hesabla</button>
    </div>
    <hr>
    <h1>{{result}}</h1>
  `
})
export class AppComponent {
  kreditTutari: number = 0;
  taksitSayisi: number = 3;
  taksitler: number[] = [3, 6, 12, 24];
  result: string = "";

  hesabla() {
    const taksitTutari = (this.kreditTutari / this.taksitSayisi) * 1.29
    const toplamGeriOdeme = taksitTutari * this.taksitSayisi
    this.result = `Taksit Tutarı: ${taksitTutari} - Taksit sayı: ${this.taksitSayisi} - Toplam geri ödəmə: ${toplamGeriOdeme}`
  }
}
