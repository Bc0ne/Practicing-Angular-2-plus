import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators'
import { IProduct } from "./product";
import { from } from "rxjs";

@Injectable()
export class ProductService{
    private productUrl = 'api/products/products.json'
    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(
            this.productUrl).pipe(
                tap(data => console.log('All: ' + JSON.stringify(data)))
            );
    }

    getProductById(id: number): Observable<IProduct>{
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
            map((products: IProduct[]) => products.find(p => p.productId == id))
        );
    }
}
