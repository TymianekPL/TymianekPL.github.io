<?php
include('header.php');

function HasRole($role)
{
     return isset($_SESSION['ROLE']) && $_SESSION['ROLE'] == $role;
}

if (HasRole("1") && HasRole("2")) {
     header('location:news.php');
     die();
}
