import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Recommend } from '../../common/recommend';
import { RecommendService } from '../../services/recommend.service';

@Component({
    selector: 'recommend',
    templateUrl: './recommend.component.html'
})
export class RecommendComponent {
    public recos: Recommend[];


    constructor(http: Http) {
        http.get('http://localhost:60603/api/recommend/').subscribe(result => {
            this.recos = result.json();
        });
    }
/*
    constructor(private service: RecommendService) {        
    }
    */
}
