import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls:["./product-list.component.css"]
})
export class ProductListComponent implements OnInit{

    constructor(private productService: ProductService){
    }

    ngOnInit(): void {
        console.log("In onInit");
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            err => console.log(err)
        );
    }

    pageTitle : string = "Product List"
    image: number = 50;
    margin : number = 2;
    isImageVisible : boolean = false;
    _listFilter: string;

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products : IProduct[];

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product : IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: '+ message;
    }
    imageVisiblity(): void{
        this.isImageVisible = !this.isImageVisible;
    }
}