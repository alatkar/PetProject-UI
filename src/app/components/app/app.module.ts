import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './app.component'
import { NavMenuComponent } from '../navmenu/navmenu.component';
import { HomeComponent } from '../home/home.component';
import { FetchDataComponent } from '../fetchdata/fetchdata.component';
import { CounterComponent } from '../counter/counter.component';
import { FeedComponent } from '../feed/feed.component';
import { RecommendComponent } from '../recommend/recommend.component';
import { ProfileComponent } from '../profile/profile.component';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../mockapi/in-memory-data';
import { FeedService } from '../../services/feed.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ HttpModule, 
        BrowserModule.withServerTransition({ 
           appId: 'app' // <-- 
        }), 
        FormsModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'feed', component: FeedComponent },
            { path: 'recommend', component: RecommendComponent },
            { path: '**', redirectTo: 'home' }
        ])
        ],
  declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FeedComponent,
        RecommendComponent,
        ProfileComponent
    ],
    providers: [FeedService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
