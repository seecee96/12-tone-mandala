//if global speed goes below 25, it fucks up

class Circle {
  constructor(x, y, voice, radius, id) {
    this.voice = voice;
    this.x = x;
    this.y = y;
    this.prevX = x
    this.prevY= y
    if(isMobile==false){
    this.radius = 51;
    }
    
    if(isMobile==true){
    this.radius = 43;
    }
    this.id = id
    
    this.targetX = x
          this.targetY = y
    this.targetXMem = x
    this.targetYMem = y
    this.targetXShin = x
    this.targetYShin = y
    this.prevXShin = x
    this.prevYShin = y
    this.arrived = 'arrived'
    this.offsetX = 0
    this.offsetY = 0
    this.dupType = 0
    this.stroke = 51

          this.speedX = 20.0
    this.speedY = 20.0
  }
  
  
  

  draw() {  
    
    ////////////////////////
    //duos
     if(this.arrived=='arrived'&&this.dupType==2.1){
      
      fill(255, 255, 255);
    strokeWeight(4);
stroke(51);
    circle(this.x+15, this.y, this.radius);
    }
    if(this.arrived=='arrived'&&this.dupType==2.2){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x-15, this.y, this.radius);
    }
    ////////////////////
    //trios
       if(this.arrived=='arrived'&&this.dupType==3.1){
      
      fill(255, 255, 255);
  strokeWeight(4);
stroke(51);
    circle(this.x+20, this.y, this.radius);
    }
    if(this.arrived=='arrived'&&this.dupType==3.2){
      
       fill(255, 255, 255);
 strokeWeight(4);
stroke(51);
    circle(this.x-20, this.y, this.radius);
    }
    
