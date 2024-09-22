
// import mongoose to define schema and to interact with mongoDB
import mongoose from "mongoose";

// define schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

// export for main app use
export default Product;