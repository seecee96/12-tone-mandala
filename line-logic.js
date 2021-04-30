class Poly {
  constructor(x,y){
    this.x = x
    this.y = y
    this.radius=7
    
  }
   draw() { 
    fill(255, 255, 255);
    stroke(255, 255, 255);
    circle(this.x, this.y, this.radius);
  }
  
  
}


class Line {
  constructor(tone1,tone2,id ){

    this.id = id
    this.tone1 = tone1
    this.tone2 = tone2
    
    
  }
  
  draw(){
    if(isMobile==false){
  strokeWeight(12.73)
    }
    
        if(isMobile==true){
  strokeWeight(9.63)

        }
    
    if(this.id==0){
      if(lrstate){
             stroke(255, 0, 0);
   line(this.tone1.x, this.tone1.y, this.tone2.x, this.tone2.y)  
      }
    }
     if(this.id==1){
       if(lostate){
             stroke(255, 120, 0);
   line(this.tone1.x, this.tone1.y, this.tone2.x, this.tone2.y)  
    }
     }
    
      if(this.id==2){
        if(lystate){
              stroke(255, 255, 0);
   line(this.tone1.x, this.tone1.y, this.tone2.x, this.tone2.y)  
    }
      }
    
      if(this.id==3){
        if(lgstate){
             stroke(0, 255, 0);
   line(this.tone1.x, this.tone1.y, this.tone2.x, this.tone2.y)  
    }
      }
    
      if(this.id==4){
        if(lbstate){
             stroke(0, 121, 255);
   line(this.tone1.x, this.tone1.y, this.tone2.x, this.tone2.y)  
    }
      }
      if(this.id==5){
        if(lpstate){
            stroke(166, 0, 174);
   line(this.tone1.x, this.tone1.y, this.tone2.x, this.tone2.y)  
    }
    
      }
    
    
    
  }
  
  update(){  
  }
  
  
}//end class

class LineFactory {
  constructor(){
    
    this.lines =[]
    this.inters=[]
  }
  
  //create line function
   activeLine(tone1, tone2,id) {
const birthedLine = new  Line(tone1,tone2,id)  
this.lines.push(birthedLine)
}
  
   activeInters(x, y) {
const birthedInters = new  Poly(x,y)  
this.inters.push(birthedInters)
}
  
  draw(){
     for(let i = 0; i < this.lines.length; i++){
       this.lines[i].draw()
       
     }
    for(let i = 0; i < this.inters.length; i++){
       this.inters[i].draw()
       
     }
    
    
  }
  
  
  
  
  
  ///////////////////////
  //////////////////////
  ///////////////////////
  //////intersect stuff start
  
  
  /*
  intersects(point1, point2, point3, point4){
     const ua = ((point4.x - point3.x) * (point1.y - point3.y) - 
             (point4.y - point3.y) * (point1.x - point3.x)) /
            ((point4.y - point3.y) * (point2.x - point1.x) - 
             (point4.x - point3.x) * (point2.y - point1.y));
  
  const ub = ((point2.x - point1.x) * (point1.y - point3.y) - 
             (point2.y - point1.y) * (point1.x - point3.x)) /
            ((point4.y - point3.y) * (point2.x - point1.x) - 
             (point4.x - point3.x) * (point2.y - point1.y));
  
  const x = point1.x + ua * (point2.x - point1.x);
  const y = point1.y + ua * (point2.y - point1.y);
  
  return [x, y]
    
    
    
  }
  
   
  createIntersectPoints(alivePitchesNoDup){
    
    
     if(alivePitchesNoDup.length==4){
             let line1p1 = this.lines[0].tone1
              let line1p2 = this.lines[0].tone2
              
              let line2p1 = this.lines[1].tone1
              let line2p2 = this.lines[1].tone2
              
              let line3p1 = this.lines[2].tone1
              let line3p2 = this.lines[2].tone2
              
              let line4p1 = this.lines[3].tone1
              let line4p2 = this.lines[3].tone2
          /*    
     let inter1 
           
     
     this.activeInters(inter1[0],inter1[1])
       this.activeInters(inter2[0],inter2[1])
       this.activeInters(inter3[0],inter3[1])
       this.activeInters(inter4[0],inter4[1])
       this.activeInters(inter5[0],inter5[1])
       this.activeInters(inter6[0],inter6[1])
          console.log(inter1)
          */
          
         /* 
          if(line1.intersects(line2)){
            
            console.log('hi')
          }
        if(line2.intersects(line3)){
            
            console.log('hi')
          }
        if(line3.intersects(line4)){
            
            console.log('hi')
          }
        if(line4.intersects(line1)){
            
            console.log('hi')
          }
        if(line1.intersects(line3)){
            
            console.log('hi')
          }
        if(line4.intersects(line2)){
             
            console.log('hi')
          }
       
       
      
       
       
     }
    
  }
  
      ///////////////////////////
       //////////////////////////
       //////////////////////////
       //intersect stuff end  
  */
  
