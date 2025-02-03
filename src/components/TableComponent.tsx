import styled from "styled-components";
import { ProductsParams } from "../types/types"
import { Container, Table } from "react-bootstrap";

interface TableComponentProps {
    products:ProductsParams [];
    onToggleBought:(productId: string)=>void;
    onDeleteProduct:(productId: string)=>void;
}

const StyledTable = styled.td<{isBought?: boolean}>`
  text-decoration: ${(props) => (props.isBought ? "line-through" : "none")};
`;



const TableComponent: React.FC<TableComponentProps> = ({products, onToggleBought, onDeleteProduct}) => {
    return (
        <Container>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Shop</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {products.map((product) => (
        <tr key={product.id}>
            <StyledTable isBought={product.isBought}>{product.id}</StyledTable>
            <StyledTable isBought={product.isBought}>{product.name}</StyledTable>
            <StyledTable isBought={product.isBought}>{product.shop}</StyledTable>
            <StyledTable isBought={product.isBought}>{product.category}</StyledTable>
            <td>
            <button onClick={() => onToggleBought(product.id)}>Toggle Bought</button>
                <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
            </td>
        </tr>
       ))}
      </tbody>
    </Table>
        </Container>
    )
};

export default TableComponent;


