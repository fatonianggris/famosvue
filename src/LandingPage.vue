<script>
import('./assets/css/login/main.css')
import('./assets/css/main/main-talenta.css')
</script>
<template>
    <main>
        <section class="block-ap ">
            <div class="container">
                <h2 class="masthead__title text-center">
                    Bangun Branding Anda Bersama Talenta Kreatif dari FAMOS.
                </h2>
                <div class="row justify-content-between text-center">
                    <div class="col-md-4 item item-klien">
                        <div class="item__img">
                            <a href="https://famoscompany.com/about_client"><img
                                    src="../src/assets/icons/img-produk-klien.png" /></a>
                        </div>
                        <div class="item__title">
                            <h4 class="text-danger"><b>Login Klien</b></h4>
                        </div>
                        <div class="offset-3 col-6 text-center">
                            <router-link to="/login/client" style="text-decoration: none; color: inherit;">
                                <button class="btn btn-danger btn-block" type="submit">Masuk</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-4 item item-klien">
                        <div class="item__img">
                            <a href="https://famoscompany.com/about_client"><img
                                    src="../src/assets/icons/img-produk-klien.png" /></a>
                        </div>
                        <div class="item__title">
                            <h4 class="text-success"><b>Login Admin</b></h4>
                        </div>
                        <div class="offset-3 col-6 text-center">
                            <router-link to="/login/admin" style="text-decoration: none; color: inherit;"><button
                                    class="btn btn-success btn-block" type="submit">Masuk</button>
                            </router-link>
                        </div>

                    </div>
                    <div class="col-md-4 item">
                        <div class="item__img">
                            <a href="https://famoscompany.com/about_talenta"><img
                                    src="../src/assets/icons/img-produk-klien.png" /></a>
                        </div>
                        <div class="item__title">
                            <h4 class="text-warning"><b>Login Talent</b></h4>
                        </div>
                        <div class="offset-3 col-6 text-center">
                            <router-link to="/login/talent" style="text-decoration: none; color: inherit;">
                                <button class="btn btn-warning btn-block" type="submit">Masuk</button>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="footer__main">
            <div class="container">
                <div class="footer__text">
                    <div class="cpyright">Allright Reserved © Famos Company</div><a href="#">Kebijakan Privasi</a>
                </div>
            </div>
        </div>
    </footer>
</template>

