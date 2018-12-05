<?php

  $evento1 = array( "id" => 1,
                    "fecha" => "15/11/2018",
                    "hora" => "18:30",
                    "nombre"=> "React CoWorking Space",
                    "precio"=> "150",
                    "direccion"=> "Minerva Campus",
                    "link"=> "minervacampus.com"
                    );
  
  $evento2 = array( "id" => 2,
                    "fecha" => "1/11/2018",
                    "hora" => "11:30",
                    "nombre"=> "Asado con los amigos",
                    "precio"=> "150",
                    "direccion"=> "la casa de juan",
                    "link"=> "lacasadejuan.com"
                    );
  $evento3 = array( "id" => 3,
                    "fecha" => "4/12/2018",
                    "hora" => "18:30",
                    "nombre"=> "Reunion con Alejandro",
                    "precio"=> "50",
                    "direccion"=> "algun cafe",
                    "link"=> ""
                    );
  $evento4 = array( "id" => 4,
                    "fecha" => "4/12/2018",
                    "hora" => "11:30",
                    "nombre"=> "Hoy nos pagan!",
                    "precio"=> "150",
                    "direccion"=> "tu empresa",
                    "link"=> "gotocme.com"
                    );
  
  $year = array($evento1, $evento2, $evento3, $evento4);

  echo json_encode($year);
