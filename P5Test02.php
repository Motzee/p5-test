<?php

require_once("Song.php");
$Song_Obj = new Song();
$Song_Obj->Find_Selected_Song($_GET['S']);
$Song_Obj->Create_JavaScriptCode();

?>
<html>
    <head>
        <title>P% test</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.sound.min.js"></script>
    <script language="javascript" type="text/javascript" src="js/p5.play.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Caveat|Courgette&display=swap" rel="stylesheet">

    <link href="css/Tapis.css" rel="stylesheet" />

    <?php $Song_Obj->Create_JavaScriptCode(); ?>
         
    
        
    </head>
    <body>
        <div id='Main_Container'>
        <div id="Canvas_Container">
            </div>
            <div id="Player_Details_Container">
                <div id="Player_Details_Item" >Player: <span>Aazam</span> </div>
                <div id="Player_Details_Item" >Song: <span><?php echo($Song_Obj->Get_Selected_Song()); ?></span> </div>
                <div id="Player_Details_Item" >Score: <span id="Score">0</span> </div>
                <div id="Player_Details_Button" ></div>
            </div>
            
        </div>
            <script lang="javascript"  type="text/javascript" src="js/P5Test.js<?php echo('?t='.time()); ?>" ></script>
    </body>
</html>