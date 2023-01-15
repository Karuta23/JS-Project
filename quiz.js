
            var setPage = document.getElementById('setUpQuestion');


            var checkQuestion = document.getElementById('checkQuestion');
            var nextQuestion = document.getElementById('nextQuestion');
            var Fin = document.getElementById("Fin");
            var cover = document.getElementById("questionCover");

            var odpovedNow = '';


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

            var oznaceno = document.getElementById(Aa);
            var oznacenoRadio = document.getElementById(Aa);
            
            var vysledek = document.getElementById("vysledek");
            var Q = document.getElementById("otazka");
            var IMG = document.getElementById("image");
            var headerQ = document.getElementById("headerQ");
            var pocetQ = document.getElementById("PocetQ");
            
            var body = document.getElementById("body");
            var Question = document.getElementById("Question");
            var bodQ = 1;
            var Pocetsekund = document.getElementById("Pocetsekund");
            var time = document.getElementById("time");
            var NoTime = document.getElementById("NoTime");

            var game = document.getElementById("quiz");

            pocetOtazek = defaultQs;

            function Nastaveni(mod) {
                
                if (pocetQ.value >= 1 && pocetQ.value <= otazky.length) {
                     
                    if(mod=='s'){
                    
                        pocetOtazek = pocetQ.value;
                        maxskore = pocetOtazek;  
                    }
                    if(mod=='n'){
                        pocetOtazek = defaultQs;
                        maxskore = pocetOtazek; 
                    }
    
                    setPage.style.display = "none";
                    dalsi();
                    Question.style.opacity = "0";
                    headerQ.style.opacity = "0";
                    NastavCas();
                    setTimeout(function F3() {
                            NoTime.style.display = "none";
                    }, 100)
        
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

            function setBack(){
                game.style.display = "none";
                setPage.style.display = "block";
                Fin.style.display = "none";
                restart();
                vycisti();
            }

            function nastavAnswer(odpoved){
                odpovedNow = odpoved;
                if(odpoved == 'a'){
                    oznaceno = A1;
                    oznacenoRadio = Aa;
                } 
                if(odpoved == 'b'){
                    oznaceno = B1;
                    oznacenoRadio = Ba;
                }
                if(odpoved == 'c'){
                    oznaceno = C1;
                    oznacenoRadio = Ca;
                }
            }

            function kontrola() {
                if(odpovedNow != null){
                    if(odpovedNow == otazky[otazka].sodpoved){
                        A1.style = "background-color: rgba(255, 51, 0, 0.7); opacity: 0.5";
                        B1.style = "background-color: rgba(255, 51, 0, 0.7); opacity: 0.5";
                        C1.style = "background-color: rgba(255, 51, 0, 0.7); opacity: 0.5";
                        oznaceno.style.backgroundColor = "rgba(153, 255, 51, 0.7)";
                        cover.style = "z-index: 10";
                        skore += bodQ;
                        checkQuestion.style.display = 'none';
                        nextQuestion.style.display = 'block';
                        otazka++;
                        if (PocetQ <= otazka + 1) {
                            if (casovac != null) {
                                clearInterval(casovac);
    
                            }
                        }
                        

                    }
                    else{
                        oznaceno.style.backgroundColor = "rgba(255, 51, 0, 0.7)";
                        oznacenoRadio.style.disabled = "true";   
                        oznacenoRadio.checked = false;
                        oznaceno = null;
                        odpovedNow = null;
                        bodQ--;
                    }
                }            
            }



            function dalsi() {

                vycisti();
                bodQ = 1;

                if (otazka + 1 >= pocetOtazek) {


                    nextQuestion.innerHTML = "Ukončit kvíz"
                }

                if (otazka + 1 > pocetOtazek) {

                    Ukonci();
                }

                

                setTimeout(function F1() {
                    A.innerHTML = otazky[otazka].odpoved.a;
                    B.innerHTML = otazky[otazka].odpoved.b;
                    C.innerHTML = otazky[otazka].odpoved.c;
                    if(otazky[otazka].typ == "text"){
                        Q.innerHTML = otazky[otazka].Otazka;
                        IMG.style = "display: none";
                    }
                    else{
                        IMG.style = "display: block";
                        IMG.src = otazky[otazka].img;
                    }
                    
                }, 500)


                setTimeout(function F2() {
                    A1.style.opacity = "1";
                    B1.style.opacity = "1";
                    C1.style.opacity = "1";
                    Q.style.opacity = "1";
                }, 1000)

                Poradi.innerHTML = otazka + 1 + "/" + maxskore;

                cover.style = "z-index: -10";
                checkQuestion.style.display = 'block';
                nextQuestion.style.display = 'none';

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


                var celkovycas = pocetOtazek * 100;
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

                    if (otazka >= pocetOtazek) {

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

                var Nbar = document.getElementById("negative");
                var Pbar = document.getElementById("positive");

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

                body.innerHTML = skore + "/" + maxskore;


                totalS = parseInt(localStorage.spravneOdpovezeno) + parseInt(skore);
                totalQ = parseInt(localStorage.celkemOtazek) + parseInt(maxskore);
                

                localStorage.spravneOdpovezeno = totalS;
                localStorage.celkemOtazek = totalQ;




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
                Nbar.style.width = "0%";
                Nbar.style.left = "50%";
                Pbar.style.width = "0%";
            }