  update(alivePitchesNoDup,CConcept, FConcept, BbConcept, EbConcept, AbConcept, DbConcept, GbConcept,
                           BConcept, EConcept, AConcept, DConcept, GConcept){
    this.lines=[]
    
 //fifths
  if(alivePitchesNoDup.includes(0)&&alivePitchesNoDup.includes(7)){
       stroke(255, 0, 0);
    //draw line
this.activeLine(GConcept, CConcept,0)
   

    
  }
  else{
    
    //destroy line
  }
  
  
    if(alivePitchesNoDup.includes(7)&&alivePitchesNoDup.includes(2)){
       stroke(255, 0, 0);
    //draw line
this.activeLine(DConcept, GConcept,0)

    
  }
  else{
     
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(2)&&alivePitchesNoDup.includes(9)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(AConcept, DConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(9)&&alivePitchesNoDup.includes(4)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(EConcept, AConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(11)){
       stroke(255, 0, 0);
    //draw line
this.activeLine(BConcept, EConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(11)&&alivePitchesNoDup.includes(6)){
       stroke(255, 0, 0);
    //draw line
this.activeLine(GbConcept, BConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(6)&&alivePitchesNoDup.includes(1)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(DbConcept, GbConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(1)&&alivePitchesNoDup.includes(8)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(AbConcept, DbConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
    if(alivePitchesNoDup.includes(8)&&alivePitchesNoDup.includes(3)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(EbConcept, AbConcept,0)

    
  } 
  else{
    
    //destroy line
  }
    if(alivePitchesNoDup.includes(3)&&alivePitchesNoDup.includes(10)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(BbConcept, EbConcept,0)

    
  }
  else{
    
    //destroy line
  }
    if(alivePitchesNoDup.includes(10)&&alivePitchesNoDup.includes(5)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(FConcept, BbConcept,0)

    
  }
  else{
    
    //destroy line
  }
    if(alivePitchesNoDup.includes(5)&&alivePitchesNoDup.includes(0)){
       stroke(255, 0, 0);
    //draw line
 this.activeLine(FConcept, CConcept,0)

    
  }
  else{
    
    //destroy line
  }
  
  
  
  
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  
  //whole tones
   if(alivePitchesNoDup.includes(2)&&alivePitchesNoDup.includes(0)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(DConcept, CConcept,1)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(2)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(DConcept, EConcept,1)

    
  }
  else{
    
    //destroy line
  }
     if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(6)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(EConcept, GbConcept,1)

    
  }
  else{
    
    //destroy line
  }
     if(alivePitchesNoDup.includes(6)&&alivePitchesNoDup.includes(8)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(GbConcept, AbConcept,1)

    
  }
  else{
    
    //destroy line
  }
     if(alivePitchesNoDup.includes(8)&&alivePitchesNoDup.includes(10)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(AbConcept, BbConcept,1)

    
  }
  else{
    
    //destroy line
  }
     if(alivePitchesNoDup.includes(10)&&alivePitchesNoDup.includes(0)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(BbConcept, CConcept,1)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(7)&&alivePitchesNoDup.includes(9)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(GConcept, AConcept,1)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(9)&&alivePitchesNoDup.includes(11)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(AConcept, BConcept,1)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(11)&&alivePitchesNoDup.includes(1)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(BConcept, DbConcept,1)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(1)&&alivePitchesNoDup.includes(3)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(DbConcept, EbConcept,1)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(3)&&alivePitchesNoDup.includes(5)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(EbConcept, FConcept,1)

    
  }
  else{
    
    //destroy line
  }
     if(alivePitchesNoDup.includes(5)&&alivePitchesNoDup.includes(7)){
         stroke(255, 120, 0);
    //draw line
 this.activeLine(FConcept, GConcept,1)

    
  }
  else{
    
    //destroy line
  }
 
  
  
  
  
  
  //////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  
  
  //minor thirds
     if(alivePitchesNoDup.includes(0)&&alivePitchesNoDup.includes(9)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(CConcept, AConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(9)&&alivePitchesNoDup.includes(6)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(AConcept, GbConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(6)&&alivePitchesNoDup.includes(3)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(GbConcept, EbConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(3)&&alivePitchesNoDup.includes(0)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(EbConcept, CConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
  //square2
  
       if(alivePitchesNoDup.includes(7)&&alivePitchesNoDup.includes(4)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(GConcept, EConcept,2)

    
  }
  else{
    
    //destroy line
  }
       if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(1)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(EConcept, DbConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(1)&&alivePitchesNoDup.includes(10)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(DbConcept, BbConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(10)&&alivePitchesNoDup.includes(7)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(BbConcept, GConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
  
  //square 3
       if(alivePitchesNoDup.includes(2)&&alivePitchesNoDup.includes(11)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(DConcept, BConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(11)&&alivePitchesNoDup.includes(8)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(BConcept, AbConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(8)&&alivePitchesNoDup.includes(5)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(AbConcept, FConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
       if(alivePitchesNoDup.includes(5)&&alivePitchesNoDup.includes(2)){
         stroke(255, 255, 0);
    //draw line
 this.activeLine(FConcept, DConcept,2)

    
  }
  else{
    
    //destroy line
  }
  
  
  
  
  
  ////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  
  //major thirds
  
       if(alivePitchesNoDup.includes(0)&&alivePitchesNoDup.includes(4)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(CConcept, EConcept,3)

    
  }
  else{
    
    //destroy line
  }
      if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(8)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(EConcept, AbConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(8)&&alivePitchesNoDup.includes(0)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(AbConcept, CConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
  /////triangle 2
  
      if(alivePitchesNoDup.includes(7)&&alivePitchesNoDup.includes(11)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(GConcept, BConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(11)&&alivePitchesNoDup.includes(3)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(BConcept, EbConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(3)&&alivePitchesNoDup.includes(7)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(EbConcept, GConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
  /////triangle 3
  
      if(alivePitchesNoDup.includes(2)&&alivePitchesNoDup.includes(6)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(DConcept, GbConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(6)&&alivePitchesNoDup.includes(10)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(GbConcept, BbConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(10)&&alivePitchesNoDup.includes(2)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(BbConcept, DConcept,3)
 
    
  }
  else{
    
    //destroy line
  }
  
  ////triangle 4
  
      if(alivePitchesNoDup.includes(9)&&alivePitchesNoDup.includes(1)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(AConcept, DbConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(1)&&alivePitchesNoDup.includes(5)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(DbConcept, FConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
      if(alivePitchesNoDup.includes(5)&&alivePitchesNoDup.includes(9)){
   stroke(0, 255, 0);
    //draw line
 this.activeLine(FConcept, AConcept,3)

    
  }
  else{
    
    //destroy line
  }
  
  
  ////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
  //chromatic
  
      if(alivePitchesNoDup.includes(0)&&alivePitchesNoDup.includes(1)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(CConcept, DbConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(1)&&alivePitchesNoDup.includes(2)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(DbConcept, DConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
  
     if(alivePitchesNoDup.includes(2)&&alivePitchesNoDup.includes(3)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(DConcept, EbConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(3)&&alivePitchesNoDup.includes(4)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(EbConcept, EConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(5)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(EConcept, FConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(5)&&alivePitchesNoDup.includes(6)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(FConcept, GbConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(6)&&alivePitchesNoDup.includes(7)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(GbConcept, GConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(7)&&alivePitchesNoDup.includes(8)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(GConcept, AbConcept,4)

    
  }
  else{
    
    //destroy line
  }
     if(alivePitchesNoDup.includes(8)&&alivePitchesNoDup.includes(9)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(AbConcept, AConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(9)&&alivePitchesNoDup.includes(10)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(AConcept, BbConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(10)&&alivePitchesNoDup.includes(11)){
     stroke(0, 121, 255);
    //draw line
       ////////fukkkkkkkkkk
 this.activeLine(BbConcept, BConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
     if(alivePitchesNoDup.includes(11)&&alivePitchesNoDup.includes(0)){
     stroke(0, 121, 255);
    //draw line
 this.activeLine(BConcept, CConcept,4)

    
  }
  else{
    
    //destroy line
  }
  
  
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
  //tritones
  
     if(alivePitchesNoDup.includes(0)&&alivePitchesNoDup.includes(6)){
       stroke(166, 0, 174);
       //draw line
 this.activeLine(CConcept, GbConcept,5)

    
  }
  else{
    
    //destroy line
  }
  
  if(alivePitchesNoDup.includes(1)&&alivePitchesNoDup.includes(7)){
       stroke(166, 0, 174);
       //draw line
 this.activeLine(GConcept, DbConcept,5)

    
  }
  else{
    
    //destroy line
  }
  
  if(alivePitchesNoDup.includes(2)&&alivePitchesNoDup.includes(8)){
       stroke(166, 0, 174);
       //draw line
 this.activeLine(DConcept, AbConcept,5)

    
  }
  else{
    
    //destroy line
  }
  
  if(alivePitchesNoDup.includes(3)&&alivePitchesNoDup.includes(9)){
       stroke(166, 0, 174);
       //draw line
 this.activeLine(AConcept, EbConcept,5)

    
  }
  else{
    
    //destroy line
  }
  
  if(alivePitchesNoDup.includes(4)&&alivePitchesNoDup.includes(10)){
       stroke(166, 0, 174);
       //draw line
 this.activeLine(EConcept, BbConcept,5)

    
  }
  else{
    
    //destroy line
  }
  
  if(alivePitchesNoDup.includes(5)&&alivePitchesNoDup.includes(11)){
       stroke(166, 0, 174);
       //draw line
 this.activeLine(BConcept, FConcept,5)

    
  }
  else{
    
    //destroy line
  }
    
    
  //  this.createIntersectPoints(alivePitchesNoDup)
    
    
  }//end update
  
}//end class








 
