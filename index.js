/* Maps
function solution(scores){

    let frequency = new Map()
    
    for (const score of scores){
        frequency.set(score, (frequency.get(score) || 0) +1)
    }
    
     return scores.filter(score => frequency.get(score) === 1).sort((a, b) => b - a)
    
    
    }
    
    
    console.log(solution([100, 90, 90, 80, 70, 70, 60]))
    */

    // queues and stuff
    function solution(heights, k){
        let queue = [[0, 0]] // start w index 0 and 0 jumps
        let visited = new Set();

        while(queue > 0){
            let [currentIndex, jumps ] = queue.shift();
            if(currentIndex == heights.length - 1){
                return jumps;
            }
            for(let nextIndex = currentIndex + 1; nextIndex < heights.length; nextIndex++){
                if(Math.abs(heights[currentIndex] - heights[nextIndex]) <= k &&
            !visited.has(nextIndex)){
                queue.push([nextIndex, jumps + 1]);
                visited.add(nextIndex);
            }
            }
        }
        return -1
    }

    console.log(solution([1, 3, 2, 6, 4, 5], 2))