function getRecommendations() {
    let recommendations = [
        {
            photo: "images/lordofrings.jpg",
            title: "Žiedų valdovas",
            synopsis: "Neatmenamais laikais Viduržemio pasaulyje gyvenę elfai nukaldino stebuklingus Žiedus, bet patį galingiausią, visų Žiedų Valdovą sau nusikalė Juodasis Mordoro Lordas Sauronas. Prieš tūkstančius metų susivieniję elfai ir žmonės įveikė Sauroną, o jo Žiedas pradingo tamsiuose Anduino upės duburiuose. Tačiau dabar Priešas sugrįžo ir siekia susigrąžinti Visagalį Žiedą.",
            links: [
                {
                    title: "Bendra info",
                    link: "lordoftheringsinfo.html"
                }, {
                    title: "Knygos",
                    link: "lordoftheringsbooks.html"
                }, {
                    title: "Filmai",
                    link: "#"
                }, {
                    title: "Kita media",
                    link: "#"
                }
            ],
        }, {
            photo: "images/got.jpeg",
            title: "Ledo ir ugnies giesmė",
            synopsis: "„Žiema artėja…“ - rūstūs, negandas pranašaujantys žodžiai, įrašyti Edardo Starko, Vinterfelo lordo ir Šiaurės sergėtojo šeimos herbe. Septynios karalystės, prieš tris šimtus metų krauju ir ugnimi suvienytos drakonų karaliaus Eigono Užkariautojo, išgyvena apgaulingos ramybės laikus. Drakonai mirė, o kartu su jais sunyko ir galinga ilgamečių karalių Targeirinų giminė. Dabar Geležinį sostą - Septynių karalysčių valdžios simbolį - užgrobęs karalius Robertas Barateonas. Ir jis atvyksta į Vinterfelą prašyti Edardo Starko, vaikystės draugo ir maišto kovų bendražygio, tapti karaliaus patarėju.",
            links: [
                {
                    title: "Bendra info",
                    link: "#"
                }, {
                    title: "Knygos",
                    link: "#"
                }, {
                    title: "Serliarai",
                    link: "#"
                }, {
                    title: "Kita media",
                    link: "#"
                }
            ],

        }, {
            photo: "images/witcher.jpg",
            title: "Raganius",
            synopsis: "„Maginės fantastikos apsakymų romanas apie raganių Geraltą iš Rivijos. Geraltas - profesionalas, turintis magišką medalioną, raganiaus tikslas - sunaikinti pasaulyje tūnantį blogį. Tačiau ne viskas, kas slypi tamsoje, yra blogas, ir ne kiekvienas, kas atrodo gerai, - siekia gėrio.",
            links: [
                {
                    title: "Bendra info",
                    link: "#"
                }, {
                    title: "Knygos",
                    link: "#"
                }, {
                    title: "Žaidimai",
                    link: "#"
                }, {
                    title: "Kita media",
                    link: "#"
                }
            ],
        }, {
            photo: "images/elder.jpg",
            title: "The Elder Scrolls",
            synopsis: "Tamrielio žemyne. Aplinkoje dera viduramžių realaus pasaulio elementai, su fantastiškomis viduramžių temomis, įskaitant ribotas technologijas, plačiai paplitusią magiją ir daugelio mitologinių būtybių egzistavimą. Žemynas yra padalintas į daugybę provincijų, kuriose gyvena žmonės ir populiarios humanoidinės fantazijos rasės, tokios kaip elfai, orkai ir antropomorfiniai gyvūnai. Dažna pasakojimų tema yra ta, kad pasirinktas herojus pakyla nugalėti artėjančią grėsmę, dažniausiai piktavališką būtybę arba priešišką armiją.",
            links: [
                {
                    title: "Bendra info",
                    link: "#"
                }, {
                    title: "Žaidimai",
                    link: "#"
                }, {
                    title: "Knygos",
                    link: "#"
                }, {
                    title: "Kita media",
                    link: "#"
                }
            ],
        }
    ];

    return recommendations;
}

function makeRecommendations() {

    let recommendations = getRecommendations();


    for (let index = 0; index < recommendations.length; index++) {
        const recommendation = recommendations[index];

        let template = '<div class="col s12 m12 l6"><div class="card"><div class="card-image"><img src="{{photo}}"></div><div class="card-content"><span class="card-title"><b>{{title}}</b></span><p>{{text}}</p></div><div class="card-action"><a href="{{#1}}">{{linktext1}}</a></div><div class="card-action"><a href="{{#2}}">{{linktext2}}</a></div><div class="card-action"><a href="{{#3}}">{{linktext3}}</a></div><div class="card-action"><a href="{{#4}}">{{linktext4}}</a></div></div></div>'

        template = template.replace("{{photo}}", recommendation.photo);
        template = template.replace("{{title}}", recommendation.title);
        template = template.replace("{{text}}", recommendation.synopsis);
        template = template.replace("{{#1}}", recommendation.links[0].link);
        template = template.replace("{{linktext1}}", recommendation.links[0].title);
        template = template.replace("{{#2}}", recommendation.links[1].link);
        template = template.replace("{{linktext2}}", recommendation.links[1].title);
        template = template.replace("{{#3}}", recommendation.links[2].link);
        template = template.replace("{{linktext3}}", recommendation.links[2].title);
        template = template.replace("{{#4}}", recommendation.links[3].link);
        template = template.replace("{{linktext4}}", recommendation.links[3].title);

        document.querySelector(".row").innerHTML += template;
    }
}

function makeTopRecommendations() {
    let recommendations = getRecommendations();

    for (let index = 0; index < 2; index++) {
        const recommendation = recommendations[index];

        let template = '<div class="row"><div class="col s12 m12 l12"><div class="card"><div class="card-image"><img src="{{photo}}"></div><div class="card-content"><span class="card-title"><b>{{title}}</b></span><p>{{text}}</p></div><div class="card-action"><a href="{{#1}}">{{linktext1}}</a></div><div class="card-action"><a href="{{#2}}">{{linktext2}}</a></div><div class="card-action"><a href="{{#3}}">{{linktext3}}</a></div><div class="card-action"><a href="{{#4}}">{{linktext4}}</a></div></div></div></div>'

        template = template.replace("{{photo}}", recommendation.photo);
        template = template.replace("{{title}}", recommendation.title);
        template = template.replace("{{text}}", recommendation.synopsis);
        template = template.replace("{{#1}}", recommendation.links[0].link);
        template = template.replace("{{linktext1}}", recommendation.links[0].title);
        template = template.replace("{{#2}}", recommendation.links[1].link);
        template = template.replace("{{linktext2}}", recommendation.links[1].title);
        template = template.replace("{{#3}}", recommendation.links[2].link);
        template = template.replace("{{linktext3}}", recommendation.links[2].title);
        template = template.replace("{{#4}}", recommendation.links[3].link);
        template = template.replace("{{linktext4}}", recommendation.links[3].title);

        document.querySelector(".toprecommendations").innerHTML += template;
    }
}