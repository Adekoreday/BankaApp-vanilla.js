[![Build Status](https://travis-ci.org/Adekoreday/BankaApp.svg?branch=develop)](https://travis-ci.org/Adekoreday/BankaApp)  [![Coverage Status](https://coveralls.io/repos/github/Adekoreday/BankaApp/badge.svg?branch=develop)](https://coveralls.io/github/Adekoreday/BankaApp?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/5ae99f8d964b493b7656/maintainability)](https://codeclimate.com/github/Adekoreday/BankaApp/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5ae99f8d964b493b7656/test_coverage)](https://codeclimate.com/github/Adekoreday/BankaApp/test_coverage) [![Greenkeeper badge](https://badges.greenkeeper.io/Adekoreday/BankaApp.svg)](https://greenkeeper.io/)


# Banka app

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money for Andela-bootcamp.. 


## Installation


```bash
1. clone or download the repository
2. run npm install to install after you downlaod.
3. Add a .env file to root folder
4. Add secretkey, TESTDB url productionDB url
5. run npm run dev (For development)
6. run npm  run test (For testing)


```

## Usage


| S/N| Request type   |  Request API description                                   | Endpoint                     			|
|:--:|:--------------:|:---------------------------------------------------------:|:-----------------------------------:|
|  1 |  POST	        |    user can sign up using the user sign up API             |  apiv/v1/auth/signup               |
|  2 | POST           | user can sign in using user sign in API                    | apiv/v1/auth/signin                |
|  3 | POST           |  user can create account using user create account API     |  api/v1/auth/account               |
|  4 | PATCH          | Admin can activate or deactivate an account                | api/v1/account/:accountnumber      |
|  5 | DELETE	        | Admin can delete existing account using Admin delete API   |  api/v1/accounts/:accountnumber    |
|  6 | POST	          | Staff/Admin can debit user account using Debit API	       | transaction/:accountnumber/debit   |
|  7 | POST	          | Staff/Admin can credit user account using Credit API	     | transaction/:accountnumber/credit  |
|  8 | GET 	          | Staff/Admin can get all accounts owned by a user           | user/:mail/accounts                |
|  9 | GET	          | Staff/Admin can GET an account based on its status  	     | accounts?status                    |
| 10 | GET            | Staff/Admin can GET an  account that exist before   	     | accounts/:accountnumber 					  |
| 11 | GET            | Staff/Admin can GET all accounts in the APP         	     | accounts													  |
| 12 | GET	          | User can GET Transaction by ID												     | transactions/:id								    |

## Technologies 
*Node.js*
*express.js*
*postgres*

## By 
### Adeyemi Adekorede Adeseyi

### API documentation on

https://bankaandela.herokuapp.com/api-docs/

proudly andela Nigeria bootcamp. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
