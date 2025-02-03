import { useState } from 'react';
import './App.css'
import { ProductsParams } from './types/types';
import { Button, Form } from 'react-bootstrap';
import { shops,categories  } from './data/data';
import { nanoid } from 'nanoid'
import TableComponent from './components/TableComponent';

function App() {
  const [products, setProducts] = useState<ProductsParams[]>([]);
  const [productName, setProductName] = useState<string>("")
  const [productShop, setProductShop] = useState<string>("")
  const [productCategory, setProductCategory] = useState<string>("")

  const handleAddProduct = () => {
    if(productName === "" || productShop === "" || productCategory === ""){
      alert ("Lütfen bütün alanları doldurunuz!")
      return
    }

    const newProduct: ProductsParams ={
      id: nanoid(),
      name: productName,
      shop: productShop,
      category: productCategory,
      isBought: false
    };
    setProducts([...products, newProduct]);
    setProductName("")
    setProductShop("")
    setProductCategory("")
  };

  const handleToggleBought = (productId: string) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, isBought: !product.isBought }
        : product
    ));
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <><div className='container d-flex justify-content-center gap-5 '>
      <Form>
        <Form.Group  controlId="productName">
          <Form.Label>Product Name </Form.Label>
          <Form.Control value={productName} onChange={(e) => setProductName(e.target.value)} type="text" placeholder="Enter a product name" />
        </Form.Group>
        <Form.Group  controlId="productShop">
          <Form.Label>Shop</Form.Label>
          <Form.Control as="select" value={productShop} onChange={(e) => setProductShop(e.target.value)}
          >
            <option>Select Shop</option>
            {shops.map((shop) => (
              <option key={shop.id} value={shop.name}>{shop.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group  controlId="productCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}
          >
            <option>Select Category</option>
            {categories.map((Category) => (
              <option key={Category.id} value={Category.name}>{Category.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant='secondary' onClick={handleAddProduct}>Add Product</Button>
      </Form>
      <TableComponent 
        products={products} 
        onDeleteProduct={handleDeleteProduct} 
        onToggleBought={handleToggleBought}
      />
    </div></>
  )
}

export default App
