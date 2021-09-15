const COLLECTION = [{
    name: 'TEAM VITALITY',
    logo: 'link/to/a/logo',
    country: 'France',
    T1trophies: 5,
    coach: 'Rémy "XTQZZZ" Quoniam',
    players: ['Dan "apEX" Madesclaire', 'Mathieu "ZywOo" Herbaut', 'Richard "shox" Papillon', 'Kévin "misutaaa" Rabier', 'Jayson "Kyojin" Nguyen Van']
},

{
    name: 'NATUS VINCERE',
    logo: 'link/to/a/logo',
    country: 'Ukraine',
    T1trophies: 9,
    coach: 'Andrii "B1ad3" Gorodenskyi',
    players: ['Oleksandr "S1mple" Kostyliev', 'Denis "electronic" Sharipov', 'Kirill "Boombl4" Mikhailov', 'Ilya "Perfecto" Zalutskiy', 'Valerii "B1T" Vakhovskyi']
},

{
    name: 'GAMBIT',
    logo: 'link/to/a/logo',
    country: 'Russia',
    T1trophies: 5,
    coach: 'Ivan "F_1N" Kochugov',
    players: ['Vladislav "nafany" Gorshkov', 'Dmitry "sh1ro" Sokolov', 'Timofey "interz" Yakushin', 'Sergey "Ax1Le" Rykhtorov', 'JAbay "Hobbit" Khassenov']
},

{
    name: 'G2',
    logo: 'link/to/a/logo',
    country: 'Europe',
    T1trophies: 4,
    coach: 'Damien "maLeK" Marcel',
    players: ['Audric "JaCkz" Jug', 'François "AmaNEk" Delaunay', 'Nemanja "nexa" Isaković', 'Nemanja "huNter-" Kovač', 'Nikola "NiKo" Kovač']
},

{
    name: 'HEROIC',
    logo: 'link/to/a/logo',
    country: 'Danemark',
    T1trophies: 2,
    coach: 'N/A',
    players: ['Martin "stavn" Lund', 'Casper "cadiaN" Møller', 'René "TeSeS" Madsen', 'Ismail "refrezh" Ali', 'Rasmus "sjuush" Beck']
},

{
    name: 'FAZE CLAN',
    logo: 'link/to/a/logo',
    country: 'Europe',
    T1trophies: 7,
    coach: 'Robert "RobbaN" Dahlström',
    players: ['Håvard "rain" Nygaard', 'Olof "olofmeister" Kajbjer Gustafsson', 'Helvijs "broky" Saukants', 'Russel "Twistzz" Van Dulken', 'Finn "karrigan" Andersen']
},

{
    name: 'VIRTUS.PRO',
    logo: 'link/to/a/logo',
    country: 'Russia',
    T1trophies: 7,
    coach: 'Dastan "dastan" Akbayev',
    players: ['Timur "buster" Tulepov', 'Alexey "qikert" Golubev', 'Dzhami "jame" Ali', 'Sanjar "SANJI" Kuliev', 'Mareks "YEKINDAR" Gaļinskis']
},

{
    name: 'ASTRALIS',
    logo: 'link/to/a/logo',
    country: 'Danemark',
    T1trophies: 19,
    coach: 'Danny "zonic" Sørensen',
    players: ['Peter "dupreeh" Rasmussen', 'Andreas "Xyp9x" Højsleth', 'Lukas "gla1ve" Rossander', 'Emil "Magisk" Reif', 'Lucas "Bubzkji" Andersen', 'Philip "Lucky" Ewald']
},

{
    name: 'NIP',
    logo: 'link/to/a/logo',
    country: 'Sweden',
    T1trophies: 7,
    coach: 'Björn "THREAT" Pers',
    players: ['Fredrik "REZ" Sterner', 'Nicolas "Plopski" Gonzalez Zamora', 'Hampus "hampus" Poser', 'Nicolai "dev1ce" Reedtz', 'Linus "LNZ" Holtäng']
},

{
    name: 'OG',
    logo: 'link/to/a/logo',
    country: 'Europe',
    T1trophies: 1,
    coach: 'Casper "ruggah" Due',
    players: ['Aleksi "Aleksib" Virolainen', 'Valdemar "valde" Bjørn Vangså', 'Mateusz "mantuu" Wilczewski', 'Nikolaj "niko" Kristensen', 'Shahar "flameZ" Shushan']
}
]


for (let i = 0; i < COLLECTION.length; i++) {

    let div = document.createElement("div");
    div.setAttribute("id", "cards")
    document.body.appendChild(div);

   
}
