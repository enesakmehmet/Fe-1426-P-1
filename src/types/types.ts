export interface ShopParams {
    id:string;
    name:string;
   }
  
   export interface CategoryParams {
  id:string;
  name:string;
   }
  
   export interface ProductsParams {
    id: string;
    name:string;
     category:string;
     shop:string;
     isBought?:boolean;
}


