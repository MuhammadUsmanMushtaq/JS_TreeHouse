const url = require ('url');

const myUrl = new URL('http://myweb.com/hello.html?id=100&status=active');

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//HOST( root domain)
console.log(myUrl.host);

//Hostname dosenot get port
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialise query
console.log(myUrl.search);

// param object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});