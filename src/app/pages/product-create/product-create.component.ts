import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCreateDto } from 'src/app/core/models/product.model';
import { ProductsHttpRepository } from 'src/app/core/repositories/products-http.repository';

@Component({
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  constructor(private productHttp: ProductsHttpRepository, private router: Router) { }

  // TODO: Agregar label a cada input, basarse en la pagina profile
  ngOnInit(): void {
  }

  onSave(): void {
    const { name, category, brand, stock, price, cost } = this.form.value;
    const product: ProductCreateDto = {
      brand,
      categories: [category],
      cost: +cost,
      name,
      price: +price,
      stock: +stock,
    }

    this.productHttp.create(product).subscribe(
      () => {
        this.router.navigateByUrl('/products');
      }
    );
  }
}
