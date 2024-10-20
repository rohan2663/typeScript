const fs = require('fs');
const path = require('path');
function copyData(src,dest){
    fs.readdir(src,(err,files)=>{
        files.forEach(file=>{
            const srcPath = path.join(src,file);
            const destPath = path.join(dest,file);
            const stats = fs.statSync(srcPath);
            if(stats.isDirectory()){
                fs.mkdirSync(destPath,{recursive:true});
                copyData(srcPath,destPath);
            }
            else{
                fs.copyFileSync(srcPath,destPath);
            }
        })
    })
}
copyData('./Directory','./Rohan');