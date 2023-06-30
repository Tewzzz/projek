<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/bootstrap.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/stylefooter.css">
    <title>Saung Eling</title>
</head>
<body>
    @include('tamplates.navbar')
    <div class="container">
        @yield('content')
    </div>
    @include('tamplates.footer')
    <script src="/assets/js/bootstrap.min.cs"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

    {{-- fontawesome --}}
    <script src="https://kit.fontawesome.com/3ed4f57cc0.js" crossorigin="anonymous"></script>
</body>
</html>
