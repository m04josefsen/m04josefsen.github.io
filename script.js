let karakterSum = 0;
let studiepoengAntall = 0;
let studiepoengAntallBestått = 0;

document.addEventListener('DOMContentLoaded', function() {
    placeholderText();
});

function placeholderText() {
    document.getElementById("innKarakterer").placeholder = "Lim inn her";
}

function hentKarakterer() {
    karakterSum = 0;
    studiepoengAntall = 0;
    studiepoengAntallBestått = 0;

    const karakterer = document.getElementById("innKarakterer").value;

    const karakterListe = karakterer.split("\n");

    const fagKoder = {};

    for (let i = 0; i < karakterListe.length; i++) {
        const linje = karakterListe[i].trim();
        const nesteLinje = karakterListe[i + 1]?.trim();

        if (!isNaN(nesteLinje) && linje.match(/^[A-E]|Bestått|Ikke bestått$/)) {

            const fagkode = karakterListe[i - 2]?.trim();

            if (fagkode && !isNaN(nesteLinje)) {
                const studiepoeng = Number(nesteLinje);
                const verdi = karakterVerdi(linje);

                if (!fagKoder[fagkode] || fagKoder[fagkode].verdi < verdi) {
                    fagKoder[fagkode] = { karakter: linje, verdi: verdi, studiepoeng: studiepoeng };
                }
            }
        }
    }

    for (const fag in fagKoder) {
        const data = fagKoder[fag];
        if (data.karakter === "Bestått") {
            studiepoengAntallBestått += data.studiepoeng;
        } else {
            karakterSum += data.verdi * data.studiepoeng;
            studiepoengAntall += data.studiepoeng;
        }
    }

    beregnKaraktersnitt();
}

function karakterVerdi(karakter) {
    switch (karakter) {
        case "A": return 5;
        case "B": return 4;
        case "C": return 3;
        case "D": return 2;
        case "E": return 1;
        default: return 0;
    }
}

function beregnKaraktersnitt() {
    const karakterSnitt = (karakterSum / studiepoengAntall).toFixed(2);
    const bokstavKarakter = beregnBokstavKarakter(karakterSnitt);

    studiepoengAntall += studiepoengAntallBestått;

    let print = "Ditt karaktersnitt er: " + karakterSnitt + " og du har totalt " + studiepoengAntall + " studiepoeng";
    print += "<br>Dette tilsvarer en " + bokstavKarakter;

    document.getElementById("resultat").innerHTML = print;
}

function beregnBokstavKarakter(karakterSnitt) {
    if (karakterSnitt >= 4.5) return 'A';
    if (karakterSnitt >= 3.5) return 'B';
    if (karakterSnitt >= 2.5) return 'C';
    if (karakterSnitt >= 1.5) return 'D';
    if (karakterSnitt >= 1.0) return 'E';
    return 'Ikke gyldig karaktersnitt';
}