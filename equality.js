function objequal() {
//creating an object using
    var person1= {firstname: "Bhavana", lastname:"B.K"};
    var person2= {firstname: "Bhavana", lastname:"B.K"};
// Create arrays of property names
    var aProps = Object.getOwnPropertyNames(person1);
    var bProps = Object.getOwnPropertyNames(person2);
    oe: if(aProps.length==bProps.length)
    {
       for (var i = 0; i < aProps.length; i++) {
           if(aProps[i]!==bProps[i])
           {
             document.getElementById("eq").innerHTML="Object entered are not equal";
             break oe;
           }
       }
    }
   
       for (var i = 0; i < aProps.length; i++) {
             var propName = aProps[i];
 // If values of same property are not equal,
 // objects are not equivalent
            if (person1[propName] !== person2[propName]) {
             document.getElementById("eq").innerHTML="Object entered are not equal";
             return;
             }
            document.getElementById("eq").innerHTML="Object entered are  equal";
    }
   
    }
