# ImageProcessingUdacity
Backend Node.ls Udacity 

**The scripts needed to test/start/build the application**

"start": "nodemon src/index.ts",
"build": "npx tsc",
"jasmine": "jasmine",
"test": "npm run build && npm run jasmine",
"lint": "eslint . --ext .js",
"prettier": "prettier --config .prettierrc \"**/*.js\" --write"

**The endpoints that should be accessed to test the required functionality**

http://localhost:3000/api/images?filename=&width=&height=

**Any other functionality included in the project**

None
