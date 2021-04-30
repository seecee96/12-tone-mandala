let title = 0
class Skeleton {   
  //takes in _Concept from sketch.js file
  constructor(CConcept, FConcept, BbConcept, EbConcept, AbConcept, DbConcept, GbConcept, BConcept, EConcept, AConcept, DConcept, GConcept) {

  }
titleChange(dj){
title=dj
      
    }
   
  draw() {
          textFont('Times New Roman');

    
    //Tritones
    if(pstate){
    stroke(166, 0, 174);
    }
    
     else{
      
         stroke(0, 0, 0);

    } 
   TonePointLine(FConcept, BConcept)
   TonePointLine(DbConcept, GConcept)
   TonePointLine(GbConcept, CConcept)
   TonePointLine(BbConcept, EConcept)
   TonePointLine(AbConcept, DConcept)
   TonePointLine(EbConcept, AConcept)
    
    //Chromatic
 if(bstate){
         stroke(0, 121, 255);

    }
       else{
      
         stroke(0, 0, 0);

    }  TonePointLine(CConcept, DbConcept)
  TonePointLine(DbConcept, DConcept)
  TonePointLine(DConcept, EbConcept)
  TonePointLine(EbConcept, EConcept)
  TonePointLine(EConcept, FConcept)
  TonePointLine(FConcept, GbConcept)
  TonePointLine(GbConcept, GConcept)
  TonePointLine(GConcept, AbConcept)
  TonePointLine(AbConcept, AConcept)
  TonePointLine(AConcept, BbConcept)
  TonePointLine(BbConcept, BConcept)
  TonePointLine(BConcept, CConcept)

  

   
//Major Thirds
  if(gstate){
         stroke(0, 255, 0);

    }
       else{
      
         stroke(0, 0, 0);

    }   TonePointLine(AConcept, DbConcept)
  TonePointLine(DbConcept, FConcept)
  TonePointLine(FConcept, AConcept)

  TonePointLine(CConcept, AbConcept)
  TonePointLine(AbConcept, EConcept)
  TonePointLine(EConcept, CConcept)
  
  TonePointLine(BConcept, EbConcept)
  TonePointLine(EbConcept, GConcept)
  TonePointLine(GConcept, BConcept)

  TonePointLine(DConcept, BbConcept)
  TonePointLine(BbConcept, GbConcept)
  TonePointLine(GbConcept, DConcept)
  

  //Minor Thirds
  if(ystate){
         stroke(255, 255, 0);

    }
       else{
      
         stroke(0, 0, 0);

    } 
    TonePointLine(EConcept, DbConcept)
  TonePointLine(DbConcept, BbConcept)
  TonePointLine(BbConcept, GConcept)
  TonePointLine(GConcept, EConcept)
  
  TonePointLine(DConcept, BConcept)
  TonePointLine(BConcept, AbConcept)
  TonePointLine(AbConcept, FConcept)
  TonePointLine(FConcept, DConcept)
  
  TonePointLine(CConcept, AConcept)
  TonePointLine(AConcept, GbConcept)
  TonePointLine(GbConcept, EbConcept)
  TonePointLine(EbConcept, CConcept)

    
    //Whole Tones
    if(ostate){
         stroke(255, 120, 0);

    }
       else{
      
         stroke(0, 0, 0);

    }
  TonePointLine(CConcept, DConcept)
  TonePointLine(DConcept, EConcept)
  TonePointLine(EConcept, GbConcept)
  TonePointLine(GbConcept, AbConcept)
  TonePointLine(AbConcept, BbConcept)
  TonePointLine(BbConcept, CConcept)
  
  TonePointLine(FConcept, GConcept)
  TonePointLine(GConcept, AConcept)
  TonePointLine(AConcept, BConcept)
  TonePointLine(BConcept, DbConcept)
  TonePointLine(DbConcept, EbConcept)
  TonePointLine(EbConcept, FConcept)
   
    //Fifths\
    if(rstate){
   stroke(255, 0, 0);
    }
    else{
      
         stroke(0, 0, 0);

    }

  TonePointLine(CConcept, FConcept)
  TonePointLine(FConcept, BbConcept)
  TonePointLine(BbConcept, EbConcept)
  TonePointLine(EbConcept, AbConcept)
  TonePointLine(AbConcept, DbConcept)
  TonePointLine(DbConcept, GbConcept)
  TonePointLine(GbConcept, BConcept)
  TonePointLine(BConcept, EConcept)
  TonePointLine(EConcept, AConcept)
  TonePointLine(AConcept, DConcept)
  TonePointLine(DConcept, GConcept)
  TonePointLine(GConcept, CConcept)
  
    
       stroke(255, 0, 0);
      fill(255, 0, 0);
    if(isMobile==false){
      
         textSize(21);
text('Perfect 5th/4th', 30, height-35);
    
    }
    
       if(isMobile==true){
      
         textSize(15);
text('Perfect 5th/4th', 10, height-35);
    
    }
       stroke(255, 120, 0);
          fill(255, 120, 0);
     if(isMobile==false){
text('Maj-2nd/Min-7th', 180, height-35);
    text('(Whole Tone)', 196, height-65);
     }
    
     if(isMobile==true){
       text('Maj-2nd/Min-7th', 120, height-35);
  //  text('(Whole Tone)', 156, height-65);
     }
    
         stroke(255, 255, 0);
          fill(255, 255, 0);
         if(isMobile==false){

text('Min-3rd/Maj-6th', 350, height-35);
         }
    
         if(isMobile==true){
text('Min-3rd/Maj-6th', 245, height-35);

           
         }
      stroke(0, 255, 0);
          fill(0, 255, 0);
    
             if(isMobile==false){

text('Maj-3rd/Min-6th', 514, height-35);
             }
    
             if(isMobile==true){
text('Maj-3rd/Min-6th', 367, height-35);

               
             }
          stroke(0, 121, 255);
          fill(0, 121, 255);
                 if(isMobile==false){

text('Min-2nd/Maj-7th', 677, height-35);
     text('(Chromatic)', 693, height-65);
                 }
    
                 if(isMobile==true){
text('Min-2nd/Maj-7th', 490, height-35);

                   
                 }
    
          stroke(166, 0, 174);
          fill(166, 0, 174);
                     if(isMobile==false){

text('Tritone', 853, height-35);
                     }
    
                     if(isMobile==true){
text('Tritone', 633, height-35);

                       
                     }
       stroke(255, 255, 255);
          fill(255, 255, 255);
    
                         if(isMobile==false){

text('Voices', 850, height-100);
                           
                         }
    
                         if(isMobile==true){
text('Voices', 639, height-100);

                           
                         }
    
    fill(255,255,255)
      stroke(255, 255, 255);
    if(isMobile==true){
          textSize(32);

      
    }
    if (isMobile==false){
      
    
    textSize(42);
    }
      if(pauz==false){
        if(isMobile==true){
    text('BPM:',30,75)
            text(slider2.value(),130,75)
      }
        
         if(isMobile==false){
    text('BPM:',30,100)
            text(slider2.value(),150,100)
      }
  
    }
    
    if (pauz==true){
      text('= Paused =',30,100)
      
    }
    if(title==2){
      text('Now Playing:   Bach - Prelude 846 & 847', 30, 37);
    }
    if(title==1){
      text('Now Playing:   Count Basie ', 30, 37);
    }
    
    if(title==0){
      text('Now Playing:   Debussy - Clair de Lune ', 30, 37);
    }
         if(title==3){
      text('Now Playing:   Pink Floyd - Great Gig in the Sky', 107, 47);
    }
    
         if(title==4){
      text('Now Playing:   The Beatles - Hey Jude', 107, 47);
    }
     if(title==5){
      text('Now Playing:   Jimi Hendrix - Little Wing', 107, 47);
    }
     if(title==6){
      text('Now Playing:   Jimi Hendrix - Little Wing (Live)', 107, 47);
    }
    
         if(title==7){
      text('Now Playing:   System of a Down - Aerials', 107, 47);
    }
         if(title==8){
      text('Now Playing: Legend of Zelda Theme', 107, 47);
    }
         if(title==9){
      text('Loading ...   Please wait and click play again.', 237, 47);
    }
    
             if(title==10){
      text('Click play to start new song.', 377, 47);
    }
    
        if(title==11){
      text('Now Playing:   BB King - The Thrill Is Gone', 107, 47);
    }
    if(title==12){
      text("Now Playing:   The Beach Boys - California Girls", 107, 47);
    }
    
    if(title==13){
      text("Now Playing:   Black Sabbath - Paranoid", 107, 47);
    }
    if(title==14){
      text("Now Playing:   Johnny Cash - Ring of Fire", 107, 47);
    }
    if(title==15){
      text("Now Playing:   The Crainberries - Zombie", 107, 47);
    }
    if(title==16){
      textSize(36)
      text("Now Playing:   Death Cab for Cutie - I Will Follow You Into the Dark", 37, 47);
    }
    if(title==17){
      text("Now Playing:   The Doors - Light My Fire", 107, 47);
    }
    if(title==18){
      text("Now Playing:   Earth, Wind, and Fire - September", 107, 47);
    }
      if(title==19){
      text("Now Playing:   Duke Ellington -  In a Sentimental Mood", 107, 47);
    }
    if(title==20){
      text("Now Playing:   Duke Ellington -  Take The A Train", 107, 47);
    }
     if(title==21){
      text("Now Playing:   User Midi File", 107, 47);
    }
    if(title==22){
      text("Now Playing:   Evanescence - Bring Me To Life", 107, 47);
    }
    
    if(title==23){
      text("Now Playing:   Grateful Dead - Friend Of The Devil", 107, 47);
    }
    if(title==24){
      text("Now Playing:   Aerosmith - Sweet Child O Mine", 107, 47);
    }
    if(title==25){
      text("Now Playing:   Green Day - Good Riddance", 107, 47);
    }
    
     if(title==26){
      text("Now Playing:   Blues Brothers - Sweet Home Chicago", 107, 47);
    }
    
      if(title==27){
      text("Now Playing:   Bob Marley - Redemption Song", 107, 47);
    }
    
      if(title==29){
      text("Now Playing:   Frank Sinatra - Fly Me To The Moon", 107, 47);
    }
    
      if(title==30){
      text("Now Playing: Louis Armstrong - When The Saints Go Marching In", 23, 47);
    }
    
       if(title==31){
      text("Now Playing:   King Crimson - 21st Century Schizoid Man", 23, 47);
    }
    
         if(title==32){
      text("Now Playing:   Beethoven - Moonlight Sonata", 23, 47);
    }
    
         if(title==33){
      text("Now Playing:   Brahms - Symphony 1", 23, 47);
    }
    
         if(title==34){
      text("Now Playing:   Handel - Hallelujah!", 23, 47);
    }
     
        if(title==35){
      text("Now Playing:   Mozart - Sonata No. 11 in A Major", 23, 47);
    }
    
       if(title==36){
      text("Now Playing:   Schubert - Gute Nacht", 23, 47);
    }
    
     if(title==37){
      text("Now Playing:   Stravinsky - Rite of Spring", 23, 47);
    }
   

    //////////////////////////////////
    ////////////////////////////////////
    //////////////////////////////////
    if(lense==0){
      if(isMobile==true){
        
                 textSize(42);
        
        text('C', CConcept.x-0, CConcept.y-15);
    text('F', FConcept.x-15, FConcept.y-15);
        text('Bb', BbConcept.x-70, BbConcept.y-15);
            text('Eb', EbConcept.x-70, EbConcept.y+15);
                text('Ab', AbConcept.x-70, AbConcept.y+25);
                    text('Db', DbConcept.x-70, DbConcept.y+45);
                        text('Gb', GbConcept.x-40, GbConcept.y+40);
                            text('B', BConcept.x-5, BConcept.y+40);
                                text('E', EConcept.x+25, EConcept.y+50);
                                    text('A', AConcept.x+25, AConcept.y+35);
                                        text('D', DConcept.x+28, DConcept.y+20);
                                            text('G', GConcept.x+20, GConcept.y-10);
      }
      if(isMobile==false){
         textSize(55);
        text('C', CConcept.x-10, CConcept.y-25);
    text('F', FConcept.x-25, FConcept.y-25);
        text('Bb', BbConcept.x-70, BbConcept.y-15);
            text('Eb', EbConcept.x-90, EbConcept.y+15);
                text('Ab', AbConcept.x-90, AbConcept.y+25);
                    text('Db', DbConcept.x-85, DbConcept.y+45);
                        text('Gb', GbConcept.x-40, GbConcept.y+65);
                            text('B', BConcept.x-5, BConcept.y+65);
                                text('E', EConcept.x+25, EConcept.y+50);
                                    text('A', AConcept.x+25, AConcept.y+35);
                                        text('D', DConcept.x+28, DConcept.y+20);
                                            text('G', GConcept.x+30, GConcept.y-20);
      }
      


    }
        if(lense==1){
          if(isMobile==true){
        
                 textSize(42);
            text('♈︎', CConcept.x-17, CConcept.y-30);
    text('♓︎', FConcept.x-40, FConcept.y-28);
        text('♒︎', BbConcept.x-75, BbConcept.y-20);
            text('♑︎', EbConcept.x-80, EbConcept.y+10);
                text('♐︎', AbConcept.x-72, AbConcept.y+30);
                    text('♏︎', DbConcept.x-65, DbConcept.y+45);
                        text('♎︎', GbConcept.x-37, GbConcept.y+62);
                            text('♍︎', BConcept.x-5, BConcept.y+59);
                                text('♌︎', EConcept.x+25, EConcept.y+50);
                                    text('♋︎', AConcept.x+20, AConcept.y+30);
                                        text('♊︎', DConcept.x+23, DConcept.y+12);
                                            text('♉︎', GConcept.x+20, GConcept.y-13);
      }
      if(isMobile==false){
         textSize(55);
        
        text('♈︎', CConcept.x-17, CConcept.y-30);
    text('♓︎', FConcept.x-20, FConcept.y-28);
        text('♒︎', BbConcept.x-75, BbConcept.y-20);
            text('♑︎', EbConcept.x-80, EbConcept.y+10);
                text('♐︎', AbConcept.x-72, AbConcept.y+30);
                    text('♏︎', DbConcept.x-65, DbConcept.y+45);
                        text('♎︎', GbConcept.x-37, GbConcept.y+62);
                            text('♍︎', BConcept.x-5, BConcept.y+59);
                                text('♌︎', EConcept.x+25, EConcept.y+50);
                                    text('♋︎', AConcept.x+30, AConcept.y+30);
                                        text('♊︎', DConcept.x+33, DConcept.y+12);
                                            text('♉︎', GConcept.x+20, GConcept.y-13);
      }


    }

    
            if(lense==2){
            if(isMobile==true){
        
                 textSize(42);
              text('ה', CConcept.x-10, CConcept.y-15);
    text('ק', FConcept.x-15, FConcept.y-17);
        text('צ', BbConcept.x-70, BbConcept.y-15);
            text('ע', EbConcept.x-70, EbConcept.y+15);
                text('ס', AbConcept.x-70, AbConcept.y+25);
                    text('נ', DbConcept.x-60, DbConcept.y+48);
                        text('ל', GbConcept.x-30, GbConcept.y+35);
                            text('י', BConcept.x-0, BConcept.y+39);
                                text('ט', EConcept.x+25, EConcept.y+50);
                                    text('ח', AConcept.x+25, AConcept.y+35);
                                        text('ז‎', DConcept.x+28, DConcept.y+20);
                                            text('ו', GConcept.x+30, GConcept.y-10);
      }
      if(isMobile==false){
         textSize(55);
        text('ה', CConcept.x-10, CConcept.y-30);
    text('ק', FConcept.x-15, FConcept.y-37);
        text('צ', BbConcept.x-70, BbConcept.y-15);
            text('ע', EbConcept.x-70, EbConcept.y+15);
                text('ס', AbConcept.x-70, AbConcept.y+25);
                    text('נ', DbConcept.x-60, DbConcept.y+48);
                        text('ל', GbConcept.x-30, GbConcept.y+72);
                            text('י', BConcept.x-0, BConcept.y+75);
                                text('ט', EConcept.x+25, EConcept.y+50);
                                    text('ח', AConcept.x+25, AConcept.y+35);
                                        text('ז‎', DConcept.x+28, DConcept.y+20);
                                            text('ו', GConcept.x+30, GConcept.y-10);
      }


    }









  }
}