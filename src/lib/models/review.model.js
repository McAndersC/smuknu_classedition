import mongoose from "mongoose"; 

// Søger for at vores scheme bliver overholdt ved alle actions.
mongoose.set('runValidators', true);

// Vores produkt Model
const reviewSchema = new mongoose.Schema({
    name: {type: String},
    byline: {type: String},
    description: {type: String},
    image: {type: String, default:"/reviews/dummy.jpg"}
},{
    strict: true
})

export default mongoose.models.review || mongoose.model('review', reviewSchema);
