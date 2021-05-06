<!doctype html>
<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">


    <title>Hello, world!</title>
  </head>
  <body>
      <nav class="navbar navbar-dark bg-primary mb-3">
          <a href="/index.php" class="navbar-brand">Mon calendrier</a>
      </nav>
      <?php 
      require '../src/Date/Month.php';
      $month = new App\Date\Month(1, 2021);?>
      <h1>
          <?= $month->toString();
          ?>
      </h1>

  </body>
</html>