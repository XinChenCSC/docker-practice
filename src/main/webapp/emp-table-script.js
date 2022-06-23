console.log('Hello Javascript world!!!');

// grab the table  element from the page so
// we can modify how it looks and add elements

// var let const
let table = document.querySelector('table');
// this saves teh table element to the variable


let button = document.getElementById('all-emps')
// WHEN the button is clicked, we
// make a call to the server, fetch the JSON
// DATA and pasrse it and append it to the table

// button.addEventListener('click', sayHello)
button.addEventListener('click', fetchEmps);

function buildTable(data) {

    console.log('buildTable method triggered');

    console.log(data);
    let header = document.createElement('thead'); // these are HTML elements
    let headerRow = document.createElement('tr');

    header.appendChild(headerRow);

    // append the header to the table
    table.appendChild(header); 

    // create a header column for FirstName
    let th1 = document.createElement('th');
    th1.innerHTML = 'First Name';

    // create a header column for last Name
    let th2 = document.createElement('th');
    th2.innerHTML = 'Last Name';

    // create a header column for username
    let th3 = document.createElement('th');
    th3.innerHTML = 'Username';

    // apend the child nodes onto the header
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    headerRow.appendChild(th3);

}

function fetchEmps() {

    // Fetch API is modern interface that allows you
    // to make HTTP requests to a server and process the results that 
    // you get back asynchrnously
    let hostname = window.location.hostname;  // this will grab the IP of where it's deployed  

    // this is a template literal (introduced in ES6)
    fetch(`http://${hostname}:8080/employee-servlet-app/employees`)
    .then(response => response.json()) // trakes a json string and transforms
                                        // it to a javaScript object
    .then(obj => console.log(obj)); // print the JS obj to the console

}

// // object literal in JS
// let user = {

//     firstName: "first",
//     lastName: "last",
//     username : "bob",
//     passowrd : "secretpass"

// }


function sayHello() {

    console.log('Hello there!')

}