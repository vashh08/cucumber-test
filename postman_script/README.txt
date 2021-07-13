#Generate Report Steps
Use newman-reporter-htmlextra Node package to generate test reports
1. Download and install LTS version of Node.js
2. Install newman --> npm install -g newman
3. Install htmlextra package --> npm install -g newman-reporter-htmlextra
4. To generate report --> newman run Test.postman_test_run.json -r htmlextra
