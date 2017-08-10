import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostListener('click') toggleOpen() {
        this.open = !this.open;
    }

    @HostBinding('class.open') open: boolean = false;

    constructor( ) { }

}
