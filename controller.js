// Controller
function valgtStolpe(barNo) {

    chosenBar = barNo===chosenBar ? "ingen" : barNo;
 
    updateView();
 }  
    
 
  function leggTilStolpe() {
    
    // push
     if(inputValue <= 0 || inputValue >= 11) {
         alert("Du har skrevet en ugyldi gverdi. Prøv igjen.");
     }
 
     else {
         inputValue = parseInt(inputValue);
         numbers.push(inputValue);
         inputValue = null;
     }
 
     updateView();
  }
 
  function endreStolpe() {
 
     // husk -1 []
     if(inputValue != null && inputValue < 11 && inputValue > 0) {
        numbers[chosenBar - 1] = inputValue
        updateView();
     }
 
     else {
         alert("Husk å velge en verdi før du trykker på knappen.");
     }
     
     /* updateView(); */
  }
 
  function fjernStolpe() {
     
    // splice
     numbers.splice(chosenBar - 1, 1);    
 
     updateView();
  }