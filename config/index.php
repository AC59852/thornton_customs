<?php

    require('functions.php');

    if(isset($_GET["getWork"])) {
        getWork($pdo);

        $allWork = getWork($pdo);

        echo json_encode($allWork);
    };

    if(isset($_GET["getServices"])) {
        getServices($pdo);

        $allServices = getServices($pdo);

        echo json_encode($allServices);
    }