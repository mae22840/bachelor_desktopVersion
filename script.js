document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.getElementById("filter-button");
    const filterContainer = document.querySelector(".filter-container");
    const closeButton = document.querySelector(".close-button");

    // Funktion zum Anzeigen des Filters
    const showFilter = () => {
        const buttonRect = filterButton.getBoundingClientRect();
        filterContainer.style.position = "absolute";
        filterContainer.style.top = `${buttonRect.bottom + window.scrollY}px`;
        filterContainer.style.left = `${buttonRect.left + window.scrollX}px`;
        filterContainer.style.display = "flex";
        filterButton.style.visibility = "hidden";
    };

    // Funktion zum Verstecken des Filters
    const hideFilter = () => {
        filterContainer.style.display = "none";
        filterButton.style.visibility = "visible";
    };

    // Scroll-Event hinzufügen
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const moveSpeed = 0; // Geschwindigkeit, wie schnell der Button mitbewegt wird

        // Berechne die Verschiebung des Buttons basierend auf dem Scrollwert
        const moveDistance = scrollY * moveSpeed;

        // Fixiere den Button relativ zum Bildschirm
        filterButton.style.position = "fixed";
        
        // Setze die vertikale Position des Buttons so, dass er mit dem Scrollen mitgeht
        const buttonOffsetTop = Math.min(moveDistance, window.innerHeight - filterButton.offsetHeight);

        // Wenn der Button noch innerhalb des sichtbaren Bereichs ist, bleibe er sichtbar
        filterButton.style.top = `${buttonOffsetTop}px`;
    });

    // Event Listener für den Filter-Button
    filterButton.addEventListener("click", showFilter);

    // Event Listener für den Close-Button
    closeButton.addEventListener("click", hideFilter);
});

// Klick auf Bird-Product zur Einzelansicht
document.addEventListener("DOMContentLoaded", function () {
    // Ziel: Bird of Paradise Card
    const birdCard = document.querySelector('.plant-card:nth-child(1)'); // Erste Card in der Liste
    
    if (birdCard) {
        birdCard.addEventListener("click", function () {
            // Weiterleitung zur Bird Plant HTML
            window.location.href = "birdplant.html";
        });
    } else {
        console.error("Bird of Paradise card not found.");
    }
});

// Suchfilter
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.searchbar'); // Suchfeld
    const plantCards = document.querySelectorAll('.plant-card'); // Produktkarten

    // Filterfunktion für die Suchleiste
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase(); // Suchtext (kleingeschrieben)
        
        plantCards.forEach(card => {
            const commonName = card.querySelector('.common-name').textContent.toLowerCase(); // Allgemeiner Name
            const scientificName = card.querySelector('.scientific-name').textContent.toLowerCase(); // Wissenschaftlicher Name
            
            // Prüfen, ob der Suchtext in einem der beiden Namen enthalten ist
            if (commonName.includes(searchText) || scientificName.includes(searchText)) {
                card.style.display = 'flex'; // Zeige passende Karten
            } else {
                card.style.display = 'none'; // Verstecke unpassende Karten
            }
        });
    });
});
