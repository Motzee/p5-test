<?php

/* 
    This class execute all the request regarding the songs

*/
const Music_Folder = 'c:/wamp64/www/p5-test/music/';

class Song {

    
    protected $Selected_Song = "";

function __construct(){

    //$this->Find_Selected_Song($Selected_Token);


}


function  Get_Selected_Song(){
    return $this->Selected_Song;
}

function Find_Selected_Song($Selected_Token){
    $files1 = $this->Songs_List(false);
    foreach($files1 as $Song ){

        if (md5($Song)==$Selected_Token) {
            $this->Selected_Song = $Song;
        }

    }

   

}


function Songs_List($sw_echo=true){

    $files1 = scandir(Music_Folder);
    //$files2 = scandir($dir, 1); // sorted DSC

    if ($sw_echo){


        $List_of_Available_Songs ="<div id='List_Available_Song_Container' >";
        if (is_array($files1)) 
            foreach($files1 as $Song ){
                $List_of_Available_Songs .= "<div class='List_Item'><a href='P5Test02.php?S=".md5($Song)."' >".$Song."</a></div>" ;
            }

        $List_of_Available_Songs .="</div>";
        echo $List_of_Available_Songs;
    } 
    else return $files1 ;

}

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------

function Create_JavaScriptCode(){

    $str = '<script lang =\'javascript\' >';
    $str .='let TD_Selected_Song=\'/music/' .$this->Selected_Song.'/'.$this->Selected_Song.'.ogg\';';

    $str .= '</script>';

    echo $str;
}

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------




} // class song

?>