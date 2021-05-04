//GLOBAL VARIABLES
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
var isSmall = false
 var heix = screen.height 
 
if (heix<800){
  isMobile =true
  isSmall=true
  
}
console.log(heix)
let slider
let slider1
let slider2
let sel
let sel1
let sel2
let lense = 0
let button
let button1
let button2

let loadingWait = false

let genre = 0
let play = 1
let dj = 0
let stopped = false
let userMidi
let fileUpload = false
let fileName

 
let globalLatch = 7 
let globalBPM = 63 
let globalSpeed = 12 

if(isMobile==false){
var rx = 50;
var ry = 15;
var rd = 30;
var rc = 255
var rstate = true;

var ox = 220;
var oy = 15;
var ostate = true;

var yx = 380;
var yy = 15;
var ystate = true;

var gx = 550;
var gy = 15;
var gstate = true;

var bx = 707;
var by = 15;
var bstate = true;

var px = 845;
var py = 15;
var pstate = true;

var vx = 880;
var vy = 75;
var vstate = true;

var lrx = 90;
var lrx1 = 150;
var lry = 117
var lrd = 30;
var lrc = 255
var lrstate = true;

var lox = 260;
var lox1 = 320;
var loy = 290
var lostate = true;

var lyx = 420;
var lyx1 = 480;
var lyy = 450
var lystate = true;

var lgx = 590;
var lgx1 = 650;
var lgy = 620
var lgstate = true;

var lbx = 747;
var lbx1 = 807;
var lby = 777
var lbstate = true;

var lpx = 870;
var lpx1 = 930;
var lpy = 900
var lpstate = true;
}

if(isMobile==true){
var rx = 20;
var ry = 15;
var rd = 30;
var rc = 255
var rstate = true;

var ox = 140;
var oy = 15;
var ostate = true;

var yx = 260;
var yy = 15;
var ystate = true;

var gx = 380;
var gy = 15;
var gstate = true;

var bx = 510;
var by = 15;
var bstate = true;

var px = 630;
var py = 15;
var pstate = true;

var vx = 662;
var vy = 75;
var vstate = true;

var lrx = 50;
var lrx1 = 110;
var lry = 80
var lrd = 30;
var lrc = 255
var lrstate = true;

var lox = 170;
var lox1 = 230;
var loy = 200
var lostate = true;

var lyx = 290;
var lyx1 = 350;
var lyy = 320
var lystate = true;

var lgx = 410;
var lgx1 = 470;
var lgy = 440
var lgstate = true;

var lbx = 537;
var lbx1 = 597;
var lby = 567
var lbstate = true;

var lpx = 655;
var lpx1 = 715;
var lpy = 685
var lpstate = true;
}




//create idea of _Concept class
let CConcept = {}
let FConcept = {}
let BbConcept = {}
let EbConcept = {}
let AbConcept = {}
let DbConcept = {}
let GbConcept = {}
let BConcept = {}
let EConcept = {}
let AConcept = {}
let DConcept = {}
let GConcept = {}
//Create idea of skeleton class
let skeleton= {}
let soundMaker ={}
let circleFactory ={}
let lineFactory = {}

let turntable = {}
let playerArray = []


function updateGoldenArray(goldenArray) {
  console.log(goldenArray)
}


 
function checkPageFocus() {
//  let body = doc ument.querySelector('body');
//  let log = document.getElementById('log');


if (document.hasFocus()) {
  Tone.Master.mute = false;
  }
    else { 
 Tone.Master.mute = true;
  }
} 
setInterval(checkPageFocus, 100);






 

var volumeFader = -18
var dry = new Tone.Volume(volumeFader).toDestination()
//var chorus = new Tone.Chorus().connect(dry)
var synthType = "piano"

 // Active 
