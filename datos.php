<?php

  $evento1 = array( "fecha" => "3/11/2018",
                    "dia" => 3,
                    "mes" => 11,
                    "hora" => "11:30",
                    "nombre"=> "Asado con los amigos",
                    "precio"=> "150",
                    "direccion"=> "la casa de juan",
                    "link"=> "lacasadejuan.com"
                    );
  
  $evento2 = array( "fecha" => "1/11/2018",
                    "dia" => 1,
                    "mes" => 11,
                    "hora" => "11:30",
                    "nombre"=> "Asado con los amigos",
                    "precio"=> "150",
                    "direccion"=> "la casa de juan",
                    "link"=> "lacasadejuan.com"
                    );
  
  $month1 = array($evento1, $evento2, $evento1, $evento2,$evento1, $evento2,$evento1, $evento2);
  $month2 = array($evento1, $evento2);
  $year = array("noviembre" => $month1, "diciembre" => $month2);


  echo json_encode($year);
