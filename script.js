function highestScore(scores){
    var max = scores[0]; 
    for (var x = 1; x < scores.length; x++){
        if (max < scores[x]){
            max = scores [x];
        }
    }
    return max;
}
var scores = [20, 302, 108, 22, 23]
var maxScore = highestScore(scores);
document.write(maxScore);