//function save(){
    //var nums=document.getElementById("nos").value;
    //var nos = [2,3];
    //var anums = {
      //  2:['a','b','c'],
     //   3:['d','e','f']
   // }
   // document.write(anums[nos[0],[1]]);
   //document.getElementById("res").innerHTML=anums[nums];
//}
/*function save(){
    var digits=document.getElementById("nos").value;
    
    var lett = [];
    lett[2] = "abc";
    lett[3]="def";
    lett[4]="ghi";
    lett[5]="jkl";
    lett[6]="mno";
    lett[7]="pqrs";
    lett[8]="tuv";
    lett[9]="wxyz";
    var res = [];
    if (digits == null || digits == 0){
        return res;
    }
        var temp = [];
        getString(digits,temp,res,lett);
       document.getElementById("res").innerHTML=res;  
}
function getString(digits,temp,res,lett){
    if(digits.length == 0){
        var arr =[];
        for(var i=0;i<temp.length;i++){
            arr[i] = temp[i];
        }
        res.push(arr.join(''));
        return;
    }
    var curr = parseInt(digits.substring(0,1));
    var letters = lett[curr];
    for(var i=0; i<letters.length; i++){
        temp.push(letters.charAt(i));
        getString(digits.substring(1), temp, res, lett);
        temp.pop();    
    }
}
*/