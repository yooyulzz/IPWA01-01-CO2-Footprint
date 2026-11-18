const landFilter = document.getElementById("land-filter");
const unternehmenFilter = document.getElementById("unternehmen-filter");

function filterTabelle() {
    const landSuche = landFilter.value.toLowerCase();
    const unternehmenSuche = unternehmenFilter.value.toLowerCase();
    const zeilen = document.querySelectorAll("#co2-daten tbody tr");

    zeilen.forEach(function (zeile) {
        const land = zeile.cells[0].textContent.toLowerCase();
        const unternehmen = zeile.cells[1].textContent.toLowerCase();

        const passtZumLand = land.includes(landSuche);
        const passtZumUnternehmen = unternehmen.includes(unternehmenSuche);

        if (passtZumLand && passtZumUnternehmen) {
            zeile.style.display = "";
        } else {
            zeile.style.display = "none";
        }
    });
}

landFilter.addEventListener("input", filterTabelle);
unternehmenFilter.addEventListener("input", filterTabelle);


const sortButton = document.getElementById("sort-emissionen");
let aufsteigend = true;

sortButton.addEventListener("click", function () {
    const tabelle = document.querySelector("#co2-daten tbody");
    const zeilen = Array.from(tabelle.querySelectorAll("tr"));

    zeilen.sort(function (zeileA, zeileB) {
        const wertA = Number(zeileA.cells[2].textContent);
        const wertB = Number(zeileB.cells[2].textContent);

        return aufsteigend ? wertA - wertB : wertB - wertA;
    });

    zeilen.forEach(function (zeile) {
        tabelle.appendChild(zeile);
    });

    aufsteigend = !aufsteigend;
});

