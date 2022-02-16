
// first make a nice background and when user clicks on a button it says turn on and off , picture will come out 
// then the other things for light and washing machine. 
//it will be a lot of  buttons and listeners to those buttons
// when user click on tv button . it will have two options, turn off and turn on 
// when it says turn off, it will hiiden the buttons and could go back to main menu
// 

document.addEventListener('DOMContentLoaded', (event) => {

const content = document.getElementsByClassName('content')[0]
const innerDoor = document.getElementsByClassName('inner-door')[0]

const doorPhone = document.getElementsByClassName('container')[2]

const doorBtn = doorPhone.getElementsByTagName('button')[0]

const washing = document.getElementsByClassName('washing')[0]
const washingBtn = document.getElementsByClassName('washingBtn')[0]
const body = document.getElementsByTagName('body')[0]

allUtilities()

      function allUtilities(){
            fetch('http://localhost:3000/utilities')
           .then(r => r.json())
           .then(utilities => getUtilities(utilities))
      }
           function getUtilities(utilities){
              utilities.forEach(utility => {
              const div = document.createElement('div')
              div.className = "each-utility"
              doorBtn.dataset.id = utility.id 
              const li = document.createElement('li')
              const washingLi = document.createElement('li')

              if( utility.door === false){
               innerDoor.src = "photo/newdoor.jpg"
              }else{
               innerDoor.src = "photo/bluedoor1.jpg" 
              }
              if (utility.washing === true){
               washing.src = "photo/new machine1.jpg"
              }else {
               washing.src= "photo/washing machine.gif"
              }
              li.innerHTML = utility.door
              washingLi.innerHTML = utility.washing
             washingLi.id = 'washing'
              div.append(washingLi)
              div.append(li)
              body.append(div)
                   })
              }

content.addEventListener('click', function(event){

            const utility = document.getElementsByClassName('each-utility')[0]

            const washingInfo = document.getElementById('washing')
            
            let washingStatus =  washingInfo.innerHTML
          
            const id = 3 
          //   const id = doorBtn.dataset.id
            const li = utility.getElementsByTagName('li')[0]
            
            let status = li.innerHTML
            if( doorBtn.textContent === "Close Door"){
                 innerDoor.src = "photo/bluedoor1.jpg" 
                 doorBtn.textContent = "Open Door"
                  status = "true"
           }else if(event.target.className === 'doorBtn' ){
                  innerDoor.src = "photo/newdoor.jpg"
                  doorBtn.textContent = "Close Door"    
                  status = "false"
            }
            if (washingBtn.textContent === "stop washing"){
                 washing.src = "photo/new machine1.jpg"
                 washingBtn.textContent = "run washing"
                  washingStatus = "true"
                 
            }else if (event.target.className === 'washingBtn') {
                    washing.src = 'photo/washing machine.gif'
                    washingBtn.textContent = "stop washing"
                      washingStasus = "false"
               }

              fetch(`http://localhost:3000/utilities/${id}`,{

                   method: "PATCH",
                   headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'       
                   },
                   body: JSON.stringify({ door: status, washing: washingStatus  }) 
             }) 

             if (event.target.className === 'tempBtn'){
                  
             }
             
            
       
         
             


   })

   
  

     

   








    







    
});



//     const utility =
//           {
//          home_id: 7,
//          user_id: 7,
//          door: false,
//          temperature: 52,
//          light: false,
//         alarm_system: true
//         }
//         fetch('http://localhost:3000/utilities',{
//             method: "PATCH", 
//             body:JSON.stringify(utility)
//       })
//       .then(r => r.json())
//       .then(json => console.log(json))



