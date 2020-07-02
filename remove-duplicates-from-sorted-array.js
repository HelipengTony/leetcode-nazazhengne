/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let key = 1;
    let len = nums.length;
    let finish = false;

    while (key < len) {
        if (!finish) {
            if (nums[key] == nums[key - 1]) {
                nums[key - 1] = "k";
            }
            if (key + 1 < len) {
                key++;
            } else {
                key = 0;
                finish = true;
            }
        } else {
            if (nums[key] == "k") {
                nums.splice(key, 1);
            } else {
                key++;
            }
        }
    }

    return nums.length;
}