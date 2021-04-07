var canvas=new fabric.Canvas("canvas");
player_x=10;
player_y=50;
blockimageheight=50;
blockimagewidth=50;
var player_object="";
var blockimageobject="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(100);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
});
}
function block_update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    block_object=Img;
    block_object.scaleToWidth(blockimagewidth);
    block_object.scaleToHeight(blockimageheight);
    block_object.set({
    top:player_y,left:player_x
    });
    canvas.add(block_object);
    });
    }
window.addEventListener("keydown",keyclicked); 
    function keyclicked(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="65") {
     block_update("captain_america_left_hand.png");
     console.log("a");
    };
    if (keypressed=="66") {
        block_update("hulk_face.png");
        console.log("b");
       };
       if (keypressed=="67") {
        block_update("hulk_left_hand.png");
        console.log("c");
       };   
       if (keypressed=="68") {
        block_update("hulk_legs.png");
        console.log("d");
       }; 
       if (keypressed=="69") {
        block_update("hulk_right_hand.png");
        console.log("e");
       };   
       if (keypressed=="70") {
        block_update("hulkd_body.png");
        console.log("f");
       };          if (keypressed=="71") {
        block_update("ironman_body.png");
        console.log("g");
       };   
       if (keypressed=="72") {
        block_update("ironman_face.png");
        console.log("h");
       };   
       if (keypressed=="73") {
        block_update("ironman_legs.png");
        console.log("i");
       };
       if (keypressed=="74") {
        block_update("ironman_right_hand.png");
        console.log("j");
       };
       if (keypressed=="75") {
        block_update("spiderman_body.png");
        console.log("k");
       };
        if (keypressed=="76") {
            block_update("sdiperman_face.png");
            console.log("l");
}; 
if (keypressed=="77") {
    block_update("spiderman_legs.png");
    console.log("m");
   }; 
   if (keypressed=="78") {
    block_update("spiderman_right_hand.png");
    console.log("n");
   }; 
   if (keypressed=="79") {
    block_update("thor_face.png");
    console.log("o");
   }; 
   if (keypressed=="80") {
    block_update("thor_left_hand.png");
    console.log("p");
    if (keypressed=="81") {
        block_update("thor_right_hand.png");
        console.log("q");
}; 
};      
       if (e.shiftKey==true && keypressed=="82"){
       console.log("r")
       blockimageheight=blockimageheight+10;
       blockimagewidth=blockimagewidth+10;
       document.getElementById("current_height").innerHTML=blockimageheight;
       document.getElementById("current_width").innerHTML=blockimagewidth;
       };  
       if (e.shiftKey==true && keypressed=="83"){
        console.log("s")
        blockimageheight=blockimageheight-10;
        blockimagewidth=blockimagewidth-10;
        document.getElementById("current_height").innerHTML=blockimageheight;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        };        
if (keypressed==37) {
    left()    
      }; 
      if (keypressed==38) {
      up()   
      };
      if (keypressed==39) {
      right()    
      };
      if (keypressed==40) {
       down()   
      };
    };                     
function up(){
if (player_y>=10) {
player_y=player_y-blockimageheight;
canvas.remove(player_object);
player_update();    
}
};
function down(){
  if (player_y<=500) {
  player_y=player_y+blockimageheight;
  canvas.remove(player_object);
  player_update();    
  }
  };
  function left(){
  if (player_x>=10) {
player_x=player_x-blockimagewidth;
canvas.remove(player_object);
player_update();      
}
};
function right(){
if (player_x<=700) {
  player_x=player_x+blockimagewidth;
  canvas.remove(player_object);
  player_update();    
}
}


