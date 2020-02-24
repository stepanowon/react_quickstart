var data = require("./data.json");

var str = "";
str += "<h1>" + data.title + "</h1><hr />"
for (var i=0; i < data.employees.length; i++) {
    var e = data.employees[i];
    str += '<div>' + e.name + ' : ' + e.email +
              ', ' + e.mobile + '</div>';
}
document.getElementById('app').innerHTML = str;
