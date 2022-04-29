# Currency Converter application

## Endpoints:

- convertCurrency
  This method helps in converting the input to required currency, Please find the sample request/response below,

  #### Request sample

  ````var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
  "value": 12.56,
  "from": "USD",
  "to": "INR",
  date: 'yyyy-mm-dd'
  });
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };
  fetch("url", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));```
  ````

#### Response sample

##### without date

```
{
    'USD-INR': value
}
```

##### with date

```
{
   {'yyyy-mm-dd': {'USD-INR': value}}
}
```
