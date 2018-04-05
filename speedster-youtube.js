var node = document.createElement('div');
node.className = 'ytp-time-display notranslate';
node.innerHTML = '<span class="ytp-time-duration yg-speed-span">'+document.getElementsByTagName("video")[0].playbackRate+'</span>';
$('.ytp-right-controls').prepend(node);
document.getElementsByTagName("video")[0].onratechange = function(){
    $('.yg-speed-span')[0].innerHTML = document.getElementsByTagName("video")[0].playbackRate;
};
window.addEventListener("keydown", function(event) {
    e = event.which;
    var s = document.getElementsByTagName("video")[0].playbackRate; 
    if(e == 83) { 
        s = s+0.25; 
        document.getElementsByTagName("video")[0].playbackRate = s.toFixed(2);
    } else if(e == 65){ 
        s = s-0.25; 
        document.getElementsByTagName("video")[0].playbackRate = s.toFixed(2); 
    } else if(e == 68) {
        s = 1;
        document.getElementsByTagName("video")[0].playbackRate = s.toFixed(2); 
    }
});