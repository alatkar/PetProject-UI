import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public profile: string[];
    public id: string;

    constructor(http: Http) {
        http.get(`/api/Profile/${this.id}`).subscribe(result => {
            this.profile = result.json();
        });
    }
}

interface Profile {
    message: string;
    type: string;
    link: string;
}
