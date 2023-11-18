import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProductUpdateDto } from 'src/app/core/models/product.model';
import { ProductsHttpRepository } from 'src/app/core/repositories/products-http.repository';

@Component({
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  id: number;

  constructor(private productHttp: ProductsHttpRepository, private router: Router, private activatedRouter: ActivatedRoute) { }

  // TODO: Agregar label a cada input, basarse en la pagina profile
  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      map(params => params['id']),
      tap(id => {
        this.productHttp.product(id).subscribe(product => {
          this.id = product.id;
          this.form.patchValue({
            name: product.name,
            brand: product.brand,
            category: product.categories[0]?.name,
            cost: String(product.cost),
            price: String(product.price),
            stock: product.stock
          });
        })
      })
    ).subscribe();
  }

  // TODO: Hacer un lista de category id
  onUpdate(): void {
    const { name, category, brand, stock, price, cost } = this.form.value;
    const product: ProductUpdateDto = {
      id: this.id,
      brand,
      categories: ['1'],
      cost: +cost,
      name,
      price: +price,
      stock: +stock,
    }

    this.productHttp.update(product).subscribe(
      () => {
        this.router.navigateByUrl('/products');
      }
    )
  }
} 
