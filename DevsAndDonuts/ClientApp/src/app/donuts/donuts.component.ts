import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-donuts',
    templateUrl: './donuts.component.html',
    styleUrls: ['./donuts.component.css']
})
/** Donuts component*/
export class DonutsComponent {
  @Input() aDount = null;
    /** Donuts ctor */
    constructor() {

    }
}
