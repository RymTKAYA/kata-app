import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { ListCurrencyComponent} from '../list-currency/list-currency.component';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.css'],
  providers: [ ListCurrencyComponent ],
})
export class DetailCurrencyComponent implements OnInit {
  currency: Currency;
  constructor() { }

  ngOnInit() {
    this.currency = JSON.parse(localStorage.getItem('currency'));
  }
  backToList() {
    window.history.back();
  }
}
