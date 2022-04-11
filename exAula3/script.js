let video = document.getElementById("myVideo");

function play() {  
  video.play();
}

function pause() {
  const video = document.getElementById("myVideo");
  video.pause();
}

video.onloadedmetadata = ()=> {progress.max = video.duration;}

video.ontimeupdate = () => {progress.value = video.currentTime;}

let progressVideo = () => {
  let progress = document.getElementById("progress");
  console.log(progress);

  progress.value = video.duration;
}