const piano = new Tone.Sampler({ 
	urls: { 
    "A0": "A0.mp3",
    "A#0": "As0.mp3",
    "B0": "B0.mp3",
    "C0": "C0.mp3",
    "C#0": "Cs0.mp3",
    "D0": "D0.mp3",
    "D#0": "Ds0.mp3",
    "E0": "E0.mp3",
    "F0": "F0.mp3",
    "F#0": "Fs0.mp3", 
    "G0": "G0.mp3", 
    "G#0": "Gs0.mp3",
    
    "A1": "A1.mp3",
    "A#1": "As1.mp3",
    "B1": "B1.mp3",
    "C1": "C1.mp3",
    "C#1": "Cs1.mp3",
    "D1": "D1.mp3",
    "D#1": "Ds1.mp3",
    "E1": "E1.mp3",
    "F1": "F1.mp3",
    "F#1": "Fs1.mp3", 
    "G1": "G1.mp3", 
    "G#1": "Gs1.mp3",
    
    "A2": "A2.mp3",
    "A#2": "As2.mp3",
    "B2": "B2.mp3",
    "C2": "C2.mp3",
    "C#2": "Cs2.mp3",
    "D2": "D2.mp3",
    "D#2": "Ds2.mp3",
    "E2": "E2.mp3",
    "F2": "F2.mp3",
    "F#2": "Fs2.mp3", 
    "G2": "G2.mp3", 
    "G#2": "Gs2.mp3",

    "A3": "A3.mp3",
    "A#3": "As3.mp3",
    "B3": "B3.mp3",
    "C3": "C3.mp3",
    "C#3": "Cs3.mp3",
    "D3": "D3.mp3",
    "D#3": "Ds3.mp3",
    "E3": "E3.mp3",
    "F3": "F3.mp3",
    "F#3": "Fs3.mp3", 
    "G3": "G3.mp3", 
    "G#3": "Gs3.mp3",
    
    "A4": "A4.mp3",
    "A#4": "As4.mp3",
    "B4": "B4.mp3",
    "C4": "C4.mp3",
    "C#4": "Cs4.mp3",
    "D4": "D4.mp3",
    "D#4": "Ds4.mp3",
    "E4": "E4.mp3",
    "F4": "F4.mp3",
    "F#4": "Fs4.mp3", 
    "G4": "G4.mp3", 
    "G#4": "Gs4.mp3",

    "A5": "A5.mp3",
    "A#5": "As5.mp3",
    "B5": "B5.mp3",
    "C5": "C5.mp3",
    "C#5": "Cs5.mp3",
    "D5": "D5.mp3",
    "D#5": "Ds5.mp3",
    "E5": "E5.mp3",
    "F5": "F5.mp3",
    "F#5": "Fs5.mp3", 
    "G5": "G5.mp3", 
    "G#5": "Gs5.mp3",

    "A6": "A6.mp3",
    "A#6": "As6.mp3",
    "B6": "B6.mp3",
    "C6": "C6.mp3",
    "C#6": "Cs6.mp3",
    "D6": "D6.mp3",
    "D#6": "Ds6.mp3",
    "E6": "E6.mp3",
    "F6": "F6.mp3",
    "F#6": "Fs6.mp3", 
    "G6": "G6.mp3", 
    "G#6": "Gs6.mp3",



	},
	release: 1.35,
	baseUrl: "https://nbrosowsky.github.io/tonejs-instruments/samples/piano/",
  
  onload: () => {
	
    console.log('LOAD COMPLETE')
	}
}).connect(dry);
 
 

//connect it to the speaker output
//piano.toDestination()



//synthType: "mono"
var monoSynth = new Tone.PolySynth({
polyphony : "max" ,
volume : 0 ,
detune : 0 ,
voice : Tone.Synth
}).connect(dry)


monoSynth.set({
oscillator : {
type : "sawtooth6"
} ,
envelope : {
attack : 0.005 ,
decay : 0.1 ,
sustain : 0.3 ,
release : 1
}
})


//synthType: "FM"
var synth = new Tone.PolySynth({
polyphony : "max" ,
volume : 0 ,
detune : 0 ,
voice : Tone.FMSynth
} ).connect(dry);




synth.set({
  harmonicity : 2.006801,
  detune : 6.3 ,
	modulationIndex :4.25 ,
 oscillator : {
type : "sine"
} ,
  
	"envelope" : {
		"attack" : 0.00027,
    "decay" : .797 ,
"sustain" : .67,
"release" : 0.66
	},
 modulation : {
type : "square10"
} ,
  "modulationEnvelope" : {
"attack" : 0.029873,
"decay" : 6.09,
"sustain" : 0.1703 ,
"release" : 0.23
}
});




//FM1
var synth1 = new Tone.PolySynth({
polyphony : "max" ,
volume : 0 ,
detune : 0 ,
voice : Tone.FMSynth
} ).connect(dry);

 


