<script>
  location.href = "/";
</script>
<?php 
$email = $_POST["email"];
$file = fopen("email_list.txt", "a");
fwrite($file, $email . "\n");
fclose($file);
?>


