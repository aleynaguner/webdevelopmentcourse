import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //template: `<p>This is a component with inline html template , {{name}} !!!</p>`,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  name = 'Aleyna';

  ngOnInit(): void {}
}