      if(this.arrived=='arrived'&&this.dupType==3.3){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y+30, this.radius);
    }
    
    /////////////////////////////
    //quados
       if(this.arrived=='arrived'&&this.dupType==4.1){
      
      fill(255, 255, 255);
  strokeWeight(4);
stroke(51);
    circle(this.x+26, this.y, this.radius);
    }
    if(this.arrived=='arrived'&&this.dupType==4.2){
      
       fill(255, 255, 255);
 strokeWeight(4);
stroke(51);
    circle(this.x-26, this.y, this.radius);
    }
    
      if(this.arrived=='arrived'&&this.dupType==4.3){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y+26, this.radius);
    }
    
    if(this.arrived=='arrived'&&this.dupType==4.4){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y-26, this.radius);
    }
    
    
    ////////////////////////////
    //quintos
         if(this.arrived=='arrived'&&this.dupType==5.1){
      
      fill(255, 255, 255);
  strokeWeight(4);
stroke(51);
    circle(this.x+30, this.y, this.radius);
    }
    if(this.arrived=='arrived'&&this.dupType==5.2){
      
       fill(255, 255, 255);
 strokeWeight(4);
stroke(51);
    circle(this.x-30, this.y, this.radius);
    }
    
      if(this.arrived=='arrived'&&this.dupType==5.3){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y+30, this.radius);
    }
    
    if(this.arrived=='arrived'&&this.dupType==5.4){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y-30, this.radius);
    }
    
    if(this.arrived=='arrived'&&this.dupType==5.5){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y, this.radius);
    }
    
    
     ////////////////////////////
    //hexos
         if(this.arrived=='arrived'&&this.dupType==6.1){
      
      fill(255, 255, 255);
  strokeWeight(4);
stroke(51);
    circle(this.x+25, this.y+15, this.radius);
    }
    if(this.arrived=='arrived'&&this.dupType==6.2){
      
       fill(255, 255, 255);
 strokeWeight(4);
stroke(51);
    circle(this.x-25, this.y+15, this.radius);
    }
    
      if(this.arrived=='arrived'&&this.dupType==6.3){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y+45, this.radius);
    }
    
    if(this.arrived=='arrived'&&this.dupType==6.4){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x+25, this.y-15, this.radius);
    }
    
    if(this.arrived=='arrived'&&this.dupType==6.5){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x-25, this.y-15, this.radius);
    }
    
        if(this.arrived=='arrived'&&this.dupType==6.6){
      
       fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y-45, this.radius);
    }
    
    
    
    
    
    if(this.arrived=='moving'){
    fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y, this.radius);
    }
     if(this.dupType==0){
    fill(255, 255, 255);
   strokeWeight(4);
stroke(51);
    circle(this.x, this.y, this.radius);
    }
   
    
  }

  update(aliveDups,aliveDupCount) {
 
    
    
    //adjusts for arriving exactly at the exact tone point
        if(abs(this.targetX-this.x)<this.speedX){
      
      this.x=this.targetX
    }
    if(abs(this.targetY-this.y)<this.speedY){
      
      this.y=this.targetY
    }
    //movement 
    if (this.x < this.targetX) {
                  this.x = this.x + this.speedX
                }
          if (this.x > this.targetX) {
                  this.x = this.x - this.speedX
                }
          if (this.y < this.targetY) {
                  this.y = this.y + this.speedY
                }
          if (this.y > this.targetY) {
                  this.y = this.y - this.speedY
                }

    
    
    /*
    if(this.arrived=='arrived'){ //1
      
      
       for (let i = 0; i < aliveDups.length; i++) { //2
         
         let round =false
    let duo= 0
    let duoCom = false
    let trio = 0
    let trioCom = false
    let quado = 0
    let quadoCom = false
      
      if(this.id==aliveDups[i]){ //3
        
        let type = aliveDupCount[i]
       // console.log('yoyo',type) 
        
        if(type==2&&duo1==false){
          
          this.offsetX=20
          duo1=true
          console.log('hi')
          
          
        }
        if(type==2&&duo==1&&duoCom==false){
          this.offsetX=-20
          duoCom=true
          console.log('there')
        }
        if(duoCom==true){
          
          duoCom=false 
          duo=0
        }
        
        
        
        if (type==3&&trio==0){
          
          this.offsetX=20
          trio=1
          console.lof('1')
        }
        if (type==3&&trio==0){
          
          this.offsetX=20
          trio=1
          console.lof('1')
        }
        
        
        
        
        
      } //end3
      
      
       } //end2
     
      //get ready for these
      //this.x=this.x+this.offsetX
        //    this.y=this.y+this.offsetY

    } //end1
    
    
    if (this.arrived=='moving'){
      
      this.offsetX=0
            this.offsetY=0

    }*/


  }
  
    


   
   distance(x1, x2) {
          let d1 = pow(x2 - x1, 2)
          
          return sqrt(d1)
        }
 
    setPoint(x, y) {
       
      if(this.arrived=='moving'){
            this.offsetX=0
        this.offsetY=0
        
      }
      //fixer of the quantum leap problem
               if(this.arrived=='arrived'){
         
       this.prevXShin=this.x
             this.prevX=this.x
        this.prevYShin=this.y
           this.prevY=this.y
                 
         //    this.x=this.x+this.offset    

      } 
     
      
      
       this.targetX = x
          this.targetY = y
  
      //if its moving
      if(this.targetX!=this.x&&this.targetY!=this.y){
        this.arrived = 'moving'
      this.targetXShin = this.targetX
                        this.targetYShin = this.targetY
        this.offsetX=0
        this.offsetY=0
      }
      
      
      if(this.targetX==this.x&&this.targetY==this.y){
        this.targetXShin = this.targetXMem
                        this.targetYShin = this.targetYMem
        this.prevX=this.targetXShin
                this.prevY=this.targetYShin
    //    this.x= x
    //    this.y =y

         this.arrived = 'arrived'
         
      }
      //i think you're the problem
      //this corrects for if a voice has not finished moving (not arrived), but recieves a new target
      if(this.arrived=='moving'&&this.targetXShin!=this.prevXShin&&this.targetYShin!=this.prevYShin){
        this.x=this.prevXShin
                this.y=this.prevYShin                     
        
        this.prevX = this.prevXShin  
                              this.prevY = this.prevYShin  
    
       

        
         
          this.arrived = 'arrived'
   

      }
      
      
      
        if(this.arrived=='moving'){
            this.offsetX=0
        this.offsetY=0
        
      }
      
      
        if(this.arrived=='arrived'){
      //      this.x=this.x+this.offsetX
 //this.y=this.y+this.offsetY        
      }
         
       
            //seprate distances for x and y so it moves in a strait line
          let distX = this.distance(this.prevX, this.targetX)
                    let distY = this.distance(this.prevY, this.targetY)


          this.speedX =  distX/globalSpeed
      this.speedY= distY/globalSpeed
      
      this.prevXShin = this.targetXShin
      this.prevYShin = this.targetYShin
      
    
        //    console.log(this.prevX,'-',this.prevXShin,'-',this.x,'-',this.id)
      //console.log('-----')
 
  
 
      
      //set to this.x= x to return to rpevious behavior
         
      
      
      
        }
}

