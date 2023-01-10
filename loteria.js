function numberSorter(n, max){
    numbers=[]
    for (i=1; i<=n; i++){
        numbers.push(Math.floor(Math.random()*max))
    }
    console.log(numbers)
}

numberSorter(6,60)