## SmartContainer:

# Technologies used:
-  React: Frontend app
-  Axios: Api integration
-  Node JS/Express JS: Backend
-  Bootstrap: Designing


## Project Setup
- Clone Repo : https://github.com/skmayank/analytics-react-app.git
- goto the root directory in terminal

# Backend 
1. cd server
2. npm install (for setup backend dependency)
3. npm start (for starting development server at port 8000)


# Frontend
1. open a new terminal and go to 'client' directory from root directory `cd client`
2. npm install (for installing frontend dependency)
3. npm start ( for starting frontend development server)
   Will run at 'http://localhost:3000/'

# Features Implemented
  -"1) Home
* Fixed left bar column with link to 5 pages
* KegTracker ID selection / dropdown box at the Top / Right-Top corner 
* On selecting KegTracker ID, Temperature-Volume-Battery values should change with some animations
* Getting the Lat-Long from the database for the device, Google Map pin location need to be shown "
* 

"2) Inventory
* Fixed left bar column with link to 5 pages
* Horizontal bar chart with a table showing inventory for the liquid type
* On clicking the slice of the bar chart, the table should filter the data

"3) Retailer Full Product
* Fixed left bar column with link to 5 pages
* A Donut chart which shows the distribution of the products when location is 'Retailer' and Volume status is 'Full'

# Note: 
- According to task discription statement "No database support needs to be included, I have used excel data"
- Read data from excel sheet using 'xlsx' package
- And used routing and controller concepts to create APIs.
- DataTable library used for showing table
- For donut chart i have researched multiple libraries and react-donut-chart fits the best according to requirement but it  is not giving control to show the detail box on the left side so it is not 100 % as requirement but have every functionality.
- For google map on home page, I researched possible solutions and found the closest matching one to the requirement.
 which is not 100 %  as requirement.


