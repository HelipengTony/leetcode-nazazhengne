var array = ["flower", "flight", "flour"];
if (array.length > 1) {
    var currentMatch = [];
    var error = 0;

    for (let i = 0; i < array.length; ++i) {
        if (array[i].split("").length) {
            array[i] = array[i].split("");
        } else {
            error++;
        }
    }
    if (error) {
        return "";
    } else {

        var count = 0;
        while (count >= 0) {
            let countTemp = 0;
            for (let i = 0; i < array.length - 1; ++i) {
                if (array[i][count] == array[i + 1][count] && array[i][count] !== undefined && array[i + 1][count] !== undefined) {
                    countTemp++;
                } else {
                    countTemp = 0;
                    break;
                }
            }
            if (countTemp) {
                currentMatch[currentMatch.length] = array[0][count];
                count++;
            } else {
                count = -1;
            }
        }

        if (currentMatch.length) {
            return currentMatch.join("");
        } else {
            return "";
        }
    }
} else {
    if (array[0] == undefined) {
        return "";
    } else {
        return array[0];
    }
}