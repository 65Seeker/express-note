const path=require('path');

module.exports={
    entry: path.join(__dirname,'src/js/app/index.js') ,
    output: {
        path:path.join(__dirname,'public/js'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./public',
        host:'localhost',
        port:8080,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    }
}