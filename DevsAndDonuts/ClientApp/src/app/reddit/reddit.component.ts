import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reddit',
    templateUrl: './reddit.component.html',
    styleUrls: ['./reddit.component.css']
})
/** reddit component*/
export class RedditComponent {
  @Input() redditItem = null;
    /** reddit ctor */
    constructor() {

    }
}
