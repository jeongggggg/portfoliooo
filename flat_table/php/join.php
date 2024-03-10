<?php

include 'db_conn.php';

$type = $_POST['type'];

if($type == "dupli_chk") {

    $user_id = htmlspecialchars($_POST['id']);

    $sql = "select * from aj_flat_member where m_id='$user_id'";

    $result = mysqli_query($conn, $sql);
    $result_count = mysqli_num_rows($result);

    $data['r_count'] = $result_count;
    $data['sql'] = $sql;
    
}

else if($type == "join"){
    $name = $_POST['name'];
    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $email = $_POST['email'];
    $today = date('Y-m-d');

    $sql = "insert into aj_flat_member values ('','$id',password('$pw'),'$name','$email','$today');";

    mysqli_query($conn, $sql);
    $data['sql'] = $sql;

}


mysqli_close($conn);
echo json_encode($data);
?>