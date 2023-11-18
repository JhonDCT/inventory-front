import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductsHttpRepository } from 'src/app/core/repositories/products-http.repository';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productHttp: ProductsHttpRepository,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.products$ = this.productHttp.products();
  }

  onToSave(): void {
    this.router.navigateByUrl('/products/create');
  }

  onToUpdate(id: number): void {
    this.router.navigate(['/products/update', id]);
  }

  // TODO: Mostrar alert de confirmación para eliminar
  onRemove(id: number): void {
    this.productHttp.remove(id).subscribe(
      () => {
        this.products$ = this.productHttp.products();
        this.cd.detectChanges();
      }
    );
  }
}
