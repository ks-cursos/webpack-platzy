var path= require("path");
const config={
    mode:  'development',
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'), 
        filename:'./bundle.js'
    } ,
    devServer:{
        port:9000
    },
    module:{
        rules:[
            //Aqui van los louders
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}
module.exports=config;