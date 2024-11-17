function start(){
    document.querySelector('.startmenu').style.scale = 0;
/////////////////////////////////////////////////////////// Function for creating target number
let count; // Declare count outside to access it globally

function targetNumber() {
    count = Math.floor(Math.random() * 10); // Generate new random number
    console.log("Target Number is : " + count);
    document.querySelector('.targetNumber').innerHTML = count;
}

//////////////////////////////////////////////////////////// Function for timer
function timer() {
    let timeCount = 11;
    let timeInterval = setInterval(function () {
        console.log(timeCount);
        if (timeCount > -1) {
            document.querySelector('.timerNumber').innerHTML = timeCount;
            timeCount--;
        } else {
            clearInterval(timeInterval);
            document.querySelector('.box').innerHTML = "";
            const msg = document.querySelector('.msg');
            msg.style.scale =1;
            const showScore = document.querySelector('.showScore')
            showScore.innerHTML =`Your score : ${scoreBoard}`;
        }
    }, 1000);
}

///////////////////////////////////////////////////// Function for creating bubbles
function createBubble() {
    let bubbleHTML = ""; // Clear previous bubbles
    for (let i = 1; i <= 30; i++) {
        let bubblenum = Math.floor(Math.random() * 10); // Generate a new number for each bubble
        bubbleHTML += `<div class="bubble">${bubblenum}</div>`;
    }
    document.querySelector('.box').innerHTML = bubbleHTML;
}

//////////////////////////////////////////////////////// Function for score
let clickedNum = "";
let scoreBoard = 0;

function score() {
    document.querySelector('.box').addEventListener("click", function (detail) {
        if (detail.target.classList.contains("bubble")) { // Ensure we only respond to bubble clicks
            clickedNum = detail.target.innerHTML;
            if (clickedNum == count) {
                scoreBoard += 10; // Increase score for a correct guess
                document.querySelector('.scoreNumber').innerHTML = scoreBoard; 
                createBubble();
                targetNumber(); 
            } else {
                scoreBoard -= 10; // Decrease score for a wrong guess
                document.querySelector('.scoreNumber').innerHTML = scoreBoard; 
                createBubble();
            }
        }
    });
}

// Initial setup
targetNumber(); // Generate initial target number
createBubble(); // Create initial bubbles
timer(); // Start the timer
score(); // Set up score handling

document.querySelector('.playAgain').addEventListener("click" , ()=>{
    window.reloadPage()
})


}