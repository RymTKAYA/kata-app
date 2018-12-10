import {Component, OnInit} from '@angular/core';
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
    /**
     * Get All currencies list
     */
    this.currenciesService.getCurrencies()
      .subscribe(data => {
        if (!!data) {
          this.currencies = data;
        }
      }, (err) => {
        console.log(err);
      });
    this.optionSelected = 'code,name';
    this.filterOptions = [
      {label: 'All', value: 'code,name'},
      {label: 'Code', value: 'code'},
      {label: 'Name', value: 'name'}
    ];

  }
  /**
   * @param event
   * @param currency
   */
  selectCurrency(event, currency) {
    localStorage.setItem('currency', JSON.stringify(currency))
    this.router.navigate(['currency', currency.code]);
  }
  /**
   * @param event
   */
  onFilterChange(event) {
    this.optionSelected = event.value;
  }
}
