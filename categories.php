<?PHP
include('./header.html');

if(isset($_GET['query'])) {
echo $_GET['query'];
}

include('./footer.html');
?>