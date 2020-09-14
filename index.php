<?php
    header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" href="css/main.css">
    <script data-ad-client="ca-pub-2397089338828705" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <title>Thornton's Custom Creations</title>
</head>
<body>
    <main id="app">
        <div class="container">
            <header class="header">
                <div class="topNavContent">
                    <img @click="showNav()" src="images/menu.svg" alt="Page Navigation Button">
                    <h2 class="navTitle">Thornton's Customs</h2>
                    <img src="images/slick2.jpg" alt="Logo">
                </div>
                <nav>
                    <span @click="hideNav()">X</span>
                    <ul>
                        <li @click="hideNav()"><router-link to="/">Home</router-link></li>
                        <li @click="hideNav()"><router-link to="/about">About</router-link></li>
                        <li @click="hideNav()"><router-link to="/projects">Work</router-link></li>
                        <li @click="hideNav()"><router-link to="/services">Services</router-link></li>
                        <li @click="hideNav()"><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </nav>
            </header>
        </div>
        <router-view></router-view>
    </main>
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-2397089338828705"
        data-ad-slot="4282714615"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="js/main.js" type="module"></script>
</body>
</html>