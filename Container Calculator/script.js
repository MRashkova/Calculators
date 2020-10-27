let path = document.getElementsByClassName("total-m3");

for (let i = 0; i < path.length; i++) {
    var res = path[i].innerHTML;  
}   

res = res.split(" ");
let resPlaceHolder = res[2]; 
resPlaceHolder = Number(resPlaceHolder);

document.getElementById("input").value = resPlaceHolder;

window.onload = function calculate() {
    
    let input = document.getElementById("input").value.replace(",", ".");
    input = input.replace(/,/g, ".");
    input = parseFloat(input) * 35.3146667;
            
    let small = 26.901 * 35.3146667;
    let medium = 53.802 * 35.3146667;
    let big = 62.297 * 35.3146667;
    let message1;
    let message2;
    let message3;
    let image1 = document.getElementById('firstImg');
    let image2 = document.getElementById('secondImg');
    let image3 = document.getElementById('thirdImg');
    let outputOver = document.getElementById('outputOver');

    

    if (input > 0) {
    document.getElementById("result").innerHTML = "Cubic feet (ft&sup3;): " + input.toFixed(2);

        if (input < small) {
            let percentage = (input / small) * 100;
            
            if (percentage >= 0.01 && percentage <= 0.99) {
                message1 = percentage.toFixed(0) + "%";
                image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=100)';           
                message2 = "";
                image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
            else {
                message1 = percentage.toFixed(0) + "%";
                image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=100)';  
                message2 = "";
                image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
        }
        else if (input == small) {
            message1 = "100%";
            image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=100)';  
            message2 = "";
            image2.style.opacity = "0.3";
            image2.style.opacity = 'alpha(opacity=50)';
            message3 = "";
            image3.style.opacity = "0.3";
            image3.style.opacity = 'alpha(opacity=50)';
            outputOver = "";
        }
        else if (input > small && input < medium) {
            let percentage = (input / medium) * 100;
           
            if (percentage >= 0.01 && percentage <= 0.99) {
                message2 = percentage.toFixed(0) + "%";
                image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            } 
            else {
                message2 = + percentage.toFixed(0) + "%";
                image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
        }
        else if (input == medium) {
            message2 = "100%";
            image2.style.opacity = "1";
            image2.style.opacity = 'alpha(opacity=100)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message3 = "";
            image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
        }
        else if (input > medium && input < big) {
            let percentage = (input / big) * 100;
            
            if (percentage >= 0.01 && percentage <= 0.99) {
                message2 = percentage.toFixed(0) + "%";
                image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            } else {
                message3 = percentage.toFixed(0) + "%";
                image3.style.opacity = "1";
                image3.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message2 = "";
                image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
        }
        else if (input == big) {
            message3 = "100%";
            image3.style.opacity = "1";
                image3.style.opacity = 'alpha(opacity=100)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
            image2.style.opacity = 'alpha(opacity=50)';
            outputOver = "";
        }
        else if (input > big) {
            outputOver = "Over the limit!";
            message3 = "";
             image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
        }
    } else if (input === 0) {
        message3 = "";
            image3.style.opacity = "1";
            image3.style.opacity = 'alpha(opacity=50)';  
        message1 = "";
        image1.style.opacity = "1";
            image1.style.opacity = 'alpha(opacity=50)';
        message2 = "";
        image2.style.opacity = "1";
            image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "";
    } else if (input < 0) {
        message3 = "";
             image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "Invalid number.";
    } else if (input != Number) {
        message3 = "";
             image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "Invalid number.";
    } else {
        message3 = "";
             image3.style.opacity = "1";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "";
    }
       document.getElementById("message1").innerHTML = message1;
       document.getElementById("message2").innerHTML = message2;
       document.getElementById("message3").innerHTML = message3;
       document.getElementById("outputOver").innerHTML = outputOver;
}

function calculate2() {
    let input = document.getElementById("input").value.replace(",", ".");
    input = input.replace(/,/g, ".");
    input = parseFloat(input) * 35.3146667;
            
    let small = 26.901 * 35.3146667;
    let medium = 53.802 * 35.3146667;
    let big = 62.297 * 35.3146667;
    let message1;
    let message2;
    let message3;
    let image1 = document.getElementById('firstImg');
    let image2 = document.getElementById('secondImg');
    let image3 = document.getElementById('thirdImg');
    let outputOver = document.getElementById('outputOver');

    

    if (input > 0) {
    document.getElementById("result").innerHTML = "Cubic feet (ft&sup3;): " + input.toFixed(2);

        if (input < small) {
            let percentage = (input / small) * 100;
            
            if (percentage >= 0.01 && percentage <= 0.99) {
                message1 = percentage.toFixed(0) + "%";
                image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=100)';           
                message2 = "";
                image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
            else {
                message1 = percentage.toFixed(0) + "%";
                image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=100)';  
                message2 = "";
                image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
        }
        else if (input == small) {
            message1 = "100%";
            image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=100)';  
            message2 = "";
            image2.style.opacity = "0.3";
            image2.style.opacity = 'alpha(opacity=50)';
            message3 = "";
            image3.style.opacity = "0.3";
            image3.style.opacity = 'alpha(opacity=50)';
            outputOver = "";
        }
        else if (input > small && input < medium) {
            let percentage = (input / medium) * 100;
           
            if (percentage >= 0.01 && percentage <= 0.99) {
                message2 = percentage.toFixed(0) + "%";
                image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            } 
            else {
                message2 = + percentage.toFixed(0) + "%";
                image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
        }
        else if (input == medium) {
            message2 = "100%";
            image2.style.opacity = "1";
            image2.style.opacity = 'alpha(opacity=100)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message3 = "";
            image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
        }
        else if (input > medium && input < big) {
            let percentage = (input / big) * 100;
            
            if (percentage >= 0.01 && percentage <= 0.99) {
                message2 = percentage.toFixed(0) + "%";
                image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message3 = "";
                image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            } else {
                message3 = percentage.toFixed(0) + "%";
                image3.style.opacity = "1";
                image3.style.opacity = 'alpha(opacity=100)';  
                message1 = "";
                image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
                message2 = "";
                image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
                outputOver = "";
            }
        }
        else if (input == big) {
            message3 = "100%";
            image3.style.opacity = "1";
                image3.style.opacity = 'alpha(opacity=100)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
            image2.style.opacity = 'alpha(opacity=50)';
            outputOver = "";
        }
        else if (input > big) {
            outputOver = "Over the limit!";
            message3 = "";
             image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
        }
    } else if (input === 0) {
        message3 = "";
            image3.style.opacity = "1";
            image3.style.opacity = 'alpha(opacity=50)';  
        message1 = "";
        image1.style.opacity = "1";
            image1.style.opacity = 'alpha(opacity=50)';
        message2 = "";
        image2.style.opacity = "1";
            image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "";
    } else if (input < 0) {
        message3 = "";
             image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "Invalid number.";
    } else if (input != Number) {
        message3 = "";
             image3.style.opacity = "0.3";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "0.3";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "0.3";
                image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "Invalid number.";
    } else {
        message3 = "";
             image3.style.opacity = "1";
                image3.style.opacity = 'alpha(opacity=50)';  
            message1 = "";
            image1.style.opacity = "1";
                image1.style.opacity = 'alpha(opacity=50)';
            message2 = "";
            image2.style.opacity = "1";
                image2.style.opacity = 'alpha(opacity=50)';
        outputOver = "";
        document.getElementById("result").innerHTML = "";
    }
       document.getElementById("message1").innerHTML = message1;
       document.getElementById("message2").innerHTML = message2;
       document.getElementById("message3").innerHTML = message3;
       document.getElementById("outputOver").innerHTML = outputOver;
}
