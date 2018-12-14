const path= require("path");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
                                

const config={
    mode:  'development',
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'), 
        filename:'../bundle.js'
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