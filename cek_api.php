<?php

$url = 'https://content-main-api-production.sicepat.com/public/delivery-fee/fare-non-international';

$data = array(
    "origin"=>"CGK",
    "destination"=>"SRG21602",
    "weight"=>"1",
    "p"=>20,
    "l"=>10,
    "t"=>10,
);

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }

var_dump($result);


?>