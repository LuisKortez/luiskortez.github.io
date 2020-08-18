<?php
if((isset($_POST['player'])&&$_POST['player']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")) {

    $meassage = '';
    $meassage .= 'Имя - '. $_POST['player'];
    $meassage .= '; Телефон - '. $_POST['tel'];
    $meassage .= '; Тема - '. $_POST['game'] .';';

    //$mychat_id = '340779919'; // мой
    $chat_id = '465517146'; // Павел
    $bot = '1295868795:AAEKMgeS3IUekxcPp-rbvYTImn0YlOrzqns';

    header("Location: https://api.telegram.org/bot". $bot ."/sendMessage?chat_id=". $chat_id ."&text=".$meassage);
    die();
}