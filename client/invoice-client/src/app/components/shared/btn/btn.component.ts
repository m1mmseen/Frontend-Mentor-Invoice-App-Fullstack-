import { Component } from '@angular/core';

@Component({
  selector: 'btn',
  template: '<button>' +
    '<ng-content></ng-content>' +
    '</button>',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {

}
