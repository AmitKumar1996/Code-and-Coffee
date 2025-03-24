// ============================================
// Bundlers in React - Notes
// ============================================

/*
What is a Bundler?
------------------
A bundler is a tool that takes all your JavaScript files, dependencies, and assets,
and combines them into one or more optimized files. These files are then served to the browser,
making your application faster and more efficient.
*/

/*
Why Do We Need a Bundler?
-------------------------
1. Module Management:
   - Browsers don't natively support importing modules directly from multiple files.
   - A bundler resolves dependencies and combines all modules into one or more files.

2. Code Optimization:
   - Bundlers minify and compress code, reducing file size and improving load times.
   - They remove unused code (tree-shaking) and optimize assets like images and CSS.

3. Development Features:
   - Bundlers provide features like Hot Module Replacement (HMR) during development,
     which allows you to see changes in real-time without refreshing the page.

4. Cross-Browser Compatibility:
   - Bundlers can transpile modern JavaScript (ES6+) into older versions (ES5) using tools like Babel,
     ensuring compatibility with older browsers.
*/

/*
How Does a Bundler Work?
------------------------
1. Dependency Graph:
   - The bundler starts from an entry point (e.g., index.js) and builds a dependency graph
     by analyzing `import` and `require` statements.

2. Bundling:
   - It combines all the files in the dependency graph into one or more bundles.

3. Transpilation:
   - If necessary, the bundler uses tools like Babel to convert modern JavaScript (ES6+)
     into older versions (ES5).

4. Optimization:
   - The bundler minifies the code, removes unused code (tree-shaking), and optimizes assets.

5. Output:
   - The final output is one or more files (e.g., bundle.js) that can be served to the browser.
*/

/*
Popular Bundlers in React
-------------------------
1. Webpack:
   - The most widely used bundler in the React ecosystem.
   - Highly configurable and supports a wide range of plugins and loaders.
   - Used by Create React App (CRA) under the hood.

2. Vite:
   - A modern bundler that is faster than Webpack.
   - Uses native ES modules for development, resulting in faster build times.
   - Gaining popularity in the React community.

3. Parcel:
   - A zero-configuration bundler that works out of the box.
   - Easier to set up than Webpack but less flexible.

4. Rollup:
   - Focused on bundling libraries rather than applications.
   - Known for its tree-shaking capabilities.
*/

/*
Key Features of a Bundler
-------------------------
1. Code Splitting:
   - Splits the code into smaller chunks that can be loaded on demand, improving performance.

2. Tree Shaking:
   - Removes unused code from the final bundle, reducing its size.

3. Hot Module Replacement (HMR):
   - Updates modules in the browser without a full page reload during development.

4. Asset Optimization:
   - Compresses and optimizes images, CSS, and other assets.

5. Transpilation:
   - Converts modern JavaScript (ES6+) into older versions (ES5) for compatibility.
*/

/*
Example: Webpack Configuration for React
----------------------------------------
Here’s a basic Webpack configuration for a React application:
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve files from the dist directory
    port: 3000, // Development server port
    hot: true, // Enable Hot Module Replacement (HMR)
  },
};
*/