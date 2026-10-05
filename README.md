# WinFIO (Windows Fake I/O for RPI-IO)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=191A1B)
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)

A mock implementation for [RPI-IO](https://github.com/gdorbes/rpi-io) on Windows for Node.js

## Installation

Before installing, make sure you have [Node.js](https://nodejs.org/) installed on your system.

Install the package using npm:
```bash
# npm install @noahbleau/winfio --save-optional
npm install rpi-io --save-optional
```
*The `--save-optional` flag ensures that the packages are listed under `optionalDependencies` in your `package.json` file.*
> [!Warning] Package not yet published
> The WinFIO package is not yet published on the npm registry. Download and install it directly from the repository instead.

Make sure both **WinFIO** and **RPI-IO** are listed in `optionalDependencies` in your `package.json` file to prevent installation issues :
```json
"dependencies": {
    "dotenv": "^18.0.5",
    // ...
},
    "optionalDependencies": {
    "@noahbleau/winfio": "^1.0.0",
    "rpi-io": "^1.0.0"
}
```

In your project, you can now use a basic `if/else` statement to conditionally require **WinFIO** or **RPI-IO** based on the platform:
```javascript
let RIO; // Variable for the I/O module (WinFIO or RPI-IO)
if (process.platform === 'win32') {
    // Using WinFIO for Windows platforms
    RIO = require('@noahbleau/winfio').WinFIO;
} else {
    // Using RPI-IO for Linux platforms
    RIO = require('rpi-io').RIO;
}
```

> [!Note] Raspberry Pi Detection for RPI-IO
> RPI-IO has it's own system to detect if the system is running on a Raspberry Pi, this package won't perform any such detection for Windows.

## Contributing

Please make sure to follow the contribution guidelines before submitting any changes.
See the [CONTRIBUTING.md](https://github.com/noahbleau/WinFIO/blob/main/CONTRIBUTING.md) file for contribution instructions.

## Code of Conduct

Please make sure to read and follow the code of conduct before contributing to the project.
See the [CODE_OF_CONDUCT.md](https://github.com/noahbleau/WinFIO/blob/main/CODE_OF_CONDUCT.md) file for the code of conduct.

## License

This project is licensed under the MIT license, please make sure to read and understand the terms before reusing the code.
See the [LICENSE](https://github.com/noahbleau/WinFIO/blob/main/LICENSE) file for more details.