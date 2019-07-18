console.log("hi");
function KaprekarsConstant(num) {
    const fourdigit = (num) => {
        let tempNum = "" + num;
        while(tempNum.length < 4) {
            tempNum += 0;
        }
        return tempNum;
    }
    var func = (num)=> {
        let desc = String(num).split('');
        let asc = String(num).split('');
         desc.sort(function(a,b){return parseInt(b)-parseInt(a)});
        asc.sort(function(a,b){return parseInt(a)-parseInt(b)});
         console.log("1", desc, asc);
	     var num1 = "";
	     var num2 = "";
	    desc.forEach(d => num1 += d );
        asc.forEach(d => num2 += d );
        console.log("2", num1, num2);
	    var res = Math.abs(Number(num1)-Number(num2));
	    return res;
    }
    let count = 0;
    // console.log(func(tempNum));
    while(true) {
        num = func(fourdigit(num));
        console.log("inside", num);
        count++;
        if(num == 6174)
        break;
    } 
  // code goes here  
  return count; 
         
}
KaprekarsConstant(2111);