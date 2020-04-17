# TurnipStats
Turnip Statistics for Animal Crossing: New Horizons' Stalk Market

This project is a basic approach to visualise data from turnip prices for multiple users and host it on the web.

## Requirements

* MySQL
* PHP
* R 
  - RMarkdown
  - tidyr
  - ggplot2
  - knitr
  - reshape2
  - RMySQL
* Javascript
  - JQuery

## Setup

1. 

   - Create a new table called `SaleStats` in your database as following:

     | ID | User | Price | Date | Time |
     | --- | --- | --- | --- | --- |
     | INT | TEXT | INT | DATE | BOOLEAN |

      Make ID your primary key.


   - Create a new table called `PurchaseStats` in your database as following:

     | ID | User | Price | Week |
     | --- | --- | --- | --- |
     | INT | TEXT | INT | INT |

      Make ID your primary key.

2. Put your database info into the `form_handler.php` and `TurnipStats.Rmd` files

3. Set up account credentials in the `form_handler.php`

4. Add the correct absolute path to `knit.sh` in `form_handler.php`

5. Add the correct path to your `jquery.min.js` in `index.html`

6. Add an exception for the `knit.sh` so it can be called with `sudo` by the `www-data` user without a password:
   - Call `visudo` from the command line
   - At the bottom, add `www-data ALL=NOPASSWD: /full/path/to/directory/knit.sh`
   - Save file

7. Make `knit.sh` immutable by calling `chattr +i knit.sh`

## Screenshots
![Image of Index (Purchase)](screenshots/index_purchase.png)


![Image of Index (Sale)](screenshots/index_sale.png)


![Image of Prices of the Week](screenshots/prices_of_the_week.png)


![Image of Prices over Time](screenshots/prices_over_time.png)


![Image of Prices by Time of Day](screenshots/prices_by_time_of_day.png)


![Image of Prices by User](screenshots/prices_by_user.png)


![Image of In-Depth Price Analysis by User](screenshots/in-depth_price_analysis.png)


![Image of In-Depth Price Analysis by Weekday](screenshots/prices_by_weekday.png)


![Image of Purchase Prices over Time](screenshots/purchase_price_ot.png)


![Image of Maximum Profit by Week](screenshots/profit_by_week.png)

## Special Thanks

Thanks to adam2326 from CodePen (https://codepen.io/adam2326) for Fancy Forms which was adapted for this project
