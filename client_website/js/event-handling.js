$(document).ready(function() {
    // Event delegation for profile photo clicks
    $(document).on("click", ".profile-photo img", function() {
        const personName = $(this).attr("alt");
        const personDetails = getPersonDetails(personName);
        displayModal(personDetails);
    });

    /**
     * Displays a modal with the given person's name and details.
     * 
     * @param {string} personDetails - The details of the person.
     */
    function displayModal(personDetails) {
        const modalContainer = $("#modal-container");

        const modal = $("<div>").addClass("modal");

        const modalContent = $("<div>").addClass("modal-content");

        const closeBtn = $("<span>").addClass("close").html("&times;").on("click", function() {
            modal.remove();
        });

        const personDetailsContainer = $("<div>").addClass("person-details").text(personDetails);

        modalContent.append(closeBtn, personDetailsContainer);
        modal.append(modalContent);

        modalContainer.append(modal);
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
