import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FeedService } from '../../services/feed.service';
import { Feed } from '../../common/feed';

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent  {
    feeds: Feed[];
    
    ngOnInit(): void {        
        this.getFeed(); 
    }

    getFeed(): void {
        this.service.getFeed().subscribe(feeds => { this.feeds = feeds });
    }

    constructor(private service: FeedService) {        
    }

    /*
    constructor(http: Http) {
        http.get('/api/feed/').subscribe(result => {
            this.feeds = result.json();
        });        
    }
    */
}
