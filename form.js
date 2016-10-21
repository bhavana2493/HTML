
function display() {
    var vars = [], hash;
//taking input from param query......
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
       
        //console.log(hash[i]);
     vars[hash[0]] = hash[1];

    }
    //console.log(vars['sname']);
    return vars;
}
//displaying student information.....
var display1 = display();
document.myform.sn.value =  display1['sname'];
document.myform.rn.value =  display1['roll'];
document.myform.ag.value =  display1['age'];
