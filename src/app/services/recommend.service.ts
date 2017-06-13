import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Profile } from '../common/profile';
import { Feed } from '../common/feed';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RecommendService {
    private profileUrl = 'api/recommend';  // URL to web api
    private profile: Profile;
    constructor(private http: Http) { }

    //Get Feed
    getFeed(): Observable<Feed[]> {
        console.log("Calling Feed Service");
        return this.http.get(this.profileUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body as Feed[];
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private handleErrorOld(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}