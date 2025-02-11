function solution(scores){

    let frequency = new Map()
    
    for (const score of scores){
        frequency.set(score, (frequency.get(score) || 0) +1)
    }
    
     return scores.filter(score => frequency.get(score) === 1).sort((a, b) => b - a)
    
    
    }
    
    
    console.log(solution([100, 90, 90, 80, 70, 70, 60]))