synth1.set({
  harmonicity : 2.006801,
  detune : 6.3 ,
	modulationIndex :3.25 ,
 oscillator : {
type : "sawtooth5"
} , 
    
	"envelope" : {
		"attack" : 0.00027,
    "decay" : .797 ,
"sustain" : .67,
"release" : 0.66
	},
 modulation : {
type : "square7"
} ,
  "modulationEnvelope" : {
"attack" : 0.029873,
"decay" : 4.24,
"sustain" : 0.1713 ,
"release" : 0.23
}
});


var toneTester = false
if(toneTester==true){
var vib = new Tone.Volume(-38).toDestination()
var vibSynth = new Tone.PolySynth(Tone.DuoSynth).connect(vib)
}
    now = Tone.now() 



function colorSwitch(rstate,rx,ry){
    if (rstate) {
   stroke(255, 0, 0);
      fill(255, 0, 0);
      ellipse(rx, height-ry, 30, 30);
  } 
  
  else {
    stroke(255, 0, 0);
    fill(0, 0, 0);
      ellipse(rx, height-ry, 30, 30);
  }
  
  
  
    if (ostate) {
stroke(255, 120, 0);
fill(255, 120, 0);
      ellipse(ox, height-oy, 30, 30);
  } 
  
  else {
stroke(255, 120, 0);
fill(0, 0, 0);
      ellipse(ox, height-oy, 30, 30);
  }
  
  
      if (ystate) {
stroke(255, 255, 0);
        fill(255, 255, 0);
      ellipse(yx, height-yy, 30, 30);
  } 
  
  else {
stroke(255, 255, 0);
fill(0, 0, 0);
      ellipse(yx, height-yy, 30, 30);
  }
  
        if (gstate) {
stroke(0, 255, 0);
        fill(0, 255, 0);
      ellipse(gx, height-gy, 30, 30);
  } 
  
  else {
stroke(0, 255, 0);
fill(0, 0, 0);
      ellipse(gx, height-gy, 30, 30);
  }
  
  
          if (bstate) {
stroke(0, 121, 255);
        fill(0, 121, 255);
      ellipse(bx, height-by, 30, 30);
  } 
  
  else {
stroke(0, 121, 255);
fill(0, 0, 0);
      ellipse(bx, height-by, 30, 30);
  }
  
  
       if (pstate) {
stroke(166, 0, 174);
        fill(166, 0, 174);
      ellipse(px, height-py, 30, 30);
  } 
  
  else {
stroke(166, 0, 174);
fill(0, 0, 0);
      ellipse(px, height-py, 30, 30);
  }
  
  
       if (vstate) {
stroke(255, 255, 255);
        fill(255, 255, 255);
      ellipse(vx, height-vy, 30, 30);
  } 
  
  else {
stroke(255,255,255);
fill(0, 0, 0);
      ellipse(vx, height-vy, 30, 30);
  }
  
  
  if (lrstate) {
   stroke(255, 0, 0);
      fill(255, 0, 0);
         strokeWeight(7.63)

      line(lrx, height-15, lrx1, height-15);
  } 
  
  else {
    stroke(255, 0, 0);
    fill(0, 0, 0);
     strokeWeight(1.63)
 line(lrx, height-15, lrx1, height-15);
  }
  
    if (lostate) {
   stroke(255, 120, 0);
      fill(255, 120, 0);
         strokeWeight(7.63)

      line(lox, height-15, lox1, height-15);
  } 
  
  else {
    stroke(255, 120, 0);
    fill(0, 0, 0);
     strokeWeight(1.63)
 line(lox, height-15, lox1, height-15);
  }
  
  
    if (lystate) {
   stroke(255, 255, 0);
      fill(255, 255, 0);
         strokeWeight(7.63)

      line(lyx, height-15, lyx1, height-15);
  } 
  
  else {
    stroke(255, 255, 0);
    fill(0, 0, 0);
     strokeWeight(1.63)
 line(lyx, height-15, lyx1, height-15);
  }
  
      if (lgstate) {
   stroke(0, 255, 0);
      fill(0, 255, 0);
         strokeWeight(7.63)

      line(lgx, height-15, lgx1, height-15);
  } 
  
  else {
    stroke(0, 255, 0);
    fill(0, 0, 0);
     strokeWeight(1.63)
 line(lgx, height-15, lgx1, height-15);
  }
  
       if (lbstate) {
   stroke(0, 121, 255);
      fill(0, 121, 255);
         strokeWeight(7.63)

      line(lbx, height-15, lbx1, height-15);
  } 
  
  else {
    stroke(0, 121, 255);
    fill(0, 0, 0);
     strokeWeight(1.63)
 line(lbx, height-15, lbx1, height-15);
  }
  
  
     if (lpstate) {
   stroke(166, 0, 174);
    
         strokeWeight(7.63)

      line(lpx, height-15, lpx1, height-15);
  } 
  
  else {
    stroke(166, 0, 174);

     strokeWeight(1.63)
 line(lpx, height-15, lpx1, height-15);
  }
  
  
}



