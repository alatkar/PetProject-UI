import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Recommend } from '../../common/recommend';

@Component({
    selector: 'recommend',
    templateUrl: './recommend.component.html'
})
export class RecommendComponent {
    public recos: Recommend[];

    constructor(http: Http) {
        http.get('/api/recommend/').subscribe(result => {
            this.recos = result.json();
        });
    }
}
