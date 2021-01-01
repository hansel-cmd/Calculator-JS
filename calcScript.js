//gets the div of output
var output = document.querySelector('.screen.screen-text');

//gets the div of all buttons
var allButton = document.querySelector('.buttons.all');

//gets the off or on button
var AC = allButton.querySelector('.col.text.button-rest.first.quit.red');

//gets the indicator
var indicator = allButton.querySelector('.indicator');
indicator.style.backgroundColor = 'rgba(170, 0, 0, 0.836)';
indicator.style.borderColor = '#rgba(170, 0, 0, 0.836)';


allButton.addEventListener('click' , isPressed);

var isOn = 0;

/* Logic  (Old, nako gi implement lain)

if first input sa digit, then number as is.
if second input sa digit, then move 1 place.

ex: 1 .... then, 2

then (1 *10) + 2 = 12.


After click sa operation, put number sa array ug operation

Ex: arr = [ ];

12 .... then, + 

arr = ['12' , ' + '];


note: put num to array if operation is clicked because if num is
click and put to array, then array would be:

2 ... 3 ... + ...

arr = [ '2', '3' , '+'];


after equals is clicked, then there are 2 possible events after
it:

Case 1: press a number (it restarts everything)
Case 2: continue doing operation


If equal is clicked, array is set to 0, and put answer to array
in case for CASE 2.



For Case 1:
let a flag variable hold value when equal is pressed.

If a number is pressed, check if flag is 1, if it is 1, then
it means it has to restart the equation with that number.

Ex: 1 ... + ... 2 ... = (outputs 3) .... 10
Meaning, 10 is the new number...

For Case 2:
If an operation is clicked, check if flag is 1, if it is 1,
then it means continue doing operation. Hence, put operation
to array.

Ex: 12 ... + ... 3 .... = (outputs 15) ... + 
Hence,
arr = ['12', '+' , '3']
equal is pressed
arr = ['15']
addition is pressed
arr = ['15', '+']



Visual:

+----+-----+-----+                          +----+
| 12 |  +  |  3  | , then equal is pressed  | 15 |
+----+-----+-----+                          +----+

if another operation is pressed, then :

+----+-----+
| 15 |  *  | 
+----+-----+

But if number is pressed: then,

+-----+
|  1  |
+-----+

*/




var arr = [];
var num = 0;
var i = 0;
var ans = 0;
var dot = 0;
// Effects
allButton.addEventListener('mouseover' , mOver);
allButton.addEventListener('mouseout', mOut);

function mOut(e) {

        if(!(e.target.classList.contains('screen-text') || e.target.classList.contains('header') || e.target.classList.contains('indicator'))){
            e.target.style.cursor = 'text';
            if(e.target.classList.contains('red')){
                e.target.style.backgroundColor = 'rgba(200, 0, 0, 0.836)';
                e.target.style.transitionDelay = '.1s';
            }else if(e.target.classList.contains('button-right')){
                e.target.style.backgroundColor = 'rgba(252, 114, 1, 0.836)';
                e.target.style.transitionDelay = '.1s';
            }else if(e.target.classList.contains('first')){
                e.target.style.backgroundColor = '#8e8e8e';
                e.target.style.transitionDelay = '.1s';
            } else{
                e.target.style.backgroundColor = '#b0b0b0';
                e.target.style.transitionDelay = '.1s';
            }   
        } 
}

function mOver(e) {
        if(!(e.target.classList.contains('screen-text') || e.target.classList.contains('header') || e.target.classList.contains('indicator'))){                
            e.target.style.cursor = 'text';
                if(e.target.classList.contains('red')){
                    e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.836)';
                    e.target.style.cursor = 'pointer';
                    e.target.style.transitionDelay = '.1s';
                }else if(e.target.classList.contains('button-right')){
                    e.target.style.backgroundColor = 'rgba(200, 90, 10, 0.836)';
                    e.target.style.cursor = 'pointer';
                    e.target.style.transitionDelay = '.1s';
                } else if(e.target.classList.contains('first')) {
                    e.target.style.backgroundColor = '#6e6e6e';
                    e.target.style.cursor = 'pointer';
                    e.target.style.transitionDelay = '.1s';
                } else {
                    e.target.style.backgroundColor = '6e6e6e';
                    e.target.style.cursor = 'pointer';
                    e.target.style.transitionDelay = '.1s';
                }
        }
}

output.innerHTML = '';
// output.innerHTML = `${arr.join('')}`;