function mousePressed() {
  if (dist(mouseX, mouseY, rx, height-ry) < 15) {
    rstate = !rstate;
  }
  
    if (dist(mouseX, mouseY, ox, height-oy) < 15) {
    ostate = !ostate;
  }
  
    if (dist(mouseX, mouseY, yx, height-yy) < 15) {
    ystate = !ystate;
  }
  
     if (dist(mouseX, mouseY, gx, height-gy) < 15) {
    gstate = !gstate;
  }
  
    if (dist(mouseX, mouseY, bx, height-by) < 15) {
    bstate = !bstate;
  }
  
    if (dist(mouseX, mouseY, px, height-py) < 15) {
    pstate = !pstate;
  }
  
      if (dist(mouseX, mouseY, vx, height-vy) < 15) {
    vstate = !vstate;
  }
  
  if(isMobile==false){
  
      if (dist(mouseX, mouseY, lry, height-15) < 25) {
    lrstate = !lrstate;
  }
  
      if (dist(mouseX, mouseY, loy, height-15) < 25) {
    lostate = !lostate;
  }
  
      if (dist(mouseX, mouseY, lyy, height-15) < 25) {
    lystate = !lystate;
  }
  
       if (dist(mouseX, mouseY, lgy, height-15) < 25) {
    lgstate = !lgstate;
  }
  
      if (dist(mouseX, mouseY, lby, height-15) < 25) {
    lbstate = !lbstate;
  }
  
     if (dist(mouseX, mouseY, lpy, height-15) < 25) {
    lpstate = !lpstate;
  }
  }
  
   if(isMobile==true){
  
      if (dist(mouseX, mouseY, lry, height-15) < 15) {
    lrstate = !lrstate;
  }
  
      if (dist(mouseX, mouseY, loy, height-15) < 15) {
    lostate = !lostate;
  }
  
      if (dist(mouseX, mouseY, lyy, height-15) < 15) {
    lystate = !lystate;
  }
  
       if (dist(mouseX, mouseY, lgy, height-15) < 15) {
    lgstate = !lgstate;
  }
  
      if (dist(mouseX, mouseY, lby, height-15) < 15) {
    lbstate = !lbstate;
  }
  
     if (dist(mouseX, mouseY, lpy, height-15) < 15) {
    lpstate = !lpstate;
  }
  }
  
  
}



function createBestSel(){
  sel1.remove()
       sel1 = createSelect();
if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
 if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }
  }
     sel1.option('Pick a Song')

    sel1.option('Clair de Lune',0);
    sel1.option('Little Wing',5);
  sel1.option('21st Century Schizoid Man',31)
        sel1.option('Great Gig',3);
      sel1.option('In A Sentimental Mood',19)
        sel1.option('Hey Jude',4);


    sel1.changed(songChange);
}


function createClassicalSel(){
  sel1.remove()
       sel1 = createSelect();
if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
 if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }
  }
 
  sel1.option('Pick a Song')
    sel1.option('Clair de Lune',0);
    sel1.option('Bach',2);
      sel1.option('C Major',28);
    sel1.option('Moonlight Sonata',32);
    sel1.option('Brahms',33);
      sel1.option('Hallelujah!',34);
        sel1.option('Mozart',35);
   sel1.option('Schubert',36);
     sel1.option('Stravinsky',37);
       sel1.option('Many Chords',38);





    sel1.changed(songChange);
}
function createRockSel(){
  sel1.remove()
       sel1 = createSelect();
if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
       if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }

  }
  
