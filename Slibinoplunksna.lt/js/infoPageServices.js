function makeSectionPart1() {
    let part1 = {
        image: "images/lotrcover.jpg",
        main: "<p><b>Žiedų valdovas</b> (angl. The Lord of the Rings) - Džono Ronaldo Ruelio Tolkino kūrinys,apibūdinamas kaip epinė fantasy istorija. Išleistas trimis tomais 1954-1955 m. „Žiedų valdovas“ buvo rašomas kaip knygos „Hobitas“ tęsinys.</p> <p>Veiksmas vyksta Tolkino sugalvoto pasaulio Ardos dalyje, vadinamoje Viduržeme (Middle-earth). Knygos pavadinimas gali būti interpretuojamas įvairiai. Paprastai sakoma, kad Žiedų valdovas - tai Sauronas, pagrindinis blogio atstovas kūrinyje. Tačiau valdovu gali būti pavadintas ir kitas ne mažiau svarbus knygos veikėjas - pats Žiedas.</p> <h4>Dalis</h4> <p>„Žiedų valdovas“ yra vientisas kūrinys. Pasakojimas natūraliai dalijamas į šešias knygas, tačiau leidėjai komerciniais sumetimais patarė Tolkinui sugrupuoti knygas po dvi ir išleisti „Žiedų valdovą“ trimis tomais. Taip atsirado šis „Žiedų valdovo“ sudalinimas:</p> <ol> <li><b>The Fellowship of the Ring</b> (santrumpa FotR; „Žiedo brolija“, išleista 1954 m. liepos 29 d.) </li><li><b>The Two Towers</b> (santrumpa FotR; „Žiedo brolija“, išleista 1954 m. liepos 29 d.)</li><li><b>The Return of the King</b> (santrumpa RotK; „Karaliaus sugrįžimas“, išleista 1955 m. spalio 20d.)</li></ol>"
    };

    document.querySelector(".section1 .cover").setAttribute("src", part1.image);
    document.querySelector(".section1 .main1").innerHTML = part1.main;
}

