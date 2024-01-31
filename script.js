const buttonPlayPause = document.getElementById("play-pause");
const forwardButton = document.getElementById("proximo")
const audioChapter = document.getElementById("audio-cap")
const buttonPrevious = document.getElementById("anterior")
const pChapter = document.getElementById("capitulo")
const numberOfChapters = 10;


let isPlaying = 0;
let chapterCurrent = 1


function playingRange() {
    audioChapter.play();
    buttonPlayPause.classList.remove('bi-play-circle-fill');
    buttonPlayPause.classList.add('bi-pause-circle-fill');

}
function buttonRangePause() {
    audioChapter.pause();
    buttonPlayPause.classList.remove('bi-pause-circle-fill')
    buttonPlayPause.classList.add('bi-play-circle-fill')
}

function playinOrPause() {
    if (isPlaying === 0) {
        playingRange();
        isPlaying = 1


    }
    else {
        buttonRangePause();
        isPlaying = 0;
    }
}

function changeRange(){
    pChapter.innerHTML=" Capitulo " + chapterCurrent
}
function nextRange(){
    if(chapterCurrent === numberOfChapters){
        chapterCurrent = 1
    }else{
        chapterCurrent = chapterCurrent +1
    }
    audioChapter.src="books/dom-casmurro/" + chapterCurrent + '.mp3'
    playingRange()
    isPlaying = 1
    changeRange()
}
function previousRange(){
    if(chapterCurrent === 1){
        chapterCurrent = numberOfChapters
    }else{
        chapterCurrent = chapterCurrent -1
    }
    audioChapter.src="books/dom-casmurro/" + chapterCurrent + '.mp3'
    playingRange()
    isPlaying = 1
    changeRange()
}
buttonPrevious.addEventListener('click',previousRange)
buttonPlayPause.addEventListener('click', playinOrPause)
forwardButton.addEventListener('click',nextRange)