sel1.option('Pick a Song')
      sel1.option('Great Gig',3);
    sel1.option('Little Wing',5);
    sel1.option('Little Wing (Live)',6);
    sel1.option('Aerials',7);
  sel1.option('Paranoid',13)
    sel1.option('Zombie',15)
  sel1.option('Light My Fire',17)
  sel1.option('Bring Me To Life',22)
   sel1.option("Friend Of The Devil",23)
  sel1.option("Sweet Child O Mine",24)
    sel1.option("Good Riddance",25)
  sel1.option("Sweet Home Chicago",26)
  sel1.option('21st Century Schizoid Man',31)


  
   

    sel1.changed(songChange);

}
function createPopSel(){
   sel1.remove()
       sel1 = createSelect();
if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
      if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }

  }
  sel1.option('Pick a Song')
      sel1.option('Beach Boys',12);
      sel1.option('Hey Jude',4);
  sel1.option('Ring of Fire',14)
  sel1.option('I Will Follow You Into',16)
  sel1.option('September',18)
    sel1.option('Redemption Song',27)

      sel1.option('Zelda Theme',8);
   

    sel1.changed(songChange);

  
  
}
function createJazzSel(){
    sel1.remove()
       sel1 = createSelect();
if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
    if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }

  }
    sel1.option('Pick a Song')
      sel1.option('Count Basie',1);
    sel1.option('In A Sentimental Mood',19)
      sel1.option('Take The A Train',20)
  sel1.option('Fly Me To The Moon',29)
    sel1.option('When The Saints',30)
    sel1.option('BB King',11)


      sel1.changed(songChange);

   
}

function createCustomSel(){
    sel1.remove()
       sel1 = createSelect();
if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
 if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }
  }  
  if(fileUpload==true){
      sel1.option('Pick a Song')
      sel1.option('Uploaded Midi File',21);
  }
   if(fileUpload==false){
      sel1.option('Please Upload a Midi File');
  }
 
      sel1.changed(songChange);

  
}

let midiPlayer = {}



////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
function setup() {

  
  //  
//  slider = createSlider(-17, -7, -11);
  slider = createSlider(-17, -7, -11);
if(isMobile==false){
  slider.position(300, 223);
}
  if(isMobile==true){
    
    if(isSmall==false){
    slider.position(200, 222);
    }
    
      if(isSmall==true){
    slider.position(200, 142);
    }
  }
  slider.style('width', '500px');
  
  slider1 = createSlider(-32, -2, -3);
  if(isMobile==false){
  slider1.position(300, 277);
  }
  if(isMobile==true){
    
    if(isSmall=false){
      slider1.position(200, 267);
  }
    
     if(isSmall=true){
      slider1.position(200, 187);
  }
  }
  slider1.style('width', '500px');
  
  //bpm
   slider2 = createSlider(20, 177, 63);
  if(isMobile==false){
  slider2.position(130, 502);
  }
  if(isMobile==true){
     if(isSmall=false){
    
    slider2.position(110, 484);
     }
    
       if(isSmall=true){
    
    slider2.position(110, 334);
     }
    
  }
  slider2.style('width', '500px');
  
  
  
   sel = createSelect();
  if(isMobile==false){
  sel.position(213, 331); 
  }
   if(isMobile==true){
        if(isSmall=false){
    
  
  sel.position(133, 303);
        }
     
         if(isSmall=true){
    
  
  sel.position(133, 213);
        }
     
     
  }
  
  sel.option('Music',0);
  sel.option('Astrology',1);
  sel.option('Qabala',2);
  sel.selected('Music');
  sel.changed(symbolChange);
  
  sel2 = createSelect()
  if(isMobile==false){
    
    sel2.position(339, 427);
  }
  if(isMobile==true){
    
     if(isSmall=false){
        sel2.position(219, 440);

     }
     if(isSmall=true){
        sel2.position(219, 288);

     }
    
    
  }
     sel2.option('Most Clear',5);

   sel2.option('Classical',0);
  sel2.option('Rock',1);
  sel2.option('Pop',2);
    sel2.option('Jazz',3);
  sel2.option('Custom',4)
  sel2.changed(genreChange);
  
  
  
  
         sel1 = createSelect();
  if(isMobile==false){
  sel1.position(433, 427);
  }
  
  if(isMobile==true){
    
     if(isSmall=false){
      sel1.position(313, 440);
       
     }
    
    if(isSmall=true){
      sel1.position(313, 288);
       
     }

  }
    sel1.option('Clair de Lune',0);
    sel1.option('Little Wing',5);
  sel1.option('21st Century Schizoid Man',31)
        sel1.option('Great Gig',3);
      sel1.option('In A Sentimental Mood',19)
        sel1.option('Hey Jude',4);




    sel1.changed(songChange);


  
  
  
 ////  button = createButton('Stop & Clear Current Song');
 // button.position(689, 191);
 // button.mousePressed(changeBG);
   
  
     button1 = createButton('Play New Song');
  button2 = createButton('Pause');
  if(isMobile==false){
  button1.position(388, 463);
     button2.position(588, 463);
  }
   if(isMobile==true){
     
          if(isSmall=false){

  button1.position(517, 427);
          button2.position(588, 443);
          }
     
        if(isSmall=true){

  button1.position(517, 288);
          button2.position(628, 288);
          }
     

  }
  button1.mousePressed(changeBS);
   button2.mousePressed(changeBG);
  
  
  createCanvas(windowHeight, windowHeight);
  //give the _Concept classes the qualities of tone-point.js and 
  //apply the dodeca-vertex cordniants to the x & y variables
  CConcept = new TonePoint(width * 0.6, height * 0.126795,0);
  FConcept = new TonePoint(width * 0.4, height * 0.126795,5)
  BbConcept = new TonePoint(width * 0.226795, height * 0.226795,10)
  EbConcept = new TonePoint(width * 0.126795, height * 0.4,3)
  AbConcept = new TonePoint(width * 0.126795, height * 0.6,8)
  DbConcept = new TonePoint(width * 0.226795, height * 0.773205,1)
  GbConcept = new TonePoint(width * 0.4, height * 0.873205,6)
  BConcept = new TonePoint(width * 0.6, height * 0.873205,11)
  EConcept = new TonePoint(width * 0.773205, height * 0.773205,4)
  AConcept = new TonePoint(width * 0.873205, height * 0.6,9)
  DConcept = new TonePoint(width * 0.873205, height * 0.4,2)
  GConcept = new TonePoint(width * 0.773205, height * 0.226795,7)
  midiPlayer= new MidiPlayer()
  turntable = new Turntable()


  //give Skeleton.js it's tone points
  skeleton = new Skeleton(CConcept, FConcept, BbConcept, EbConcept, AbConcept, DbConcept, GbConcept,
                           BConcept, EConcept, AConcept, DConcept, GConcept)
  circleFactory = new CircleFactory(aliveVoices,alivePitches,aliveDups,aliveDupCount,CConcept, FConcept, BbConcept, EbConcept, AbConcept, DbConcept, GbConcept,
                           BConcept, EConcept, AConcept, DConcept, GConcept)
  lineFactory = new LineFactory()
  soundMaker = new SoundMaker()
  
  midiPlayer.readMidi(midiTest,pauz)
}

