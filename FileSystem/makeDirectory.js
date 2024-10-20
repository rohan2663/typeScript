const fs = require('fs');
fs.mkdir('./Rohan',{recursive:true},(err)=>{
    if(err){
        console.log(err);
    }
    console.log('directory created');
})