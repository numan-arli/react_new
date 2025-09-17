import { useParams } from "react-router-dom";

export function withRouter(ProductList) {
  return (props) => <ProductList {...props} params={useParams()} />;
}