import { Injectable } from '@angular/core';
import { API } from '../API';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService extends API {
  url = 'catalog';

  headers: HttpHeaders;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.headers = new HttpHeaders();
    this.headers.set('Content-type', 'application/json');
  }

  async getProducts() {
    return await this.get(this.url, this.headers).toPromise();
  }

  async getProductById(id) {
    return await this.get(`${this.url}/${id}`, this.headers).toPromise();
  }

  async postProduct(data) {
    return await this.post(this.url, data, this.headers).toPromise();
  }

  async putProduct(data, id) {
    return await this.put(`${this.url}/${id}`, data, this.headers).toPromise();
    // return this.http.put(this.url + "/" + data.id, data).toPromise();
  }

  async putS(data: any): Promise<any> {
    return this.put(this.url + '/' + data.id, data, this.headers).toPromise();
  }

  async deleteProduct(id) {
    return await this.delete(`${this.url}/${id}`, this.headers).toPromise();
  }
}
