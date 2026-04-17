function sendMessage() {

    let input = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    let response = getBotResponse(input);

    chatBox.innerHTML += "<p><b>AI:</b> " + response + "</p>";

    document.getElementById("userInput").value = "";
}


function getBotResponse(input) {

    input = input.toLowerCase();

    if (input.includes("divorce")) {
        return "Under the Hindu Marriage Act, 1955 a woman can file for divorce on grounds like cruelty, adultery, desertion or mutual consent.";
    }

    else if (input.includes("violence") || input.includes("abuse")) {
        return "Under the Domestic Violence Act, 2005 women are protected from physical, emotional and economic abuse.";
    }

    else if (input.includes("maintenance") || input.includes("money")) {
        return "Under Section 125 CrPC, a woman can claim financial maintenance from her husband.";
    }

    else if (input.includes("custody") || input.includes("child")) {
        return "Courts decide child custody based on the welfare of the child. Mothers often get custody of young children.";
    }

    else if (input.includes("streedhan") || input.includes("jewellery")) {
        return "Streedhan includes jewellery, gifts and valuables given to a woman before or after marriage. It legally belongs only to the woman.";
    }

    else {
        return "Please describe your legal issue related to divorce, domestic violence, maintenance or custody.";
    }
}