function windowResized() {
  
}


function mouseClicked(){
  Tone.start()
}



function symbolChange() {
 lense = sel.value();
}

function songChange() {
  pauz = false
midiPlayer.stop()
turntable.changeRecord(sel1.value())
  dj=sel1.value()
     skeleton.titleChange(10)

  
  
}


function genreChange() {
 genre=sel2.value()
  if(genre==0){
    createClassicalSel()
    
  }
    if(genre==1){
    createRockSel()
    
  }
    if(genre==2){
    createPopSel()
    
  }
  if(genre==3){
    createJazzSel()
    
  }
  if(genre==4){
    createCustomSel()
    
  }
  
    if(genre==5){
    createBestSel()
    
  }
  
  
}





function changeBG() {
if(pauz){
  pauz=false
}
  else{
    
    pauz = true
  }
  
}

function changeBS() {

  if(midiPlayer.delayComplete==true&&midiPlayer.ready==true){
   
   midiPlayer.play()
  skeleton.titleChange(dj)
  }
  else{
   skeleton.titleChange(9)
  }
  if(midiPlayer.isPlaying==true){
      skeleton.titleChange(dj)

    
  }

 // background(val);
}



 function maat(activeArray,playerArray){
    
  
  for(let i = 0; i < activeArray.length; i++){
  if(playerArray.includes(activeArray[i])){
    //do nothing
    }
    else{
      
      playerArray.push(activeArray[i]) 
      
      if(synthType=="piano"){
        //remeber this -12 could fuck us if the number is 11 or less
         piano.triggerAttack(midiNumberToPitch(activeArray[i]-12))
      }
      
      if(synthType=="FM"){
    synth.triggerAttack(midiNumberToPitch(activeArray[i]))
        
  
      }
   
      if(synthType=="FM1"){
    synth1.triggerAttack(midiNumberToPitch(activeArray[i]))
      }
      
 if(synthType=="mono"){
    monoSynth.triggerAttack(midiNumberToPitch(activeArray[i]))
   console.log('plArAt',playerArray)
      }
         

    }
  }
    
    
    
    
    for(let i = 0; i < playerArray.length; i++){
    if (activeArray.includes(playerArray[i])){
      //do nothing
      
    }
      
      else{
        if(synthType=="FM"){
         synth.triggerRelease(midiNumberToPitch(playerArray[i]))
        
        }    
        
        if(synthType=="piano"){
         piano.triggerRelease(midiNumberToPitch(playerArray[i]-12))
        
        }
          
         if(synthType=="FM1"){
         synth1.triggerRelease(midiNumberToPitch(playerArray[i]))
         }
        
         if(synthType=="mono"){
         monoSynth.triggerRelease(midiNumberToPitch(playerArray[i]))
           console.log('plArRel',playerArray)
        }  


        playerArray.splice(i,1)
        
        
      }
    
    
  }
}





