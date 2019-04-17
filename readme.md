
[![Build Status](https://travis-ci.org/Adekoreday/BankaApp.svg?branch=develop)](https://travis-ci.org/Adekoreday/BankaApp)   [![Coverage Status](https://coveralls.io/repos/github/Adekoreday/BankaApp/badge.svg)](https://coveralls.io/github/Adekoreday/BankaApp)  
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>

# Banka app

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money.. 


## Installation


```bash
1. clone or download the repository
2. cd API
3. run npm install to install after you downlaod.
4. run npm run dev (For development)
5. run npm  run test (For test)


```

## Usage


| S/N| Request type   |  Request API description                                   | Endpoint   			|
|:--:|:--------------:|:---------------------------------------------------------:|:-----------------------------------:|
|  1 |  POST	      |    user can sign up using the user sign up API             |  apiv/v1/auth/signup              |
|  2 | POST           | user can sign in using user sign in API                    | apiv/v1/auth/signin               |
|  3 | POST           |  user can create account using user create account API     |  api/v1/auth/account               |
|  4 | PATCH          | Admin can create new account using Admin create API        | api/v1/account/:accountnumber    |
|  5 | DELETE	      | Admin can delete existing account using Admin delete API   |  api/v1/accounts/:account number   |
|  6 | POST	      | Staff/Admin can debit user account using Debit API	   |transaction/:accountnumber/debit    |
|  7 | POST	      | Staff/Admin can credit user account using Credit API	   | transaction/:accountnumber/credit  |



**ENDPOINT PAYLOAD DESCRIPTION**

**POST** apiv/v1/auth/signup

payload example

```node
{
     "firstName": "Adeyemi",
     "lastName": "adekorede",
      "email": "adeyem@hotmail.com",
      "password":"korey",
       "Type":  "savings",
       "isAdmin": false     	
}

```
**POST** apiv/v1/auth/signin

payload example

```node
{
"email": "adeyemi_adekorede@hotmail.com",
 "password": "korey"
}
```

**POST** api/v1/auth/account 
_route requires a bearer token you got when u signed in_
```node
{
"password": "korey",
"Type": "savings",
"balance": 20000
}

```

**PATCH** api/v1/accounts/:accountnumber
```node
{
	"status":"draft"
}
```


**DELETE**  api/v1/accounts/:accountnumber


**POST**  transaction/account number/debit
```node
{
	"amount": 10000,
	"cashier":3,
	"oldBalance": 20000
	
}
```


**POST** transaction/:accountnumber/credit

```node
{
	"amount": 10000,
	"cashier":3,
	"oldBalance": 20000
	
}
```

## By 
### Adeyemi Adekorede Adeseyi
Postman documentation
https://documenter.getpostman.com/view/5907608/S1ENyyam

alc prebootcamp.

## License
[MIT](https://choosealicense.com/licenses/mit/)
