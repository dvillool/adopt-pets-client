import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/animal';

@Injectable()
export class AnimalService {

  constructor(private http: Http) {}

  getAnimal(id) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + '/' + id, options)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateAnimal(animal){
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.put(apiUrl, animal, options)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
