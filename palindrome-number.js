var num = 121;

var array = num.toString().split("");
if (array[0] == "-" || array[0] == "+") {
    console.log(false);
} else {
    var back = new Array();
    for (let i = array.length - 1; i >= 0; --i) {
        back[back.length] = array[i];
    }
    if (parseInt(back.join("")) == num) {
        return true;
    } else {
        return false;
    }
}