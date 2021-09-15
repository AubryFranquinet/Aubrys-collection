const COLLECTION = [{
    name: 'TEAM VITALITY',
    logo: 'https://liquipedia.net/commons/images/thumb/5/55/Team_Vitality_2021_allmode.png/600px-Team_Vitality_2021_allmode.png',
    country: 'France',
    T1trophies: 5,
    coach: 'Rémy "XTQZZZ" Quoniam',
    players: ['Dan "apEX" Madesclaire', 'Mathieu "ZywOo" Herbaut', 'Richard "shox" Papillon', 'Kévin "misutaaa" Rabier', 'Jayson "Kyojin" Nguyen Van']
},

{
    name: 'NATUS VINCERE',
    logo: 'https://liquipedia.net/commons/images/thumb/3/3f/Natus_Vincere_2021_lightmode.png/600px-Natus_Vincere_2021_lightmode.png',
    country: 'Ukraine',
    T1trophies: 9,
    coach: 'Andrii "B1ad3" Gorodenskyi',
    players: ['Oleksandr "S1mple" Kostyliev', 'Denis "electronic" Sharipov', 'Kirill "Boombl4" Mikhailov', 'Ilya "Perfecto" Zalutskiy', 'Valerii "B1T" Vakhovskyi']
},

{
    name: 'GAMBIT',
    logo: 'https://liquipedia.net/commons/images/thumb/6/68/Gambit_2020.png/600px-Gambit_2020.png',
    country: 'Russia',
    T1trophies: 5,
    coach: 'Ivan "F_1N" Kochugov',
    players: ['Vladislav "nafany" Gorshkov', 'Dmitry "sh1ro" Sokolov', 'Timofey "interz" Yakushin', 'Sergey "Ax1Le" Rykhtorov', 'JAbay "Hobbit" Khassenov']
},

{
    name: 'G2',
    logo: 'https://liquipedia.net/commons/images/thumb/d/d3/G2_Esports_2019_lightmode.png/600px-G2_Esports_2019_lightmode.png',
    country: 'Europe',
    T1trophies: 4,
    coach: 'Damien "maLeK" Marcel',
    players: ['Audric "JaCkz" Jug', 'François "AmaNEk" Delaunay', 'Nemanja "nexa" Isaković', 'Nemanja "huNter-" Kovač', 'Nikola "NiKo" Kovač']
},

{
    name: 'HEROIC',
    logo: 'https://liquipedia.net/commons/images/thumb/f/ff/Heroic_2019.png/600px-Heroic_2019.png',
    country: 'Danemark',
    T1trophies: 2,
    coach: 'N/A',
    players: ['Martin "stavn" Lund', 'Casper "cadiaN" Møller', 'René "TeSeS" Madsen', 'Ismail "refrezh" Ali', 'Rasmus "sjuush" Beck']
},

{
    name: 'FAZE CLAN',
    logo: 'https://liquipedia.net/commons/images/thumb/4/40/FaZe_Clan_2018_lightmode.png/600px-FaZe_Clan_2018_lightmode.png',
    country: 'Europe',
    T1trophies: 7,
    coach: 'Robert "RobbaN" Dahlström',
    players: ['Håvard "rain" Nygaard', 'Olof "olofmeister" Kajbjer Gustafsson', 'Helvijs "broky" Saukants', 'Russel "Twistzz" Van Dulken', 'Finn "karrigan" Andersen']
},

{
    name: 'VIRTUS.PRO',
    logo: 'https://liquipedia.net/commons/images/thumb/c/c0/Virtus.pro_2019_allmode.png/600px-Virtus.pro_2019_allmode.png',
    country: 'Russia',
    T1trophies: 7,
    coach: 'Dastan "dastan" Akbayev',
    players: ['Timur "buster" Tulepov', 'Alexey "qikert" Golubev', 'Dzhami "jame" Ali', 'Sanjar "SANJI" Kuliev', 'Mareks "YEKINDAR" Gaļinskis']
},

{
    name: 'ASTRALIS',
    logo: 'https://liquipedia.net/commons/images/thumb/b/b5/Astralis_2020_full_allmode.png/600px-Astralis_2020_full_allmode.png',
    country: 'Danemark',
    T1trophies: 19,
    coach: 'Danny "zonic" Sørensen',
    players: ['Peter "dupreeh" Rasmussen', 'Andreas "Xyp9x" Højsleth', 'Lukas "gla1ve" Rossander', 'Emil "Magisk" Reif', 'Lucas "Bubzkji" Andersen', 'Philip "Lucky" Ewald']
},

{
    name: 'NIP',
    logo: 'https://liquipedia.net/commons/images/thumb/9/9f/Ninjas_in_Pyjamas_2021.png/600px-Ninjas_in_Pyjamas_2021.png',
    country: 'Sweden',
    T1trophies: 7,
    coach: 'Björn "THREAT" Pers',
    players: ['Fredrik "REZ" Sterner', 'Nicolas "Plopski" Gonzalez Zamora', 'Hampus "hampus" Poser', 'Nicolai "dev1ce" Reedtz', 'Linus "LNZ" Holtäng']
},

{
    name: 'OG',
    logo: 'https://liquipedia.net/commons/images/thumb/7/70/OG_RB_allmode.png/600px-OG_RB_allmode.png',
    country: 'Europe',
    T1trophies: 1,
    coach: 'Casper "ruggah" Due',
    players: ['Aleksi "Aleksib" Virolainen', 'Valdemar "valde" Bjørn Vangså', 'Mateusz "mantuu" Wilczewski', 'Nikolaj "niko" Kristensen', 'Shahar "flameZ" Shushan']
}
]

//Main div
let div = document.createElement('div');
div.id = 'container';

div.className = 'main';
document.body.appendChild(div);
document.body.insertBefore(div, demo);

//Cards
for (let i of COLLECTION) {

    let div = document.createElement('div');
    div.setAttribute("class", "cards")
    document.getElementById('container').appendChild(div);

    //Creation of h3 title of the team
    let h3 = document.createElement('h3');
    h3.innerText = i.name;
    div.appendChild(h3);


    let img = document.createElement('img');
    img.src = i.logo
    div.appendChild(img);


    //Creation of list ul+li
    let ul = document.createElement('ul');
    div.appendChild(ul);
    //Display of list inside the div
    for (const player of i.players) {

        let li = document.createElement('li');
        li.innerText = player;
        ul.appendChild(li);
    }

    let p = document.createElement('p');
    p.innerText = "Coach : " + i.coach;
    div.appendChild(p);

    let p2 = document.createElement('p');
    p2.innerText = "Country : " + i.country;
    div.appendChild(p2);

    let p3 = document.createElement('p');
    p3.innerText = "Tier S trophies : " + i.T1trophies;
    div.appendChild(p3);
}

