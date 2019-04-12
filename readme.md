
[![Build Status](https://travis-ci.org/Adekoreday/BankaApp.svg?branch=develop)](https://travis-ci.org/Adekoreday/BankaApp)   [![Coverage Status](https://coveralls.io/repos/github/Adekoreday/BankaApp/badge.svg)](https://coveralls.io/github/Adekoreday/BankaApp)  
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>

# Banka app

banka is a Light weight banking app

## Installation

use npm install to install after you downlaod.

```bash
npm install
```

## Usage

**POST** apiv/v1/_auth/sign up

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
**POST** apiv/v1/_auth/sign in

payload example

```node
{
"email": "adeyemi_adekorede@hotmail.com",
 "password": "korey"
}
```

**POST** api/v1/account 
```node
{
"password": "korey",
"Type": "savings",
"balance": 20000
}

```

**PATCH** api_v1/accounts/: account no
```node
{
	"status":"draft"
}
```


**DELETE**  api/v1/accounts/:account number


**POST**  transaction/account number/debit
```node
{
	"amount": 10000,
	"cashier":3,
	"oldBalance": 20000
	
}
```


**POST** transaction/account number/credit

```node
{
	"amount": 10000,
	"cashier":3,
	"oldBalance": 20000
	
}
```

## By 
### Adeyemi Adekorede Adeseyi


alc prebootcamp.

## License
[MIT](https://choosealicense.com/licenses/mit/)
