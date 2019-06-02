<?php

    require_once("Song.php");

?>

<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Actor|Baloo&display=swap" rel="stylesheet">
    <link href="css/Tapis.css" rel="stylesheet" >
    

    </head>
<body>


<?php

/*$dir    = 'c:/wamp64/www/p5-test/music/';
$files1 = scandir($dir);
$files2 = scandir($dir, 1); // sorted DSC

$List_of_Available_Songs ="<div id='List_Available_Song_Container' >";

if (is_array($files1))
foreach($files1 as $Song ){
    $List_of_Available_Songs .= "<div class='List_Item'><a href='P5Test02.php?S=".md5($Song)."' >".$Song."</a></div>" ;
}

$List_of_Available_Songs .="</div>";

echo $List_of_Available_Songs;
print_r($files1);
echo "<br>";
print_r($files2);*/

$Song_Obj = new Song();
$Song_Obj->Songs_List(true);


?>


</body>

</html>