function numberSorter(n, max){
    numbers=[]
    for (i=1; i<=n; i++){
        numbers.push(Math.floor(Math.random()*max))
    }
    numbersAsc = numbers.sort(function(a, b) {
        return a - b;
    })
    console.log(numbersAsc)
}

numberSorter(6,60)