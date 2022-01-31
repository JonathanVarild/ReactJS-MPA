# ReactJS-MPA
This is using ReactJS components and JSX to dynamically render HTML pages while not limiting the application to a single HTML-file. This simple library was assembled by me for fun to use with another project where I wanted to use ReactJS with multiple HTML-files. My ReactJS and Javascript knowledge is somewhat limited, which means that you shall use this library at your own risk. Feel free to perform pull requests, create issues, etc.

## Setup new project

**Requirements:**
- NPM installed.
- Visual Studio Code (recommended)
- Live Server *Visual Studio Code Extension* (recommended)

1. Download the library.
2. Open the folder in Visual Studio Code.
3. Open new terminal in Visual Studio Code.
4. Install dependencies for JSX compilation by typing ```npm run install-dep```.
5. Start the JSX compiler by typing ```npm start```. (This will continue running until stopped and is required to run each time you work on your project)
6. Navigate to **/build/index.html** and start Live Server by clicking **Go Live** in the bottom right.


## Making Changes

**Refer to ReactJS/JSX documentation for syntax help**

### Modifying/Creating components
1. All ReactJS components should be modified in the src folder.
- Compiled components are saved in **/build/components/** and shall not be touched.

### Creating a new page.
1. Make a copy of the **/src/pages/index.js** file and rename it to the name of your page.
2. Make a copy of the **index.html** file and rename it to the name of your page.
3. Modify ```<script src="components/pages/**index.js**"></script>``` (HTML-file) by changing **index.js** to reflect the name of the file created in step 1.
4. Build your website using JSX in the file created in step 1. Additional HTML, etc, can be added in the HTML file.

## Deploying Website
1. Compile all components by typing ```npm start``` in your Visual Studio Code terminal.
2. Update all .html files that are using **react.development.js** and **react-dom.development.js** to use production versions!
3. Deploy **/build** folder to your web server.
