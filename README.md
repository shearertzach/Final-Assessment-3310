<p align="center">
  <img src="https://img.shields.io/github/workflow/status/shearertzach/Final-Assessment-3310/Node.js%20CI?label=Prod%20Build&style=for-the-badge"/>
  <img src="https://img.shields.io/github/package-json/v/shearertzach/Final-Assessment-3310?style=for-the-badge"/>
</p>

# Final Assessment (Phone-Formatting)

For the final assessment in ACS3310, we were tasked to formatting phone numbers.

## Installation and Usage

```bash
npm install @zach-shearer/format-phone
```

```JS
// CommonJS
const { formatPhone } = require('@zach-shearer/format-phone')
// or ES6
import { formatPhone } from '@zach-shearer/format-phone'


formatPhone('5555555555') // (555)-555-5555

```