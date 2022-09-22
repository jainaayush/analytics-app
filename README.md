## SmartContainer:

# Technologies used:
-  React: Frontend application
-  Axios: Api integration
-  Node JS/Express JS: Backend server
-  Bootstrap: Designing

## Project Setup
- Clone Repo : https://github.com/skmayank/analytics-react-app.git
- goto the root directory in terminal

# Backend 
1. cd backend
2. npm install (for setup backend dependency)
3. npm start (for starting development server at port 8000)


# Frontend
1. open a new terminal and go to 'frontend' directory from root directory `cd frontend`
2. npm install (for installing frontend dependency)
3. npm start ( for starting frontend development server)
   which will run at 'http://localhost:8001/'

# Features Implemented ( 3/5 pages )

  1) Home
* Fixed left bar column with link to 5 pages
* KegTracker ID selection / dropdown box at the Top / Right-Top corner 
* On selecting KegTracker ID, Temperature-Volume-Battery values should change with some animations
* Getting the Lat-Long from the database for the device, Google Map pin location need to be shown "

  2) Retailer Full Product
* Fixed left bar column with link to 5 pages
* A Donut chart which shows the distribution of the products when location is 'Retailer' and Volume status is 'Full'

  3) Inventory
* Fixed left bar column with link to 5 pages
* Horizontal bar chart with a table showing inventory for the liquid type
* On clicking the slice of the bar chart, the table should filter the data

 

# Note: 
- According to task discription "No database support needs to be included ", so i have directly used excel sheet data
- Read data from excel sheet using 'xlsx' package
- Used routing and controller concepts to create APIs in node.
- react-apexcharts library is used for donut chart.
- react-battery-gauge is used for showing battery.
- react-data-table-component library used for showing table.
- For google map on home page, i have used the google api for that but it will show 'for development purpose only' as watermark else we will have to        setup billing in the account.