function isPressed(e) {
    
    if(e.target.classList.contains('quit')) {
        arr = [];
        num = 0;
        i = 0;
        ans = 0;       
        if(isOn == 1){
            AC.innerHTML = 'ON';
            isOn = 0;
            output.innerHTML = '';
            indicator.style.backgroundColor = 'rgba(170, 0, 0, 0.836)';
            indicator.style.borderColor = 'rgba(170, 0, 0, 0.836)';
        }else{
            AC.innerHTML = 'OFF';
            isOn = 1;
            output.innerHTML = 0;
            indicator.style.backgroundColor = 'rgba(15, 200, 200, 0.836)';
            indicator.style.borderColor = 'rgba(15, 200, 200, 0.836)';
        }
    }

    if(isOn == 1){
        if(e.target.classList.contains('num7')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 7;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 7;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 7;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                        }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 7;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }
            
        } else if(e.target.classList.contains('num8')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 8;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 8;
                    // output.innerHTML = num;
                    if(dot == 1){
                            output.innerHTML = `${arr.join('')}${num}`;
                            dot = 0;
                        }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 8;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 8;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num9')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 9;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 9;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 9;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 9;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num4')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 4;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 4;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 4;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                        }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 4;
                    if(dot == 1){
                    output.innerHTML = `${arr.join('')}${num}`;
                    dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num5')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 5;
                    if(dot == 1){
                    output.innerHTML = `${arr.join('')}${num}`;
                    dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 5;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 5;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 5;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num6')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 6;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 6;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 6;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 6;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num1')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 1;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 1;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 1;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 1;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num2')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 2;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 2;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 2;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 2;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('num3')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 3;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 3;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 3;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 3;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('zero')) {
            
            if(i == 1){ //bag o ra ni equal, so ma reset number
                arr = [];
                num = 0;
                i = 0;

                if(num == 0){ //if first nga input
                    num = 0;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }else{
                    num = (num * 10) + 0;
                    // output.innerHTML = num;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                        }
                }

            }else{
                if(num == 0){
                    num = 0;
                    if(dot == 1){
                        output.innerHTML = `${arr.join('')}${num}`;
                        dot = 0;
                        }else{
                            output.innerHTML = `${arr.join('')}${num}`;
                        }
                }else{
                    num = (num * 10) + 0;
                    if(dot == 1){
                    output.innerHTML = `${arr.join('')}${num}`;
                    dot = 0;
                    }else{
                        output.innerHTML = `${arr.join('')}${num}`;
                    }
                }
            }

        } else if(e.target.classList.contains('add')) {
            
            if(i == 1){ //after equals, ang ans iadd
                arr.push('+');
                num = 0;
                i = 0;
                // output.innerHTML = '+';
            }else{
                arr.push(num);
                num = 0;
                arr.push('+');
                // output.innerHTML = '+';
            }
            output.innerHTML = `${arr.join('')}`;

        } else if(e.target.classList.contains('dot')) {
            
            if(i == 1){ 
                arr.push('.');
                num = 0;
                i = 0;
            }else{
                arr.push(num);
                num = 0;
                arr.push('.');
            }
            dot = 1;
            output.innerHTML = `${arr.join('')}`;

        } else if(e.target.classList.contains('subtract')) {
            
            if(i == 1){ //after equals, ang ans isubtract
                arr.push('-');
                num = 0;
                i = 0;
            }else{
                arr.push(num);
                num = 0;
                arr.push('-');
            }
            output.innerHTML = `${arr.join('')}`;
    
        } else if(e.target.classList.contains('multiply')) {
            
            if(i == 1){ //after equals, ang ans imultiply
                arr.push('*');
                num = 0;
                i = 0;
            }else{
                arr.push(num);
                num = 0;
                arr.push('*');
            }
            output.innerHTML = `${arr.join('')}`;

        } else if(e.target.classList.contains('divide')) {
            
            if(i == 1){
                arr.push('/'); //after equals, ang ans idivide
                num = 0;
                i = 0;
            }else{
                arr.push(num);
                num = 0;
                arr.push('/');
            }
            output.innerHTML = `${arr.join('')}`;

        } else if(e.target.classList.contains('perc')) {
            
            if(i == 1){ //after equals, ang ans ipercent
                arr.push('%');
                num = 0;
                i = 0;
            }else{
                arr.push(num);
                num = 0;
                arr.push('%');
            }
            output.innerHTML = `${arr.join('')}`;

        } else if(e.target.classList.contains('equal')) {
            arr.push(num);
            ans = eval(arr.join('')); //i-evaluate ang array
            output.innerHTML = ans;
            arr = []; //himoon empty para restart 
            arr.push(ans); //ibutang sa array as a new number
            i = 1; //i-set ug 1 para ilhanan bag o ra ni equal
        } else if(e.target.classList.contains('clear')) {

            var digit = 0;
            if(i <= 9){
                num = 0;
                output.innerHTML = num;
            }
            else{
                digit = num % 10;
                num = num / 10 - (digit * .10);
                output.innerHTML = num;
            }
        }
    }
}