//declared on line 17 of sketch, created on line 306 of sketch
class CircleFactory {
  constructor(
    aliveVoices, 
    alivePitches,
     aliveDups,
     aliveDupCount
    
  ) {
    this.circles = [];
    this.radius = 20;
    this.circlesVoiceArray = [];
  }

  //create circle function
  createCircle(x, y, voice, radius,id) {
    const birthedCircle = new Circle(x, y, voice, radius,id);
    this.circles.push(birthedCircle);
  }
  
  
   dupSplitter(alivePitches,aliveDups,aliveDupCount){
      for (let j = 0; j < this.circles.length; j++) {
        this.circles[j].dupType = 0
      }
  
   for (let i = 0; i < aliveDups.length; i++) { //1
        let duo = 0
     let trio = 0
     let quado = 0
        let quinto = 0
        let hexo = 0

      
        
     //if(aliveDups.includes(alivePitches[i])){ //2 
       
        
         for (let j = 0; j < this.circles.length; j++) { //3
           let round = false
           
        
           
           if(this.circles[j].id==aliveDups[i]){ //4
             
             
             if(this.circles[j].arrived=='arrived'){ //5
               
               if(aliveDupCount[i]==2){ //start 2index
                 
                 if(duo==0&&round==false){
                   this.circles[j].dupType = 2.1
                   round=true
                   duo = 1
              //     console.log('hi',this.circles[j].id, duo)
                   
                 }
                 if(duo==1&&round==false){
                    this.circles[j].dupType = 2.2
                   duo=0
                   round=true
                //   console.log('howdy',this.circles[j].id, duo)
                 }
                
                 
               } //end 2index
               
               
               
               if(aliveDupCount[i]==3){
                  if(trio==0&&round==false){
                   this.circles[j].dupType = 3.1
                   round=true
                   trio = 1
                 //  console.log('uno',this.circles[j].id, trio)
                   
                 }
                 
                   if(trio==1&&round==false){
                   this.circles[j].dupType = 3.2
                   round=true
                   trio = 2
                 //  console.log('dos',this.circles[j].id, trio)
                   
                 }
                 
                   if(trio==2&&round==false){
                   this.circles[j].dupType = 3.3
                   round=true
                   trio = 0
                //   console.log('tres',this.circles[j].id, trio)
                   
                 }
                 
                 
                 
               }//end 3index
               
               
               
               if (aliveDupCount[i]==4){
                 
                 
                  if(quado==0&&round==false){
                   this.circles[j].dupType = 4.1
                   round=true
                   quado = 1
                //   console.log('uno',this.circles[j].id, quado)
                   
                 }
                 
                  if(quado==1&&round==false){
                   this.circles[j].dupType = 4.2
                   round=true
                   quado = 2
                 //  console.log('dos',this.circles[j].id, quado)
                   
                 }
                 
                  if(quado==2&&round==false){
                   this.circles[j].dupType = 4.3
                   round=true
                   quado = 3
               //    console.log('tres',this.circles[j].id, quado)
                   
                 }
                  if(quado==3&&round==false){
                   this.circles[j].dupType = 4.4
                   round=true
                   quado = 0
              //     console.log('quatro',this.circles[j].id, quado)
                   
                 }
                 
                 
                 
               }
               
               
                    if (aliveDupCount[i]==5){
                 
                 
                  if(quinto==0&&round==false){
                   this.circles[j].dupType = 5.1
                   round=true
                   quinto = 1
               //    console.log('uno',this.circles[j].id, quinto)
                   
                 }
                 
                  if(quinto==1&&round==false){
                   this.circles[j].dupType = 5.2
                   round=true
                   quinto = 2
                 //  console.log('dos',this.circles[j].id, quinto)
                   
                 }
                 
                  if(quinto==2&&round==false){
                   this.circles[j].dupType = 5.3
                   round=true
                   quinto= 3
               //    console.log('tres',this.circles[j].id, quinto)
                   
                 }
                  if(quinto==3&&round==false){
                   this.circles[j].dupType = 5.4
                   round=true
                   quinto = 4
              //     console.log('quatro',this.circles[j].id, quinto)
                   
                 }
                      
                       if(quinto==4&&round==false){
                   this.circles[j].dupType = 5.5
                   round=true
                   quinto = 0
               //    console.log('quatro',this.circles[j].id, quinto)
                   
                 }
                 
                 
                 
               }
               
               
               
                      if (aliveDupCount[i]==6){
                 
                 
                  if(hexo==0&&round==false){
                   this.circles[j].dupType = 6.1
                   round=true
                   hexo = 1
               //    console.log('uno',this.circles[j].id, quinto)
                   
                 }
                 
                  if(hexo==1&&round==false){
                   this.circles[j].dupType = 6.2
                   round=true
                   hexo = 2
                 //  console.log('dos',this.circles[j].id, quinto)
                   
                 }
                 
                  if(hexo==2&&round==false){
                   this.circles[j].dupType = 6.3
                   round=true
                   hexo= 3
               //    console.log('tres',this.circles[j].id, quinto)
                   
                 }
                  if(hexo==3&&round==false){
                   this.circles[j].dupType = 6.4
                   round=true
                   hexo = 4
              //     console.log('quatro',this.circles[j].id, quinto)
                   
                 }
                      
                       if(hexo==4&&round==false){
                   this.circles[j].dupType = 6.5
                   round=true
                   hexo = 5
               //    console.log('quatro',this.circles[j].id, quinto)
                   
                 }
                 
                        
                           if(hexo==5&&round==false){
                   this.circles[j].dupType = 6.6
                   round=true
                   hexo = 0
               //    console.log('quatro',this.circles[j].id, quinto)
                   
                 }
                 
                 
               }
               
               
               
               
               
               
               
               
               
               
               
               
             } //end5
             
             
             
           } //end4
           
           
           round=false
         }//end3
      

      }
    //    }//end2
   //    console.log(alivePitches)
     
      for (let j = 0; j < this.circles.length; j++) {
               //   console.log(this.circles[j].dupType)
     
      } //end1
      
      }
      
  
  
  
  