function midiNumberToPitch (midiNumber) {
  let octave = Math.floor(midiNumber / 12) - 1
  let pitch = midiNumber%12
  let pitchNames = ['C','Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  
  return pitchNames[pitch] + octave
}












//create the archatype of a line (existing between 2 tone points)
function TonePointLine(tone1, tone2) {
  //thickness
  strokeWeight(1.77)
  //create line
  line(tone1.x, tone1.y, tone2.x, tone2.y)  
}



/*
function ToneAppear(drawingArray){
  if (drawingArray.includes(0)){
    circle(CConcept.x,CConcept.y,33)
  }
   if (drawingArray.includes(1)){
    circle(DbConcept.x,DbConcept.y,33)
  }
   if (drawingArray.includes(2)){
    circle(DConcept.x,DConcept.y,33)
  }
   if (drawingArray.includes(3)){
    circle(EbConcept.x,EbConcept.y,33)
  }
   if (drawingArray.includes(4)){
    circle(EConcept.x,EConcept.y,33)
  }
   if (drawingArray.includes(5)){
    circle(FConcept.x,FConcept.y,33)
  }
   if (drawingArray.includes(6)){
    circle(GbConcept.x,GbConcept.y,33)
  }
   if (drawingArray.includes(7)){
    circle(GConcept.x,GConcept.y,33)
  }
   if (drawingArray.includes(8)){
    circle(AbConcept.x,AbConcept.y,33)
  }
   if (drawingArray.includes(9)){
    circle(AConcept.x,AConcept.y,33)
  }
   if (drawingArray.includes(10)){
    circle(BbConcept.x,BbConcept.y,33)
  }
   if (drawingArray.includes(11)){
    circle(BConcept.x,BConcept.y,33)
  }
  
}
*/

function drawAndUpdateConcepts() {
  /*CConcept.update(drawingArray)
  FConcept.update(drawingArray)
  BbConcept.update(drawingArray)
  EbConcept.update(drawingArray)  
  AbConcept.update(drawingArray)
  DbConcept.update(drawingArray) 
  GbConcept.update(drawingArray)
  BConcept.update(drawingArray)  
  EConcept.update(drawingArray)
  AConcept.update(drawingArray)  
  DConcept.update(drawingArray)
  GConcept.update(drawingArray)
  CConcept.draw()
  FConcept.draw()
  BbConcept.draw()
  EbConcept.draw()  
  AbConcept.draw()
  DbConcept.draw() 
  GbConcept.draw()
  BConcept.draw()  
  EConcept.draw()
  AConcept.draw()  
  DConcept.draw()
  GConcept.draw()*/
}








let aliveDups
let aliveDupCount

function findDups(alivePitches,alivePitchesNoDup,aliveDups){
  aliveDups= []
  let duplicates = [...alivePitches]
alivePitchesNoDup.forEach((item) => {
  const i = duplicates.indexOf(item)
  duplicates = duplicates
    .slice(0, i)
    .concat(duplicates.slice(i + 1, duplicates.length))
})
 // console.log(duplicates)
 return duplicates
  
}


function howManyDups(aliveDups, alivePitches) {
  let dupCount = []
  for(var i = 0; i < aliveDups.length; i++) {
    var count = 0;
    for(var z = 0; z < alivePitches.length; z++) {
      if (alivePitches[z] === aliveDups[i]) count++;
    }
    dupCount.push(count)
  }
  return dupCount
}











function update(goldenArray) {
  if (midiPlayer.goldenLatch) {
    let goldenVoiceOrder = midiPlayer.showArray
        goldenVoiceOrder.sort((a, b) => (a.voice > b.voice ? 1 : -1));
    


     voiceBirther(goldenVoiceOrder)
  //  console.log('aV',aliveVoices)
 //  console.log('aP',alivePitches)
    
     //console.log('gl',aliveVoices.length)
  
  //  offsetCircles(alivePitches)
    

    
    
    
 alivePitchesNoDup = [...new Set(alivePitches)]
   
    
   aliveDups= findDups(alivePitches,alivePitchesNoDup,aliveDups)
    aliveDupCount= howManyDups(aliveDups, alivePitches)
     //console.log(aliveDups,aliveDupCount)
    
       circleFactory.update(aliveVoices,alivePitches,aliveDups,aliveDupCount,CConcept, FConcept, BbConcept, EbConcept, AbConcept, DbConcept, GbConcept,
                           BConcept, EConcept, AConcept, DConcept, GConcept)
    
    
         //console.log('P',alivePitches)
            // console.log('V',aliveVoices)


    lineFactory.update(alivePitchesNoDup,CConcept, FConcept, BbConcept, EbConcept, AbConcept, DbConcept, GbConcept,
                           BConcept, EConcept, AConcept, DConcept, GConcept)
    //chnaging array w/ pitch and voice info is below
  // console.log('gA',goldenVoiceOrder)
   //    console.log('VO',goldenVoiceOrder)
    
       
    midiPlayer.goldenLatch = false
    
    
   
  //  console.log('----------------------------')
    
    //changing of singer object happens here
    // this will only happen when the golden array changes
    
    
  }
  // console.log(midiPlayer.showArray)
}

let alivePitchesNoDup = []
let aliveVoices = []
let alivePitches = []
function voiceBirther(goldenArray) {
  let goldenVoices = []
  let goldenPitches = []
  for (let i =0;i<goldenArray.length;i++) {
goldenVoices.push(goldenArray[i].voice)
  }
  
  for (let i =0;i<goldenVoices.length;i++) {
    if(aliveVoices.includes(goldenVoices[i])){
      //do nutin
    }
    
    else{
      aliveVoices.push(goldenVoices[i])
      
    }
  }
   
  //FIRST TIME RIDING THE RIDE
  for (let i =0;i<aliveVoices.length;i++) {
if (goldenVoices.includes(aliveVoices[i])){
  //do nutin
}
    
    else{
      aliveVoices.splice(i,1)
      
    }
  }  
  //LETS GO AGAIN WHEEEEEEEEEEE
  
    for (let i =0;i<aliveVoices.length;i++) {
if (goldenVoices.includes(aliveVoices[i])){
  //do nutin
}
    
    else{
      aliveVoices.splice(i,1)
      
    }
  }  
  
  
  //FUCK IT ONE MORE TIMEEEEEEEEEEEEEE
      for (let i =0;i<aliveVoices.length;i++) {
if (goldenVoices.includes(aliveVoices[i])){
  //do nutin
}
    
    else{
      aliveVoices.splice(i,1)
      
    }
  }   
        for (let i =0;i<aliveVoices.length;i++) {
if (goldenVoices.includes(aliveVoices[i])){
  //do nutin
}
    
    else{
      aliveVoices.splice(i,1)
      
    }
  }  
  //OK NOW I'M SICK
  
  //0 length exception
  
  if (goldenVoices.length==0){
      aliveVoices.splice(0,1)
    
  }
    let goldenArrayByVoice = goldenArray
     for (let i =0;i<goldenArrayByVoice.length;i++) {
goldenPitches.push(goldenArrayByVoice[i].pitch %12)
   
  }

  alivePitches = goldenPitches
}




//party time
function draw() {
 background(0);
 skeleton.draw()
  
  
  colorSwitch(rstate,rx,ry)
 
  
 globalSpeed = abs(slider.value());


  globalLatch = abs(slider1.value());
     // console.log('pl',play)

// console.log('dj',dj)

 
   

   //drawAndUpdateConcepts()
update()
  lineFactory.draw()
  circleFactory.draw(aliveDups,aliveDupCount,alivePitches)
 mouseClicked()

  maat(midiPlayer.activeArray,playerArray)

}
