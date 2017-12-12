import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

const apiUrl = environment.apiUrl + '/profile';

@Injectable()
export class ProfileService {

  private user: User;

  constructor(private http: Http) {}

  private setUser(user: User = null) {
    this.user = user;
  }

  updateProfile(user) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.put(apiUrl + '/me', user, options)
      .toPromise()
      .then(res => {
        const userUpdated = new User(res.json());
        this.setUser(userUpdated);
        return user;
      })
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }
}
