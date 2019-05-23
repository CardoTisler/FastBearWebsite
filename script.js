//Teenuste lehe script, et muuta description teksti
//vastavale elemendile vajutades
var KeevitusText = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
var MetallitöötlusText = "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>"
var CustomDetailidText = "<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.</p>"
var DetailideTöötlusText = "<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>"
function changeText(index){
    var teenusedText = $("#teenused-description");
    if(index == 0){
        teenusedText.html(KeevitusText);
    } else if (index == 1){
        teenusedText.html(MetallitöötlusText);
    } else if (index == 2){
        teenusedText.html(CustomDetailidText);
    } else if (index == 3){
        teenusedText.html(DetailideTöötlusText);
    }
}

//Galerii Lightbox script
function expandPic(imageNumber){
    //opens the modal, puts black screen in front
    openModal();
    //gets the picture that was clicked based on the imagenumber
    //in the onclick function that's written into the html.
    var pic = $(".galerii-img img")[imageNumber];
    //clones the node so it won't delete itself after
    //being added into the modal.
    var modalContentPic = pic.cloneNode();
    //get the content div where the picture will go
    var modalContent = $("#modal-content")[0];
    //check if theres already a picture in the modal
    if(modalContent.childElementCount > 0){
        modalContent.removeChild(modalContent.childNodes[0]);
        modalContent.appendChild(modalContentPic);
    } else {
        modalContent.appendChild(modalContentPic);
    }
    //add class of css rules to chosen image.
    modalContentPic.classList.add("modal-content-img");
    return currentImage = imageNumber; 
}
var currentImage;
function openModal(){ //modal display: none; -> display: block;
    $("#modal").css("display", "block");
}

function closeModal(){ //modal display: "block"->"none";
    $("#modal").css("display", "none");
}

//Galerii Lightbox script 2, changing pictures
//inside the Lightbox
function nextPicture(){
    expandPic(currentImage + 1);
}
function prevPicture(){
    expandPic(currentImage - 1);
}
//Underline animation script
$(document).ready(function(){
    $(".hover-class").hover(function(){
        $(this).animate({
            "border-bottom-width":"2px"      
        }, 100);
    });
});

$(document).ready(function(){
    $(".hover-class").mouseout(function(){
        $(this).animate({
            "border-bottom-width" : "0px"
        },100)
    });
});

//index page title animation
$(document).ready(function(){
    $("#middle-text h1").animate({
        "opacity" : "1"
    }, 1300)
});
$(document).ready(function(){
    $("#middle-text p").animate({
        "opacity" : "1"
    }, 4000)
});