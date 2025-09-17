
import {Input, Button} from "reactstrap";
import React, { Component } from "react";
import initialState from "../../redux/reducers/initialState";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
//import { useParams } from "react-router-dom";
import { withRouter } from "./WithRouter";


     class UpdateProduct extends Component {
       constructor(props) {
        super(props);
        debugger;
          this.state = {
           productName: "",
           unitPrice: "",
           quantityPerUnit: "",
           unitsInStock: "",
           categoryId: "",
           product : null
         };
       }

          componentDidMount() {
          debugger;
           //  this.props.actions.getCategories();
             const id = this.props.params.productId;
            // let productId1 = parseInt(id);// URL'den productId'yi al
              this.state.product = this.props.products.find(
             (product) => product.productId === parseInt(id) );

             if (this.state.product) {
             debugger;
               this.setState({
                 productName: this.state.product.productName,
                 unitPrice: this.state.product.unitPrice,
                 quantityPerUnit: this.state.product.quantityPerUnit,
                 unitsInStock: this.state.product.unitsInStock,
                 categoryId: this.state.product.categoryId,
               });
             }
           }


       handleInputChange = (event) => {
       debugger;
         const { name, value } = event.target;
         this.setState({ [name]: value });
       };

       handleSubmit = (event) => {
       event.preventDefault();
          debugger;
       const product2 = {

                  productName: this.state.productName,
                  quantityPerUnit: this.state.quantityPerUnit,
                  unitsInStock: this.state.unitsInStock,
                  unitPrice: this.state.unitPrice,
                  categoryId: this.state.categoryId,
                  productId: this.props.params.productId
                };
         this.props.actions.saveProduct(product2);
         console.log("aaaaaaa" + product2.productName)
        // this.resetState();
       };

        deleteProduct = () => {
          const product3 = {
                  productName: this.state.productName,
                  quantityPerUnit: this.state.quantityPerUnit,
                  unitsInStock: this.state.unitsInStock,
                  unitPrice: this.state.unitPrice,
                  categoryId: this.state.categoryId,
                  productId: this.props.params.productId
                };
          debugger;
            this.props.actions.deleteProduct(product3);
            this.setState({
                productName: "",
                quantityPerUnit: "",
                unitsInStock: "",
                unitPrice: "",
                categoryId: "",
                productId: "" 
             });
         }

   render() {
     return (
       <form onSubmit= {this.handleSubmit} >
         <h2>Ürün Güncelle</h2>
         <Input
           className="mb-3"
           name="productName"
           placeholder="Product Name"
           value={this.state.productName}
          // value = {this.props.products.productName}
          // onChange={(event) => this.setState({ productName: event.target.value })}
           onChange={this.handleInputChange}


         />
         <Input
           className="mb-3"
           name="unitPrice"
           placeholder="Unit Price"
          value={this.state.unitPrice}
         //value = {this.props.products.unitPrice}
         //  onChange={(event) => this.setState({ unitPrice: event.target.value })}
           onChange={this.handleInputChange}
         />
         <Input
           className="mb-3"
           name="quantityPerUnit"
           placeholder="Quantity Per Unit"
          value={this.state.quantityPerUnit}
        //   onChange={(event) => this.setState({ quantityPerUnit: event.target.value })}
          onChange={this.handleInputChange}
         />
         <Input
           className="mb-3"
           name="unitsInStock"
           placeholder="Units In Stock"
          value={this.state.unitsInStock}
        //   onChange={(event) => this.setState({ unitsInStock: event.target.value })}
          onChange={this.handleInputChange}
         />
         <Input
           className="mb-3"
           name="categoryId"
           type="select"
           value={this.state.categoryId}
          // onChange={(event) => this.setState({ category: event.target.value })}
            onChange={this.handleInputChange}
         >
           <option value="">Select Category</option>
            {this.props.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}


         </Input>
         <Button type="submit"  color="primary" classsName="btn btn-primary btn-sm" > Kaydet </Button>
         <Button type="button" color="danger" onClick={this.deleteProduct}>Ürün Sil</Button>
       </form> //onClick={this.sendSubmit}
     );
   }
 }

 function mapStateToProps(state1) {
   return {
   currentCategory1: state1.changeCategoryReducer,
   categories : state1.categoryListReducer,
   products : state1.productListReducer,
   productInfo : state1.productAddReducer
   }
 }

 function mapActionToProps(dispatch){
     return{
     actions :
     {
         getCategories: bindActionCreators(categoryActions.getCategories,dispatch),
         changeCategory: bindActionCreators(categoryActions.changeCategory,dispatch),
         getProducts: bindActionCreators(productActions.getProducts,dispatch),
       //  getProductsByCategory: bindActionCreators(productActions.getProductsByCategory,dispatch),
         saveProduct: bindActionCreators(productActions.saveProduct,dispatch),
         deleteProduct: bindActionCreators(productActions.deleteProduct,dispatch)
     }
 }
 }

export default connect(mapStateToProps,mapActionToProps)(withRouter(UpdateProduct));
