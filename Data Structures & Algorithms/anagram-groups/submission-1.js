class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let reversedMap = {};
        for (let i = 0; i<strs.length; i++) {
            let reversed = strs[i].split("").sort().join("");
            if (reversedMap[reversed]) {
                reversedMap[reversed] = [...reversedMap[reversed], strs[i]]
            } else {
                reversedMap[reversed] = [strs[i]];
            }
        }
        
        return Object.values(reversedMap);
    }
}
