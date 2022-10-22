<p align=center>
  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="node-js-logo" height=400>
</p>

# BookmyMovie
CRUD based RESTful API backend for booking movies


### Pre-setup dependencies

- Git
- Node.js
- npm


### Setup

`HTTPS`

```bash
git clone https://github.com/imvipin4/BookmyMovie.git
```

`SSH`

```bash
git clone git@github.com:imvipin4/BookmyMovie.git
```

`dependencies`

```bash
npm install
```
#### Project Setup

In order to spin up the project, in the root rename .env.example file to  .env with these 3 variables, with your own values.

DATABASE
PORT
SECRET


### Usage

`production`

```bash
npm start
```

`development`

```bash
npm run dev
```


`POST` `/auth/register`


**Sample Request Body:**

```json
{
  "name": "VipinChaudhary",
  "email": "VipinChaudhary@gmail.com",
  "password": "1234567890"
}
```

**Sample Response Body:**

```json
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTJhZWY3NTM5NTUzMzgyOWQ0MmJmMCIsImlhdCI6MTY2NjM2MzEyNywiZXhwIjoxNjY2NDQ5NTI3fQ.F-7XILwlE1Y3jCtXkYmpKfeI7tQl9bPG3vwEC_fBXo0"
}
```

`POST` `/auth/me`

**Sample Request Body:**

```json
{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTJhZWY3NTM5NTUzMzgyOWQ0MmJmMCIsImlhdCI6MTY2NjM2MzYzNCwiZXhwIjoxNjY2NDUwMDM0fQ.G4lnbHlrMGOiJBF09td8zgLemsoQw2CxdK6xzqf1pyM"
}

```

**Sample Response Body:**
```json
{
    "_id": "6352aef75395533829d42bf0",
    "name": "VipinChaudhary",
    "email": "VipinChaudhary@gmail.com",
    "__v": 0
}
```


`POST` `/movie/post`

**Sample Request Body:**
```json
{
  "name":"IRON MAN",
  "genre":"action",
  "actors":["Robert Downey Jr","Gwtneth Paltrow","Jon Faveau"],
  "language":"English",
  "dateRelease":"1 May 2008",
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTJhZWY3NTM5NTUzMzgyOWQ0MmJmMCIsImlhdCI6MTY2NjM2MzYzNCwiZXhwIjoxNjY2NDUwMDM0fQ.G4lnbHlrMGOiJBF09td8zgLemsoQw2CxdK6xzqf1pyM"

}

```
  **Sample Response Body:**
  ```json
{
    "name": "IRON MAN",
    "genre": "action",
    "actors": [
        "Robert Downey Jr",
        "Gwtneth Paltrow",
        "Jon Faveau"
    ],
    "language": "English",
    "dateRelease": "1 May 2008",
    "_id": "6352b2ed82170315a5286e46",
    "__v": 0
}
  ```
`GET` `/movie/getall`

 **Sample Response Body:**
  ```json
  [
    {
        "_id": "6352b2ed82170315a5286e46",
        "name": "IRON MAN",
        "genre": "action",
        "actors": [
            "Robert Downey Jr",
            "Gwtneth Paltrow",
            "Jon Faveau"
        ],
        "language": "English",
        "dateRelease": "1 May 2008",
        "__v": 0
    },
    {
        "_id": "6352b41219a8375ba570d92e",
        "name": "Dead Pool",
        "genre": "action",
        "actors": [
            "Ryan Reynolds",
            "Morena Baccarin",
            "Stan Lee"
        ],
        "language": "English",
        "dateRelease": "12 feb 2016",
        "__v": 0
    }
]
  ```

`GET` `/movie/getone/6352b41219a8375ba570d92e`

**Sample Response Body:**

```json

{
    "_id": "6352b41219a8375ba570d92e",
    "name": "Dead Pool",
    "genre": "action",
    "actors": [
      "Ryan Reynolds",
        "Morena Baccarin",
        "Stan Lee"
    ],
    "language": "English",
    "dateRelease": "12 feb 2016",
    "__v": 0
}
   ```

`PATCH` `/movie/update/6352b41219a8375ba570d92e`

**Sample Request Body:**

```json
{
  "language":"English and Hindi "
}
```
**Sample Response Body:**

```json
{
  "_id": "6352b41219a8375ba570d92e",
    "name": "Dead Pool",
    "genre": "action",
    "actors": [
      "Ryan Reynolds",
        "Morena Baccarin",
        "Stan Lee"
    ],
    "language": "English and Hindi ",
    "dateRelease": "12 feb 20",
    "__v": 0
}
```

`DELETE` `/movie/delete/6352b41219a8375ba570d92e`

**Sample Response Body:**
```
Dead Pool Movie has been deleted
```
`POST` `/welcome`

**Sample Response Body:**
```
Welcome to my REST API 🙌
```

[**NOTE:** The `/welcome` and Every `/movie`  endpoints needs `token` as a request body object or query param or `x-access-token` as a header to validate your request.]