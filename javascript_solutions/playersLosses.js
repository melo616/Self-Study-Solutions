// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.


// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

function findPlayers(matches) {
    let lossesHash = {};
    let ans = [];
    let noLoss = [];
    let oneLoss = [];
    for (let i=0; i<matches.length; i++) {
        if (matches[i][1] in lossesHash) {
            lossesHash[matches[i][1]] += 1;
        } else {
            lossesHash[matches[i][1]] = 1;
        }
        if (!lossesHash[matches[i][0]]) {
            lossesHash[matches[i][0]] = 0;
        }
    }
    for (const key in lossesHash) {
        if (lossesHash[key] === 1) {
            oneLoss.push(key);
        } else if (lossesHash[key] === 0) {
            noLoss.push(key);
        }
    }
    ans.push(noLoss);
    ans.push(oneLoss);
    return ans;
}

matches1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
console.log(findPlayers(matches1)); // Output: [[1,2,10],[4,5,7,8]]
