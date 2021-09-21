
const mouseTargetEnter = document.querySelector('.fewd-content p')
mouseTargetEnter.addEventListener('mouseenter', e => {
    mouseTargetEnter.style.fontSize = '1.2em';
  });

  const mouseTargetExit = document.querySelector('.fewd-content p')
  mouseTargetExit.addEventListener('mouseleave', e => {
    mouseTargetExit.style.fontSize = '1.0em';
    });
/*
function increaseTitleSize() {
	window.addEventListener(
	  "mouseenter",
	  function (event) {
		  
		if (event.target.classList.contains("fewd-content")) {
			
			//console.log(document.getElementsByClassName("signin-messages-container"))

		    document.getElementsByClassName("content")[0].style.fontSize = "x-large" //getElementsByClassName("signin-messages-container")  
		  //delivers a nodeList.
		}
		  this.console.log("selectedElement works!!")})}

          increaseTitleSize()

          function decreaseTitleSize() {
            window.addEventListener(
              "mouseleave",
              function (event) {
                  
                if (event.target.classList.contains("fewd-content")) {
                    
                    //console.log(document.getElementsByClassName("signin-messages-container"))
        
                    document.getElementsByClassName("content")[0].style.fontSize = "normal"  //getElementsByClassName("signin-messages-container")  
                  //delivers a nodeList.
                }
                  this.console.log("mouse out works!!")})}
                     
          decreaseTitleSize()
         */