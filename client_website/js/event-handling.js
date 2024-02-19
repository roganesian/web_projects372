// Add an event listener to wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const profileCards = document.querySelectorAll(".feedback-card");

    profileCards.forEach(card => {
        const profilePhoto = card.querySelector(".profile-photo img");
        profilePhoto.addEventListener("click", function() {
            const personName = profilePhoto.alt;
            const personDetails = getPersonDetails(personName);
            displayModal(personDetails);
        });
    });

    /**
     * Displays a modal with the given person's name and details.
     * 
     * @param {string} personDetails - The details of the person.
     */
    function displayModal(personDetails) {
        const modalContainer = document.getElementById("modal-container");

        const modal = document.createElement("div");
        modal.classList.add("modal");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", function() {
            modal.remove();
        });

        const personDetailsContainer = document.createElement("div");
        personDetailsContainer.classList.add("person-details");
        
        const personDetailsText = document.createTextNode(personDetails);
        personDetailsContainer.appendChild(personDetailsText);

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(personDetailsContainer);
        modal.appendChild(modalContent);

        modalContainer.appendChild(modal);
    }

    /**
     * Gets the details of the person with the given name.
     * 
     * @param {string} personName 
     * @returns {string} The details of the person.
     */
    function getPersonDetails(personName) {
        let details = "";
        switch (personName) {
            case "Gordon Ramsay":
                details = "Gordon Ramsay is a British celebrity chef known for his fiery personality and culinary expertise.";
                break;
            case "Robert Irvine":
                details = "Robert Irvine is an English celebrity chef and television personality, best known for his work on the Food Network.";
                break;
            case "Guy Fieri":
                details = "Guy Fieri is an American restaurateur, author, and television personality, known for his hit TV show 'Diners, Drive-Ins and Dives.'";
                break;
            default:
                details = "Additional details about " + personName;
                break;
        }
        return details;
    }
});
