const path = require("path") 

// Require the new plugin
const HtmlWebpackPlugin = require("html-webpack-plugin") 

module.exports = { 
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: { 
    extensions: [".ts", ".tsx", ".js", ".json"] 
  }, 
  output: { 
    path: path.join(__dirname, "/dist"), 
    filename: "index_bundle.js" 
  }, 
  module: { 
    rules: [ 
      {  
        test: /\.tsx?$/,  
        loader: "awesome-typescript-loader"  
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"  // Specify the HTML template to use
    })
  ]
}