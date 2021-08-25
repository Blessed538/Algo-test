
function steps(n){

  for (let i = 0; i < n;i++){
    let stairs = "";
    for (let j = 1; j <= n;j++){
      // console.log(i,j,n)
      if(j >= n -i){
        stairs += "#"
      } else {
        stairs = " "
      }
    }
    console.log(stairs)
  }
 
}

console.log(steps(5))