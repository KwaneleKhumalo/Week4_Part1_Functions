var myHeight =  Number(5) + "'" + Number(10) + '"';
var myCountry = 'USA';
var fname = 'Kwanele';

function myFunction(name, height, country){
    console.log(name, height, country);
    return alert(name + '' + height + '' + country)
}

myFunction(fname, myHeight, myCountry);