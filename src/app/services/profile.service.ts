import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Profile } from '../common/profile';

@Injectable()
export class ProfileService {
    private profileUrl = 'api/profile';  // URL to web api

    constructor(private http: Http) { }

    //Get Profile
    getHeroes(): Promise<Profile> {
        //return Promise.resolve(HEROES);
        return this.http.get(this.profileUrl)
            .toPromise()
            .then(response => response.json().data as Profile)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}