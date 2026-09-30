class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let reversedMap = {};
        for (let str of strs) {
            const reversed = str.split('').sort().join('');
            if (!reversedMap[reversed]) {
                reversedMap[reversed] = []
            }
            reversedMap[reversed].push(str);
        }
        
        return Object.values(reversedMap);
    }
}
