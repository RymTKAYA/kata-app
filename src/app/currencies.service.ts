import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Currency} from './currency';
import {Observable} from 'rxjs/index';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) {}

  /**
   * Get All CURRENCIES
   * @returns {Currency[]}
   */
  getCurrencies(): Observable<any> {
    const _path = environment.CURRENCIES.baseURL;
    return this.http.get(_path);
  }
}
