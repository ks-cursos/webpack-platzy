const path= require("path");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
                                

const config={
    mode:  'development',
    entry: {
        home:path.resolve(__dirname,'src/js/index.js'),
        precios:path.resolve(__dirname,'src/js/precios.js'),
        contacto:path.resolve(__dirname,'src/js/contacto.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'), 
        filename:'js/[name].js'
    } ,
    module:{
        rules:[
            //Aqui van los louders
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    //callback:'style-loader',
                    use:'css-loader'
                }) 
            }
        ]
    },
    plugins:[
        //aqui va los plugins
        new ExtractTextPlugin("../css/[name].css")
    ]
}
module.exports=config;