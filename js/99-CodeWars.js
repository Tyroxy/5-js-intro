
  console.log('************************************************');

  // Get Planet Name By ID

function getPlanetName(id){
    let name;
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

  console.log('************************************************');

  // Sum of Positive

  function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sum += arr[i];
     }
    }
   return sum;
   }

   console.log('************************************************');


//SpeedCode #2 - Array Madness

  function arrayMadness(a, b) {

    let sumA = 0;
    for (let i = 0; i < a.length;  i++) {
      sumA += a[i] * a[i];
    }

    let sumB = 0;
    for (let i = 0; i < b.length;  i++) {
        sumB += b[i] * b[i] * b[i];
    }
       
    return sumA > sumB;
  }

  console.log('************************************************');
