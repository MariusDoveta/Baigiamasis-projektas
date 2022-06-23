function getPartners() {
    let partners = [
        {
            image: "images/knygos.webp",
            name: "knygos.lt",
            link: "https://www.knygos.lt/"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }, {
            image: "images/placeholder.png",
            name: "Placeholder",
            link: "#"
        }
    ]
    return partners;
}

function makePartners() {
    let partners = getPartners();

    for (let index = 0; index < partners.length; index++) {
        const partner = partners[index];

        let template = '<div class="col s3 m3 l3"><div class="card"><div class="card-image"><img src="{{image}}"></div><div class="card-action"><a href="{{#}}">{{title}}</a></div></div></div>'

        template = template.replace("{{image}}", partner.image);
        template = template.replace("{{title}}", partner.name);
        template = template.replace("{{#}}", partner.link);

        document.querySelector(".row").innerHTML += template;
    }
}