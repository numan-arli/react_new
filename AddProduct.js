
import {Input, Button} from "reactstrap";
import React, { Component } from "react";
import initialState from "../../redux/reducers/initialState";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

     class AddProduct extends Component {
       constructor(props) {
        super(props);
          this.state = {
           productName: "",
           unitPrice: "",
           quantityPerUnit: "",
           unitsInStock: "",
           categoryId: ""
         };
       }


        componentDidMount() {
        debugger;
          this.props.actions.getCategories();
          this.props.actions.getProducts();
        }
       resetState = () => {
         this.setState({
           productName: "",
           unitPrice: "",
           quantityPerUnit: "",
           unitsInStock: "",
           categoryId: "",
         });
       };

       handleInputChange = (event) => {

         const { name, value } = event.target;
          debugger;
         this.setState({ [name]: value });
       };

       sendSubmit = (event) => {
         event.preventDefault();

         const product = {
           productName: this.state.productName,
           quantityPerUnit: this.state.quantityPerUnit,
           unitsInStock: this.state.unitsInStock,
           unitPrice: this.state.unitPrice,
           categoryId: this.state.categoryId
         };

         this.props.actions.saveProduct(product);
         this.resetState();
       };

   render() {
     return (
       <form onSubmit= {this.sendSubmit} >
         <h2>{this.props.products.productId ? "Güncelle" : "Ürün Ekle"}</h2>
         <Input
           className="mb-3"
           name="productName"
           placeholder="Product Name"
           value={this.props.products.productName}
          // onChange={(event) => this.setState({ productName: event.target.value })}
           onChange={this.handleInputChange}

         />
         <Input
           className="mb-3"
           name="unitPrice"
           placeholder="Unit Price"
          value={this.state.unitPrice}
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
         <Button type="submit"  color="primary" className="btn btn-primary btn-sm" > Kaydet </Button>
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
         saveProduct: bindActionCreators(productActions.saveProduct,dispatch)
     }
 }
 }

  export default connect(mapStateToProps,mapActionToProps)(AddProduct)
