<?
if((isset($_POST['player'])&&$_POST['player']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")){
    $to = 'plaxa1985@gmail.com';
    $subject = 'Обратный звонок';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['player'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>                        
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Кристалл | Страйкбольный Клуб <strikeball@ru\r\n";
    mail($to, $subject, $message, $headers);
}
?>