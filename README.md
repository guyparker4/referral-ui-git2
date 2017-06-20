# Referral API CLIENT & SERVER

## Overview
The server mocks the swagger exposed API on https://uat.iprint.com/services
This allows running local and getting the fully simulated develper environment.

### Before starting the build

```
npm install
```

BUILD:
    node build_local.js
    - Builds the client project using "gulp prod"

RUN:
    node run_local.js
    - Build the client project using "gulp prod"
    - Starts local API Server mocking real API at https://uat.iprint.com/services
  
