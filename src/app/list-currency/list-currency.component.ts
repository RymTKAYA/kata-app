import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CurrenciesService} from '../currencies.service';
import {Currency} from '../currency';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.css']
})
export class ListCurrencyComponent implements OnInit {
  currencies: Currency[];
  filterOptions: SelectItem[];
  optionSelected: string;
  constructor(
    private currenciesService: CurrenciesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.optionSelected = 'id';
    /**
     * Get All currencies list
     */
    this.currenciesService.getCurrencies()
      .subscribe(data => {
        if (!!data) {
          this.currencies = Object.values(data)
        }
      }, (err) => {
        console.log(err);
      });
    this.filterOptions = [
      {label: 'Id', value: 'id'},
      {label: 'Code', value: 'code'},
      {label: 'Name', value: 'name'},
      {label: 'Type', value: 'currency_type'}
    ];

  }
  /**
   * @param event
   * @param currency
   */
  selectCurrency(event, currency) {
    this.router.navigate(['currency', currency]);
  }
  /**
   * @param event
   */
  onFilterChange(event) {
    this.optionSelected = event.value;
  }
}
