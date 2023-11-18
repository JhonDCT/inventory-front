import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreateDto, ProductUpdateDto } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsHttpRepository {
    constructor(private http: HttpClient) { }

    products(): Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.api}/product`).pipe(
            catchError(error => {
                throw error;
            })
        )
    }

    create(product: ProductCreateDto): Observable<void> {
        return this.http.post<void>(`${environment.api}/product`, product).pipe(
            catchError(error => {
                throw error;
            })
        )
    }

    update(product: ProductUpdateDto): Observable<void> {
        return this.http.patch<void>(`${environment.api}/product/${product.id}`, product).pipe(
            catchError(error => {
                throw error;
            })
        )
    }

    product(id: number): Observable<Product> {
        return this.http.get<Product>(`${environment.api}/product/${id}`).pipe(
            catchError(error => {
                throw error;
            })
        )
    }

    remove(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.api}/product`, { body: { id } }).pipe(
            catchError(error => {
                throw error;
            })
        )
    }
}