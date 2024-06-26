let karakterSum = 0;
let studiepoengAntall = 0;
let studiepoengAntallBestått = 0;

document.addEventListener('DOMContentLoaded', function() {
    placeholderText();
});

function placeholderText() {
    document.getElementById("innKarakterer").placeholder = "FORMAT HER";
}

function hentKarakterer() {
    karakterSum = 0;
    studiepoengAntall = 0;
    studiepoengAntallBestått = 0;

    const karakterer = document.getElementById("innKarakterer").value;

    console.log(karakterer);
    console.log("---------");

    const karakterListe = karakterer.split("\n");

    for(let i = 0; i < karakterListe.length; i++) {
        const linje = karakterListe[i];
        const nesteLinje = karakterListe[i+1]; //TODO: må fikse så greiene ikke får array out of bounds error
        console.log("Line " + (i + 1) + ": " + linje);

        if(linje == "A" || "B" || "C" || "D" || "E" || "Bestått" || "Ikke bestått") {//TODO: Må kegge til F og GODKJENTE FAG OG IKKE GODKJENTE FAG
            switch(linje) {
                case "A":
                    karakterSum += 5 * nesteLinje;
                    studiepoengAntall += Number(nesteLinje);
                    break;
                case "B":
                    karakterSum += 4 * nesteLinje;
                    studiepoengAntall += Number(nesteLinje);
                    break;
                case "C":
                    karakterSum += 3 * nesteLinje;
                    studiepoengAntall += Number(nesteLinje);
                    break;
                case "D":
                    karakterSum += 2 * nesteLinje;
                    studiepoengAntall += Number(nesteLinje);
                    break;
                case "E":
                    karakterSum += 1 * nesteLinje;
                    studiepoengAntall += Number(nesteLinje);
                    break;
                case "Bestått":
                    studiepoengAntallBestått += Number(nesteLinje);
                    break;
                case "Bestått":
                    studiepoengAntall += Number(nesteLinje);
                    break;
              } 
        }
    }
    
    beregnKaraktersnitt();
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
    let bokstavKarakter;

    switch (true) {
        case (karakterSnitt <= 5 && karakterSnitt >= 4.5):
            bokstavKarakter = 'A';
            break;
        case (karakterSnitt < 4.5 && karakterSnitt >= 3.5):
            bokstavKarakter = 'B';
            break;
        case (karakterSnitt < 3.5 && karakterSnitt >= 2.5):
            bokstavKarakter = 'C';
            break;
        case (karakterSnitt < 2.5 && karakterSnitt >= 1.5):
            bokstavKarakter = 'D';
            break;
        case (karakterSnitt < 1.5 && karakterSnitt >= 1.0):
            bokstavKarakter = 'E';
            break;
        default:
            bokstavKarakter = 'Ikke gyldig karaktersnitt';
    }

    return bokstavKarakter;
}