 $(document).ready(function(){
   $("#start").click(StartGame);

   function StartGame() 
   {
    $("#audio")[0].play();
   }
 });

/* In your JavaScript app, create a wavesurfer instance, passing the container selector along with some options: Go to The library and see more options 
*/

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

/* Here upload your audio */

wavesurfer.load('ghost.mp3');

/* Here Play audio */

wavesurfer.on('ready', function () {
    wavesurfer.play();
});
