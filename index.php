<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" href="css/main.css">
    <title>Thornton's Custom Creations</title>
</head>
<body>
    <main id="app">
        <div class="container">
            <header class="header">
                <img @click="showNav()" src="images/slick1.jpg" alt="Page Navigation Button">
                <h2 class="navTitle">Company Title</h2>
                <nav>
                    <span @click="hideNav()">X</span>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/">Work</router-link></li>
                        <li><router-link to="/">Services</router-link></li>
                        <li><router-link to="/">Contact</router-link></li>
                    </ul>
                </nav>
                <div class="navBrand">
                    <img src="images/slick2.jpg" alt="Logo">
                </div>
            </header>
        </div>
        <router-view></router-view>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="js/main.js" type="module"></script>
</body>
</html>