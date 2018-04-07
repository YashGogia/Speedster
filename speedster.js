// Select the node that will be observed for mutations
var targetNode = document.getElementsByTagName('body')[0];

// Options for the observer (which mutations to observe)
var config = { subtree: true, childList: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
  mutationsList[0].added.forEach(function(video){
    window.addEventListener("keydown", function(event) {
      e = event.which;
      var s = video.playbackRate; 
      if(e == 83) { 
        s = s+0.25; 
        video.playbackRate = s.toFixed(2);
      } else if(e == 65){ 
        s = s-0.25; 
        video.playbackRate = s.toFixed(2); 
      } else if(e == 68) {
        s = 1;
        video.playbackRate = s.toFixed(2); 
      }
    })
    if(window.location.origin === "https://www.youtube.com"){
      try {
        var node = document.createElement('div');
        node.className = 'ytp-time-display notranslate';
        node.innerHTML = '<span class="ytp-time-duration yg-speed-span">'+video.playbackRate+'</span>';
        $('.ytp-right-controls').prepend(node);
        video.onratechange = function(){
            $('.yg-speed-span')[0].innerHTML = video.playbackRate;
        }; 
      } catch (error) {
        console.error(error);
      }
    }
    if(window.location.origin === "https://www.primevideo.com"){
      try {
        var node = document.createElement('div');
        node.className = 'ytp-time-display notranslate';
        node.innerHTML = '<span class="ytp-time-duration yg-speed-span" style="opacity:0.8">'+video.playbackRate+'</span>';
        $('.webPlayer .bottomPanel .infoBar .right').prepend(node);
        video.onratechange = function(){
            $('.yg-speed-span')[0].innerHTML = video.playbackRate;
        }; 
      } catch (error) {
        console.error(error);
      }
    }
    if(window.location.origin === "https://www.netflix.com"){
      try {
        var node = document.createElement('div');
        node.className = 'ytp-time-display notranslate';
        node.innerHTML = '<h1 class="time-remaining__time yg-speed-span" style="opacity:0.8">'+video.playbackRate+'</h1>';
        $('.PlayerControls--control-element.text-control.video-title').append(node);
        video.onratechange = function(){
            $('.yg-speed-span')[0].innerHTML = video.playbackRate;
        }; 
      } catch (error) {
        console.error(error);
      }
    }
  })
};

var observer = new MutationSummary({
    callback: callback,
    queries: [{
      element: 'video'
    }]
  });