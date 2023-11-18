export interface Product {
  id: number;
  code: string;
  name: string;
  categories: Category[];
  brand: string;
  inventory: number;
  barCode: string;
  price: number;
  cost: number;
  stock: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface ProductCreateDto {
  name: string;
  categories: string[];
  brand: string;
  stock: number;
  price: number;
  cost: number;
}

export interface ProductUpdateDto extends ProductCreateDto {
  id: number;
}