<?PHP
include('./header.html');

if(isset($_GET['query'])) {
$page = $_GET['query'];
include('./careers/' . $page . '.html');
}

if(isset($_GET['cat'])) {
$category = $_GET['cat'];
$subcategory = $_GET['sub'];
include('./careers/' . $category . '/' . $subcategory . '.html');
}

include('./footer.html');
?>