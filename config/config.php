<?php 

    $db_dsn = array(
        'host' => 'us-cdbr-east-02.cleardb.com',
        'dbname' => 'heroku_e9327b77dc02820',
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'b9d2d12673dc61';
    $db_pass = '6b32b1e3';

    $pdo = new PDO($dsn, $db_user, $db_pass);

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }