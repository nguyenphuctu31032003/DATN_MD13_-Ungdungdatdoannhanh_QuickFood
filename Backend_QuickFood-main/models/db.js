const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://quickfoodAdmin:MaVHaoGnL7pc81lW@quickfood.tubmpwk.mongodb.net/').then(()=>{console.log('aabbcc')})
       .catch( (err)=>{
               console.log("Loi ket noi CSDL: ");
               console.log(err);
       });
module.exports = { mongoose }