import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  title = 'Product List';
  filterText = '';
  products: Product[] = [
    {
      id: 1,
      productName: 'Laptop',
      price: 5000,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
    {
      id: 1,
      productName: 'Mouse',
      price: 150,
      categoryId: 2,
      description: 'Logitech M330',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
    {
      id: 1,
      productName: 'Mouse',
      price: 150,
      categoryId: 2,
      description: 'Logitech M330',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
    {
      id: 1,
      productName: 'Laptop',
      price: 5000,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
    {
      id: 1,
      productName: 'Laptop',
      price: 5000,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
    {
      id: 1,
      productName: 'Mouse',
      price: 150,
      categoryId: 2,
      description: 'Logitech M330',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
    {
      id: 1,
      productName: 'Mouse',
      price: 150,
      categoryId: 2,
      description: 'Logitech M330',
      imageURL:
        'https://cdn.dsmcdn.com/mnresize/415/525/ty9/product/media/images/20200826/14/8756701/82628672/1/1_org_zoom.jpg',
    },
  ];

  ngOnInit(): void {}

  addToCart(product) {
    alertify.success(product.productName + ' is added to cart!!');
  }
}
