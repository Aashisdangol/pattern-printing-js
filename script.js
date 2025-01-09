{let outputTag1 = document.querySelector(".pattern-1")
    let n = 5
    for(i=1; i<=n; i++){
        let row = "";
        for (j=1; j<=i; j++){
            row += "*  " ;
        }
        outputTag1.innerHTML += row + "<br>";
    }}
    
    
    {// now second pattern 
    let outputTag2 = document.querySelector(".pattern-2")
    let n = 5;
    for(i=1; i<=5; i++){
        let row ="";
        for(j=5; j>=i; j--){
            row += "*  ";
        }
        outputTag2.innerHTML += row + "<br>"
    }}
    
    {// now third pattern 
        let outputTag3 = document.querySelector(".pattern-3");
      
        for(i=0; i<=5; i++){
            row = "";
            for(j=1; j<=5-i; j++){
                row +="&nbsp; &nbsp";
            }
            for(k=1; k<=i; k++){
                row += "*  " ;
            }
            for(l=2; l<=i; l++){
               row +="*  ";
    
            }
            outputTag3.innerHTML += row + "<br>";
    
        }
    }
    
    {// now fourth pattern 
        let outputTag4 = document.querySelector(".pattern-4");
        let n = 5;
        
        for (let i = n; i >= 1; i--) {
            let row = "";  // Initialize an empty string for each row
        
            // Add spaces at the start of each row
            for (let j = 1; j <= n - i; j++) {
                row += "&nbsp;&nbsp;";  // Add two spaces for each iteration
            }
        
            // Add stars after the spaces
            for (let k = 1; k <= i; k++) {
                row += "* ";  // Add a star followed by a space
            }
            for (let l = 2; l<= i; l++){
                row += "* "
            }
            // Append the row to the output with a line break
            outputTag4.innerHTML += row + "<br>";
        }
        
    }
    
    { //Another pattern printing 
        let outputTag5 = document.querySelector('.pattern-5')
        let row = "5";
        let cols = 4;
        for(i=0; i<=5; i++){
            outputTag5.innerHTML += row ;
            for(j=5; j<=9; j++){
                outputTag5.innerHTML += cols ;
            }
            outputTag5.innerHTML += "<br>"
        }
    }