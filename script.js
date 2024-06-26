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
    console.log(karakterSum);
    console.log(studiepoengAntall);

    const karakterSnitt = (karakterSum / studiepoengAntall).toFixed(2);

    studiepoengAntall += studiepoengAntallBestått;

    console.log("Din studiepoengsum er : " + studiepoengAntall);    
    console.log("Ditt karaktersnitt er : " + karakterSnitt);
}