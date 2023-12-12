// START:  #########################SIMULATED PROGRAM THAT BUY RICE IF NOT BUY BOLE AND CLAP 20 TIMES ########################################

// store 5 in a variable name it 
// const distanceInMeter = 100 

const availableFood = "Rice"

const clappingTimes = 20

const distanceInMeter = 100 // statement

//const availableFood1 = "Rice"

//const availableFood2 = "Bole"

// distanceInMeter = 45

if(availableFood != "Rice"){
  
  console.log("Food is available, am coming back. But the available food is ", availableFood)
  
  if(availableFood == "Bole"){
    
    for(let i = 0; i < clappingTimes; i++){
      
      console.log("Keep clapping ", i + 1)
      
      
    }
    
    
  }
  
}

if(availableFood == "Rice") {
  
  console.log("Nice Job !!!")
  
}

// END #################################################################

// START:  learning if statement

 //: conditionals  if(true){ ...  }
  
  if (5 == 1) {
    
    const selectedFood = "Rice"
    
    console.log("is true", selectedFood)
   
  }
//: end learning if statement

//:  START LEARNING LOOPS


//: loops  if(){}, for (let i = 0; i < 5; i++) {}
const claps = 5

for(let i = 0; i < claps; i++) {
  
  console.log("Clapping ... ", i)
  
  
}




//: END LEARNING LOOPS

//: START LEARNING FUNCTIONS


//: function - buyMeFood() - using,  function buyMeFood() {  }
// const num = 23 + 3

function addNumber(emma) {
  
  const a = 34
  
  const b = 10
  
  const c = a + b
  
  console.log("Result is ", c, emma)
  
 // return c
  
  
}

addNumber("lo")


//: END LEARNING FUNCTIONS

function buyMeFood (availableFood) {
   
//const availableFood = "Rice"

const clappingTimes = 20

const distanceInMeter = 100 // statement

if(availableFood != "Rice"){
  
  console.log("Food is available, am coming back. But the available food is ", availableFood)
  
  if(availableFood == "Bole"){
    
    for(let i = 0; i < clappingTimes; i++){
      
      console.log("Keep clapping ", i + 1)
      
      
    }
    
    
  }
  
}

if(availableFood == "Rice") {
  
  console.log("Nice Job !!!")
  
  
  
}
  
}

buyMeFood("Bole")









