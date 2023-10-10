import mongoose from "mongoose"; 

// Søger for at vores scheme bliver overholdt ved alle actions.
mongoose.set('runValidators', true);

// Vores produkt Model
const productSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    recommended: {type: Boolean, default: false},
    discountInPercent: {type: Number, min : 0, max : 100},
    image: {type: String, default:"/products/dummy.jpg"}
},{
    strict: true
})

export default mongoose.models.product || mongoose.model('product', productSchema);
