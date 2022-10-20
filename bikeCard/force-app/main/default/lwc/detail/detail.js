import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';


export default class Detail extends LightningElement {

    // Ensure changes are reactive when product is updated
    product;

    // Private var to track @api productId
    _productId = undefined;

    // Use set and get to process the value every time it's
    // requested while switching between products
    set productId(value) {
        debugger;
        this._productId = value;
        console.log('this productid>>>>'+ this._productId);
        this.product = bikes.find(bike => bike.fields.Id.value === value);
        console.log('product>>>>>'+this.product );
    }
    
    // getter for productId
    @api get productId(){
        debugger;
        console.log('productid return>>>'+this._productId);
        return this._productId;
    }
}