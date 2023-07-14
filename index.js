var num = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < num ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    } );
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound (key){
    switch (key){
        case "w" :
            var t1 = new Audio("./sounds/tom-1.mp3");
            t1.play();
        break;

        case "a" :
            var t2 = new Audio("./sounds/tom-2.mp3");
            t2.play();
        break;

        case "s" :
            var t3 = new Audio("./sounds/tom-3.mp3");
            t3.play();
        break;

        case "d" :
            var t4 = new Audio("./sounds/tom-4.mp3");
            t4.play();
        break;

        case "j" :
            var s = new Audio("./sounds/snare.mp3");
            s.play();
        break;

        case "k" :
            var c = new Audio("./sounds/crash.mp3");
            c.play();   
        break;

        case "l" :
            var k = new Audio("./sounds/kick-bass.mp3");
            k.play();
        break;

        default : console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}