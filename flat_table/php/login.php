<?php
session_start();

include 'db_conn.php';

$user_id = $_POST['id'];
$user_pw = $_POST['pw'];

$sql = "select * from aj_flat_member where m_id='$user_id' and m_pw=password('$user_pw')";

$result = mysqli_query($conn, $sql);

$result_count = mysqli_num_rows($result);

$row = mysqli_fetch_array($result);

$data['r_count'] = $result_count; // 가져갈 정보의 개수
$data['id'] = $row['m_id'];
$data['pw'] = $row['m_pw'];
$data['name'] = $row['m_name'];
$data['sql'] = $sql;

$_SESSION['NAME'] = $data['name'];


mysqli_close($conn);
echo json_encode($data);

?>