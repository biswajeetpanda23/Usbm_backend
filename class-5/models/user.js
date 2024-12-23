const mongoose = require("mongoose");
require("dotenv").config();


const userSchema = mongoose.Schema({
 name:{String,require:true},
 email:{String,require:true},
 age:{number,require:true},
 redg:{number,require:true},
 city:{String,require:true},
 contact:{number,require:true},

},
{timestamps:true}
);

const userModel = mongoose.model("user",userSchema);
module.exports=userModel;