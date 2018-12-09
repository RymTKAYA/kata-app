import { Component, OnInit } from '@angular/core';
import {Currency} from '../currency';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.css']
})
export class DetailCurrencyComponent implements OnInit {
  currency: Currency
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currency = this.route.snapshot.params.id;
  }
  backToList() {
    window.history.back();
  }
}