function makeSectionPart2() {
    let part2 = {
        image: "images/tolkien.jpg",
        main: "<h4>John Ronald Reuel Tolkien</h4><p>Tolkinas dar būdamas vaikas ėmė kurti dirbtines kalbas, jos vis sudėtingėjo. Suprasdamas, kad kalbos bus negyvos, kol jomis niekas nekalbės, Tolkinas ėmė kurti pasaulį, vėliau pavadintą Arda, kuriame gyveno padermės ir tautos, turėjusios savo kalbas, istoriją, mitologiją ir t. t. Greitai buvo sukurta visa kalbinė etimologinė sistema. Dvi kalbos, Tolkino pasaulyje vartotos elfų, yra pakankamai išvystytos, kad jomis būtų galima kurti nesudėtingus tekstus (Quenya (kvenja) ir Sindarin, arba sindų kalba).</p> <p>Šioms istorijoms kurti paskata buvo ir noras „sukurti mitologiją Anglijai, mano šaliai“. Tolkinas turėjo išskirtinę vaizduotę ir jam patiko literatūriniais bandymais bandyti atkurti tai, kas slepiasi už išlikusių senosios germaniškosios bei anglosaksiškosios mitologijų fragmentų. Pavyzdžiui, jis niekada nemėgo fėjų ir elfų, kokius juos vaizdavo airių mitologija ar Viljamas Šekspyras. Jam atrodė, kad, kai anglosaksų protėviai dar nebuvo įsikėlę į Britų salas, elfai buvo daug rimtesni ir svarbesni personažai. Tolkinas naudojosi edų, anglosaksų poemų, germanų, suomių ir kitų tautų mitologijų motyvais. Pavyzdžiui, jo istorija apie Tūriną Turambarą buvo įkvėpta Kulervo istorijos „Kalevaloje“.</p><p>Nors pats Tolkinas svarbiausiu gyvenimo kūriniu laikė niekaip nesibaigiantį „Silmarillion“, labiausiai žinomi kiti jo veikalai - „Žiedų valdovas“ ir „Hobitas“. „Hobitą“ jis pradėjo kaip pasaką vaikams prieš miegą, tačiau pamažu netyčia į ją įsipynė elementų iš mitologijų, pvz., Gendalfas ar elfai. Nors iš pradžių tai buvo tiesiog atsitiktinis vardų skolinimasis, vėliau, „Hobito“ gerbėjams reikalaujant tęsinio, Tolkinas atrado, kad gali susieti šią pasaką su mitologijomis. „Žiedų valdovą“ jis rašė septyniolika metų, nes trukdė akademinis darbas. Kuo toliau, tuo labiau „Žiedų valdovas“ tolo nuo „Hobito“, Tolkinas guodėsi leidėjams, kad knygos pobūdis bus jau nebe pasaka prieš miegą. Galiausiai paaiškėjo, kad knyga pasidarė per ilga. Leidėjai pareikalavo ją leisti ne visą iš karto. Nors „natūraliai“ knyga padalinta į šešias dalis, Tolkinas nenoromis sutiko jas sugrupuoti po dvi. Todėl „Žiedų valdovas“ buvo išleistas trimis tomais: „Žiedo draugija / brolija“ (The Fellowship of the Ring), „Du bokštai / Dvi tvirtovės“ (The Two Towers), „Karaliaus sugrįžimas“ (The Return of the King). „Žiedų valdovas“ neretai vadinamas „trilogija“, tačiau tai yra vientisas kūrinys; padalinimas į tomus buvo nesusipratimas, nulemtas leidėjų pageidavimų.</p><p>Tolkino įtaka fantastikai gali būti prilyginta Leonardo da Vinčio įtakai menui ar The Beatles muzikai. Viduržemės būtybės tapo neatsiejama šiuolaikinės tradicinės maginės fantastikos dalimi, jos figūruoja šimtuose knygų, filmų ar žaidimų, įskaitant RPG „Dungeons and Dragons“, kortų žaidimus „Magic: the Gathering“, „Spellfire“, kompiuterinius žaidimus „Heroes of Might and Magic“, „Age of Wonders“, „Arcanum: Of Steamworks and Magick Obscura“, „Dragon Age“, „Warcraft“. Epinio metalo grupė Summoning Tolkino kūrybai paskyrė ne vieną albumą.</p>"
    };

    document.querySelector(".section2 .tolkien").setAttribute("src", part2.image);
    document.querySelector(".section2 .main2").innerHTML = part2.main;
}