  draw(aliveDups,aliveDupCount,alivePitches) {
    
    if(vstate){
    
    for (let i = 0; i < this.circles.length; i++) {
       
      this.circles[i].draw();
       this.circles[i].update(aliveDups,aliveDupCount)
     
     // this.circles[0].offsetX=15
    
    }
    
    }
  }
 
  update(
    aliveVoices,
    alivePitches,
     aliveDups,
     aliveDupCount,
    CConcept,
    FConcept,
    BbConcept,
    EbConcept,
    AbConcept,
    DbConcept,
    GbConcept,
    BConcept,
    EConcept,
    AConcept,
    DConcept,
    GConcept
  ) {
     
       
    //creating an array to work with the voices of active circles

    //this for loop deals with moving and destroying circles
    //scan circles

      /////////////////////////////////////////////
      ////////////////////////////////////
      ////////////////////////////////////////
      //HEY LOOK HERE
      ////////////////////////////////////
      /////////////////////////////////////
      /////////////////////////////////////
      //THE MISSING Bb PROBLEM
     // i THINK THE PROBLEM HAS TO DO WITH WHEN THE LENGTH OF THE CIRCLES ARRAY DECREASES IN LENGTH
      //
      
        
  
      
      
      
      
      
    for (let i = 0; i < this.circles.length; i++) {
      if (aliveVoices.includes(this.circles[i].voice)) {
        //create index variable
        let currentIndex = aliveVoices.indexOf(this.circles[i].voice);
        
       
 
        //these need to move over a single period of time, not just change x and y value
        if (alivePitches[currentIndex] == 0) {
                      if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
                      //  this.circles[i].targetXMem = this.circles[i].prevX
                    //    this.circles[i].targetYMem = this.circles[i].prevY
                        this.arrived = 'arrived'
 
                      }
          
          this.circles[i].setPoint(CConcept.x,CConcept.y);
          this.circles[i].id=0
             
       //   this.circles[i].y = CConcept.y;
        }

        if (alivePitches[currentIndex] == 1) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(DbConcept.x,DbConcept.y);
                    this.circles[i].id=1

                      
         // this.circles[i].y = DbConcept.y;
        }

        if (alivePitches[currentIndex] == 2) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(DConcept.x,DConcept.y);
                    this.circles[i].id=2

                      
         // this.circles[i].y = DConcept.y;
        }

