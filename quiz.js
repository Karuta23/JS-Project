
            var button1 = document.getElementById('b1');
            var button2 = document.getElementById('b2');
            var otazka = 0;
            var skore = 0;
            var maxskore = 0;
            var Aa = document.getElementById("Aa");
            var Ba = document.getElementById("Ba");
            var Ca = document.getElementById("Ca");
            var Poradi = document.getElementById("Poradi");
            var A = document.getElementById("A");
            var B = document.getElementById("B");
            var C = document.getElementById("C");
            var A1 = document.getElementById("A1");
            var B1 = document.getElementById("B1");
            var C1 = document.getElementById("C1");
            var Fin = document.getElementById("Fin");
            var vysledek = document.getElementById("vysledek");
            var F = true;
            var Q = document.getElementById("otazka");
            var headerQ = document.getElementById("headerQ");
            var b2 = document.getElementById("b2");
            var pocetQ = document.getElementById("PocetQ");
            var Nbar = document.getElementById("negative");
            var Pbar = document.getElementById("positive");
            var body = document.getElementById("body");
            var Question = document.getElementById("Question");
            var bodQ = 1;
            var Pocetsekund = document.getElementById("Pocetsekund");
            var time = document.getElementById("time");
            var NoTime = document.getElementById("NoTime");

            var game = document.getElementById("quiz");


            function Nastaveni() {

                PocetQ = document.getElementById("PocetQ").value;
                if (PocetQ >= 1 && PocetQ <= 20) {
                    maxskore = pocetQ.value;

                    dalsi();
                    Question.style.opacity = "0";
                    headerQ.style.opacity = "0";
                    NastavCas();
                    setTimeout(function F3() {
                        NoTime.style.display = "none";
                    }, 100)

                    otazky = nastavotazky("Hlavní města");
                    setTimeout(function F1() {
                        headerQ.style.display = "block";
                        Question.style.display = "block";
                    }, 1200)

                    setTimeout(function F2() {
                        Question.style.opacity = "1";
                        headerQ.style.opacity = "1";
                    }, 2000)

                    game.style.display = "block";
                }

            }

            function kontrola() {




                if (Aa.checked) {
                    if (otazky[otazka].odpoved.a == otazky[otazka].sodpoved) {
                        A1.style.backgroundColor = "rgba(153, 255, 51, 0.7)";
                        B1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        C1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        skore += bodQ;
                        button1.style.display = 'none';
                        button2.style.display = 'block';
                        A1.style.zIndex = "-1";
                        B1.style.zIndex = "-1";
                        C1.style.zIndex = "-1";
                        if (PocetQ <= otazka + 1) {
                            if (casovac != null) {
                                clearInterval(casovac);

                            }
                        }

                    }
                    else {
                        A1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        A1.style.zIndex = "-1";
                        Aa.style.disabled = "true";
                        Ba.checked = false;
                        bodQ--;

                    }
                }

                if (Ba.checked) {
                    if (otazky[otazka].odpoved.b == otazky[otazka].sodpoved) {

                        A1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        B1.style.backgroundColor = "rgba(153, 255, 51, 0.7)";
                        C1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        skore += bodQ;
                        A1.style.zIndex = "-1";
                        B1.style.zIndex = "-1";
                        C1.style.zIndex = "-1";

                        button1.style.display = 'none';
                        button2.style.display = 'block';
                        if (PocetQ <= otazka + 1) {
                            if (casovac != null) {
                                clearInterval(casovac);

                            }
                        }

                    }
                    else {
                        B1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        B1.style.zIndex = "-1";
                        Ba.style.disabled = "true";
                        Ba.checked = false;
                        bodQ--;

                    }
                }

                if (Ca.checked) {
                    if (otazky[otazka].odpoved.c == otazky[otazka].sodpoved) {
                        A1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        B1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        C1.style.backgroundColor = "rgba(153, 255, 51, 0.7)";
                        skore += bodQ;
                        button1.style.display = 'none';
                        button2.style.display = 'block';
                        A1.style.zIndex = "-1";
                        B1.style.zIndex = "-1";
                        C1.style.zIndex = "-1";
                        if (PocetQ <= otazka + 1) {
                            if (casovac != null) {
                                clearInterval(casovac);

                            }
                        }
                    }
                    else {
                        C1.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        C1.style.zIndex = "-1";
                        Ca.style.disabled = "true";

                        Ca.checked = false;
                        bodQ--;

                    }
                }
            }



            function dalsi() {

                vycisti();
                bodQ = 1;

                if (F) {
                    F = false;
                }
                else {
                    otazka++;
                }

                if (otazka + 1 >= PocetQ) {


                    b2.innerHTML = "Ukončit kvíz"
                }

                if (otazka + 1 > PocetQ) {

                    Ukonci();
                }

                setTimeout(function F1() {
                    A.innerHTML = otazky[otazka].odpoved.a;
                    B.innerHTML = otazky[otazka].odpoved.b;
                    C.innerHTML = otazky[otazka].odpoved.c;
                    Q.innerHTML = otazky[otazka].Otazka;
                }, 500)


                setTimeout(function F2() {
                    A1.style.opacity = "1";
                    B1.style.opacity = "1";
                    C1.style.opacity = "1";
                    Q.style.opacity = "1";
                }, 1000)

                Poradi.innerHTML = otazka + 1 + "/" + maxskore;

                button1.style.display = 'block';
                button2.style.display = 'none';

            }


            function vycisti() {

                A1.style.backgroundColor = "";
                B1.style.backgroundColor = "";
                C1.style.backgroundColor = "";
                A1.style.textShadow = "";
                B1.style.textShadow = "";
                C1.style.textShadow = "";
                A.innerHTML = "";
                B.innerHTML = "";
                C.innerHTML = "";
                A1.style.zIndex = "1";
                B1.style.zIndex = "1";
                C1.style.zIndex = "1";
                Aa.style.disabled = "false";
                Ba.style.disabled = "false";
                Ca.style.disabled = "false";

                setTimeout(function F1() {
                    A1.style.opacity = "0";
                    B1.style.opacity = "0";
                    C1.style.opacity = "0";
                    Q.style.opacity = "0";
                }, 0)




                Aa.checked = false;
                Ba.checked = false;
                Ca.checked = false;
            }

            

            function NastavCas() {


                var celkovycas = PocetQ * 100;
                var zc = celkovycas;
                casovac = setInterval(function F1() {

                    if (zc >= 0) {
                        if (zc >= 40 && zc <= 20) { }
                        Pocetsekund.innerHTML = zc / 10 + " sekundy";
                        if (zc == 10) { }
                        Pocetsekund.innerHTML = zc / 10 + " sekunda";
                        if (zc == 0 || zc >= 5) {
                            Pocetsekund.innerHTML = zc / 10 + " sekund";
                        }
                        time.style.width = ((100 / celkovycas) * zc) + "%";
                        zc -= 1;
                    }
                    else {
                        Ukonci();
                        NoTime.style.display = "block";
                        clearInterval(casovac);
                    }

                    if (otazka == PocetQ) {

                        clearInterval(casovac);
                    }


                }, 100
                )
            }







            function Ukonci() {
                Question.style.display = "none";
                headerQ.style.display = "none";
                Fin.style.opacity = "0";
                Fin.style.display = "block";

                setTimeout(function F1() {
                    con.style.width = "35%";


                }, 200)

                setTimeout(function F2() {
                    Fin.style.opacity = "1";
                }, 1000)

                vysledek.innerHTML = ((skore / maxskore) * 100) + "%";
                if (((skore / maxskore) * 100) < -30) {
                    vysledek.style.color = "#ff0000";
                }

                if (((skore / maxskore) * 100) >= -30 && ((skore / maxskore) * 100) <= 30) {
                    vysledek.style.color = "#ffff00";
                }

                if (((skore / maxskore) * 100) > 30) {
                    vysledek.style.color = "#99ff33";
                }


                if (skore == 1 || skore == -1) {
                    body.innerHTML = skore + " bod";
                }

                if ((skore >= 2 && skore <= 4) || (skore <= -2 && skore >= -4)) {
                    body.innerHTML = skore + " body";
                }

                if ((skore >= 5 || skore <= -5) || skore == 0) {
                    body.innerHTML = skore + " bodů";
                }


                setTimeout(function F3() {
                    if (skore < 0) {



                        Nbar.style.width = (((skore * (-1)) / maxskore) * 50) + "%";
                        Nbar.style.left = (50 - (((skore * (-1)) / maxskore) * 50)) + "%";
                    }

                    if (skore > 0) {

                        Pbar.style.width = ((skore / maxskore) * 50) + "%";
                    }

                }, 1500)



            }


            function restart() {
                otazka = 0;
                skore = 0;
                maxskore = 0;
                F = true;
                Fin.style.display = "none";
                S.style.opacity = "0";
                S.style.display = "block";

                setTimeout(function F1() {
                    con.style.width = "20%";
                }, 200)

                setTimeout(function F2() {
                    S.style.opacity = "1";
                }, 1000)

                Nbar.style.width = "0";
                Nbar.style.left = "50%";
                Pbar.style.width = "0";



            }
