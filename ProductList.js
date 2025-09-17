import React, { Component } from 'react'
import {Badge, Table,Button} from "reactstrap"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from 'alertifyjs'
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";



 class ProductList extends Component {

 componentDidMount(){

 debugger;
  this.props.actions.getProducts();

 }


 addToCart = (product) =>{
 debugger;
 this.props.actions.addToCart({quantity:1,product});
 alertify.success(product.productName + "ürün eklendi")
 }



  render() {
  console.log("Current Category: ", this.props.currentCategory1);

    return (
      <div>
      <h3>
      <Badge color= "warning"> Products </Badge>
      <Badge color = "success">
      {this.props.currentCategory1.categoryName}

      </Badge>
       </h3>

      <Table>
        <thead>

          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>categoryId</th>
            <th>ekle</th>
           </tr>

        </thead>
        <tbody>

            {this.props.products.map(product =>(

                        <tr key= {product.id}>
                        <th scope="row"> {product.productId}</th>
                         <td><Link to={"/saveproduct/"+product.productId}>{product.productName}</Link></td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                         <td>{product.categoryId}</td>
                        <Button color="success" onClick={()=> this.addToCart(product)}>ekle</Button>
                      </tr>

            ))}
        </tbody>
      </Table>



      </div>
    )
  }
}




function mapStateToProps (state) {
    return {
            currentCategory1: state.changeCategoryReducer,
            products : state.productListReducer,
            product : state.productAddReducer,
            productInfo : state.productAddReducer
            }
  }

  function mapDispatchToProps(dispatch){
      return{
      actions :
      {
          getProducts: bindActionCreators(productActions.getProducts,dispatch),
          addToCart:  bindActionCreators(cartActions.addToCart,dispatch)
      }
  }
  }



 export default connect(mapStateToProps,mapDispatchToProps)(ProductList)