function getNews() {
    let news = [
        {
            title: "Netflix ir Raganius",
            text: "Ar išvysime „Netflix'e“ platformoje ir trečią „The Witcher“ sezoną?",
            link: "article.html",
        }, {
            title: "Targaryenai grįžta - HBO netrukus pradės filmuoti „Sostų karų“ priešistorę",
            text: "HBO patvirtino, kad jau balandį bus pradedamas filmuoti naujas serialas - savotiška „Sostų karų“ priešistorė „House of the Dragon“.",
            link: "#",
        }, {
            title: "„Castlevania: Nocturne“ Anonsas",
            text: "„Netflix“ ką tik išleido savo anime serialo, „Castlevania“, tęsinio anonsą.",
            link: "#",
        }, {
            title: "Naujiena",
            text: "Aprašitą naujiena",
            link: "#",
        }, {
            title: "Naujiena",
            text: "Aprašitą naujiena",
            link: "#",
        }, {
            title: "Naujiena",
            text: "Aprašitą naujiena",
            link: "#",
        }
    ];
    return news;
}

function makeNews() {
    let news = getNews();
    for (let index = 0; index < news.length; index++) {
        const article = news[index];

        let template = '<div class="row"><div class="col s12 m12 l12"><div class="card #ffffff white"><div class="card-content black-text"><span class="card-title">{{title}}</span><p>{{text}}</p></div><div class="card-action"><a href="{{#}}">Daugiau</a></div></div></div></div>'

        template = template.replace("{{title}}", article.title);
        template = template.replace("{{text}}", article.text);
        template = template.replace("{{#}}", article.link);

        document.querySelector(".allnews").innerHTML += template;
    }
}

function makeTopNews() {
    let news = getNews();
    for (let index = 0; index < 3; index++) {
        const article = news[index];

        let template = '<div class="row"><div class="col s12 m12 l12"><div class="card #ffffff white"><div class="card-content black-text"><span class="card-title">{{title}}</span><p>{{text}}</p></div><div class="card-action"><a href="{{#}}">Daugiau</a></div></div></div></div>'

        template = template.replace("{{title}}", article.title);
        template = template.replace("{{text}}", article.text);
        template = template.replace("{{#}}", article.link);

        document.querySelector(".topnews").innerHTML += template;
    }
}

function makeAnotherNews() {
    let news = getNews();
    for (let index = 1; index < 4; index++) {
        const article = news[index];

        let template = '<div class="row"><div class="col s12 m12 l12"><div class="card #ffffff white"><div class="card-content black-text"><span class="card-title">{{title}}</span><p>{{text}}</p></div><div class="card-action"><a href="{{#}}">Daugiau</a></div></div></div></div>'

        template = template.replace("{{title}}", article.title);
        template = template.replace("{{text}}", article.text);
        template = template.replace("{{#}}", article.link);

        document.querySelector(".news").innerHTML += template;
    }
}