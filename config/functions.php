<?php
    require('config.php');
    session_start();
    
    function getWork($conn) {
        $query = "SELECT * FROM tbl_work";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getServices($conn) {
        $query2 = "SELECT * FROM tbl_services";
        $stmt = $conn->query($query2);
        $stmt->execute();

        $result2 = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result2[] = $row;
        }

        return $result2;
    };