        if (alivePitches[currentIndex] == 3) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                           this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
                   this.circles[i].setPoint(EbConcept.x,EbConcept.y);
                    this.circles[i].id=3

                      
          //this.circles[i].y = EbConcept.y;
        }
        if (alivePitches[currentIndex] == 4) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(EConcept.x,EConcept.y);
                    this.circles[i].id=4

                      
          //this.circles[i].y = EConcept.y;
        }
        if (alivePitches[currentIndex] == 5) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                           this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(FConcept.x,FConcept.y);
                    this.circles[i].id=5

                      
//          this.circles[i].y = FConcept.y;
        }
        if (alivePitches[currentIndex] == 6) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(GbConcept.x,GbConcept.y);
                    this.circles[i].id=6

                      
          //this.circles[i].y = GbConcept.y;
        }

        if (alivePitches[currentIndex] == 7) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(GConcept.x,GConcept.y);
                    this.circles[i].id=7

                      
          //this.circles[i].y = GConcept.y;
        }

        if (alivePitches[currentIndex] == 8) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                            this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(AbConcept.x,AbConcept.y);
                    this.circles[i].id=8

                      
         // this.circles[i].y = AbConcept.y;
        }

        if (alivePitches[currentIndex] == 9) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                         this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(AConcept.x,AConcept.y);
                    this.circles[i].id=9

                      
        //  this.circles[i].y = AConcept.y;
        }

        if (alivePitches[currentIndex] == 10) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                           this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(BbConcept.x,BbConcept.y);
                    this.circles[i].id=10

                      
         // this.circles[i].y = BbConcept.y;
        }

        if (alivePitches[currentIndex] == 11) {
  if(this.circles[i].x==this.circles[i].targetX&&this.circles[i].y==this.circles[i].targetY){
                          this.circles[i].prevX = this.circles[i].x
                            this.circles[i].prevY = this.circles[i].y
     this.arrived = 'arrived'

                      }
          this.circles[i].setPoint(BConcept.x,BConcept.y);
                    this.circles[i].id=11

                      
          //this.circles[i].y = BConcept.y;
        }
      } else {
        //destroy the circle (with fire?)
        //not taking into account when circles is empty
        this.circles.sort((a, b) => (a.voice > b.voice ? 1 : -1));
        this.circlesVoiceArray.sort((a, b) => (a > b ? 1 : -1));

        let currentVoice = this.circles[i].voice;
        //  console.log('cv',currentVoice)
        let cirVoiceIndex = this.circles.indexOf(currentVoice);
        let cirVoiceArrayIndex = this.circlesVoiceArray.indexOf(currentVoice);
        //    console.log('cvai',cirVoiceArrayIndex)

        this.circles.splice(cirVoiceArrayIndex, 1);
        this.circlesVoiceArray.splice(cirVoiceArrayIndex, 1);
        i=i-1
        //         console.log('cir',this.circles)
        //  console.log('cva',this.circlesVoiceArray)
      }
    
    } //end first for loop
//      console.log('-----')

    //this for loop deals with creation of circles
    //scan aliveVoices
    for (let i = 0; i < aliveVoices.length; i++) {
      if (this.circlesVoiceArray.includes(aliveVoices[i])) {
        //do nothing
      } else {
        //create the circle

        //I SHOULD BE GETTING A PING WHEN EVER IT CREATES ONE RIGHT???

        this.circlesVoiceArray.push(aliveVoices[i]);

        //these need to have a line that adds it to the circles array
        if (alivePitches[i] == 0) {
          this.createCircle(
            CConcept.x,
            CConcept.y,
            aliveVoices[i],
            this.radius,
            0
          );
        }

        if (alivePitches[i] == 1) {
          this.createCircle(
            DbConcept.x,
            DbConcept.y,
            aliveVoices[i],
            this.radius,1
          );
        }

        if (alivePitches[i] == 2) {
          this.createCircle(
            DConcept.x,
            DConcept.y,
            aliveVoices[i],
            this.radius,2
          );
        }

        if (alivePitches[i] == 3) {
          this.createCircle(
            EbConcept.x,
            EbConcept.y,
            aliveVoices[i],
            this.radius,3
          );
        }

        if (alivePitches[i] == 4) {
          this.createCircle(
            EConcept.x,
            EConcept.y,
            aliveVoices[i],
            this.radius,4
          );
        }

        if (alivePitches[i] == 5) {
          this.createCircle(
            FConcept.x,
            FConcept.y,
            aliveVoices[i],
            this.radius,5
          );

          //first chord contains this note, should ping
        }

        if (alivePitches[i] == 6) {
          this.createCircle(
            GbConcept.x,
            GbConcept.y,
            aliveVoices[i],
            this.radius,6
          );
        }

        if (alivePitches[i] == 7) {
          this.createCircle(
            GConcept.x,
            GConcept.y,
            aliveVoices[i],
            this.radius,7
          );
        }

        if (alivePitches[i] == 8) {
          this.createCircle(
            AbConcept.x,
            AbConcept.y,
            aliveVoices[i],
            this.radius,8
          );
        }

        if (alivePitches[i] == 9) {
          this.createCircle(
            AConcept.x,
            AConcept.y,
            aliveVoices[i],
            this.radius,9
          );
        }

        if (alivePitches[i] == 10) {
          this.createCircle(
            BbConcept.x,
            BbConcept.y,
            aliveVoices[i],
            this.radius,10
          );
        }

        if (alivePitches[i] == 11) {
          this.createCircle(
            BConcept.x,
            BConcept.y,
            aliveVoices[i],
            this.radius,11
          );
        }
      }
    } //end second for loop

    //          console.log('cva',this.circlesVoiceArray)
    //  console.log('cir',this.circles[1])
        //    console.log('cl',this.circles)
           this.dupSplitter(alivePitches,aliveDups,aliveDupCount)
      

      

  }
}
