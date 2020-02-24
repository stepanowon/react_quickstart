let employees = require('./employees');
var str = "";
for (var i=0; i < employees.length; i++) {
    str += '<div>' + employees[i].name + ' : ' + employees[i].email +
              ', ' + employees[i].mobile + '</div>';
}document.getElementById('app').innerHTML = str;
