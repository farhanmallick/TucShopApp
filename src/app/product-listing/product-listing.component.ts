import { Component, OnInit } from '@angular/core';
import { MainscreenService } from '../main-screen/mainscreen.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  productsArray = [] = [];
 constructor(private prodService:MainscreenService,private activeRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
          params=> {
               console.log("params",params['params'].category)
              this.getProducts(params['params'].category)
          }
       );

   // console.log(urlCategory);
    //this.getProducts(urlCategory)
  }

  getProducts(str : any){
   
   
    this.prodService.getProducts(str).subscribe(d=>{
      this.productsArray = d;
    })
  }

  sendProducttoCheckout(prod :Object){
    this.prodService.sendMessage(prod);
    
  }
}