function makeSectionPart3() {
    let part3 = "<h4>Įtaka</h4><p>Jau dveji metai po knygos išleidimo susidomėta jos ekranizacijos galimybėmis. Tolkinas manė, kad tinkamiausia filmo forma būtų animacija, tačiau jam nepatiko nė vienas pasiūlytas scenarijus. Po jo mirties pasirodė dvi animacinės versijos: Ralph Bakshi sukurtas „Žiedų valdovas“ (1978), rodytas kino teatruose, ir Rankin-Bass televizinė versija „Karaliaus sugrįžimas“ (1980). Nė viena nesulaukė daug teigiamų atsiliepimų. Taigi „Žiedų valdovo“ įtaka per kino ekraną nesklido. Ji buvo jaučiama septintame-aštuntame dešimtmetyje pamažu stiprėjant fentezi žanrui. Ironiška, bet didžiausią poveikį Tolkinas įgijo tik pasirodžius George Lucaso „Žvaigždžių karams“ (1977-1983). Nors „Žvaigždžių karų“ veiksmas vyko kitoje galaktikoje, čia buvo daugybė kosminių laivų ir panašių dalykų, istorijos pagrindas buvo epinis žygis, pagrįstas maištavimu prieš blogio imperiją, grasinančia dėl valdžios sunaikinti ištisas planetas. Lucasas neslėpė „Žiedų valdovo“ įtakos.</p><p>Jungtinėse Amerikos Valstijose „Žiedų valdovas“ virto ištisu kultūriniu reiškiniu, kai buvo išleistas minkštais viršeliais 1965 m. - ir ne vien todėl, kad šis leidimas buvo pigesnis ir prieinamesnis, bet ir dėl leidimo metų. Tuo metu knyga rezonavo su daugybe kultūrinių dalykų: pavyzdžiui, Frodo pacifizmas atliepė augančiam judėjimui prieš Vietnamo karą, taip pat vis labiau imta susirūpinti dėl užterštumo bei industrializacijos - problemų, kurios Tolkinui buvo vienos iš svarbiausių. Mitinė kova tarp gėrio ir  blogio, pavaizduota Tolkino kūrinyje, tapo pavyzdžiu, kaip reikia kovoti su galingomis struktūromis - mąstant kitaip. Tai buvo viena iš pagrindinių septintojo dešimtmečio kontrakultūrų filosofijų: reikia ne „parsiduoti“, manant, kad pakreipsi įvykius kita linkme, dirbdamas išvien su struktūra, bet sukurti visiškai naujas struktūras. Tai - komunos, organinė sodininkystė, gyvenimas kartu nesusituokus ir pan.</p><p>Piterio Džeksono pastatyti filmai pagal „Žiedų valdovą“ (2001-2003 m.) pagausino knygos gerbėjų būrį bei pademonstravo, kaip sėkmingai kine galima suderinti naujausias technologijas ir seniai patikrintus metodus.Kompiuterinis personažas Golumas, sukurtas judesių fiksavimo technologija, buvo įvertintas kritikų bei žiūrovų. „Žiedų valdovas“ buvo paverstas ir radijo pjese: 1956 m. per BBC transliuota trylikos dalių adaptacija. JAV per radiją pjesė pagal „Žiedų valdovą“ buvo transliuojama 1979 m. Dar vieną naują versiją BBC pristatė 1981 m. Ši versija buvo iš dvidešimt šešių pusės valandos trukmės dalių po. „Žiedų valdovo“ motyvais rašoma muzika - pavienės dainos ir ištisi albumai. Knyga susilaukė įvairų parodijų, iš kurių garsiausia - „Bored of the Rings“ (Nusibodo tie žiedai)</p> "

    document.querySelector(".section3 .main3").innerHTML = part3;
}

function makeSectionPart4() {
    let part4 = {
        title: "Pasaulis",
        text: "<b>Vidùržemė</b>, arba Vidùržemis (angl. Middle - earth) - Dž. R. R. Tolkino sukurto pasaulio Ardos dalis (žemynas). „Viduržemė“ - pažodinis senosios anglų kalbos žodžio middangeard (šis pasaulis, žmonių gyvenamos žemės) vertimas. Tolkino kalbomis Quenya ir Sindarin ši Ardos dalis vadinta atitinkamai Endor (Endóre) ir Ennor. Tolkino mitologijose Arda yra mūsų Žemė gilioje senovėje, o Viduržemės šiaurė ilgainiui virto Eurazija.",
        image: "images/mapl.jpeg"
    };

    document.querySelector(".section4 .title").innerText = part4.title;
    document.querySelector(".section4 .text").innerHTML = part4.text;
    document.querySelector(".section4 .world").setAttribute("src", part4.image);
}


function getAnotherLinks() {
    let links = [
        {
            title: "Knygos",
            link: "lordoftheringsbooks.html",
        }, {
            title: "Filmai",
            link: "#"
        }, {
            title: "Kita media",
            link: "#"
        }
    ];
    return links;
}

function makeAnotherLinks() {
    let links = getAnotherLinks();

    for (let index = 0; index < links.length; index++) {
        const link = links[index];

        let template = '<li><a href="{{#}}">{{title}}</a></li>';

        template = template.replace("{{title}}", link.title);
        template = template.replace("{{#}}", link.link);


        document.querySelector(".links").innerHTML += template;
    }

}

function makeAll() {
    makeSectionPart1();
    makeSectionPart2();
    makeSectionPart3();
    makeSectionPart4();
    makeAnotherLinks();
}