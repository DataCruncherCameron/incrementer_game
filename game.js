      // Get the button and the number element
    const button = document.getElementById("increment-button");
    const number = document.getElementById("wood_number");
    const skill_button = document.getElementById("skill-increment-button")
    const skill_number = document.getElementById("skill_number")
    function generateRandomNumber(score, skill) {
        let randomNumber = Math.ceil(Math.random() * skill) + score;
        return randomNumber;
    }

    skill = 5

      // Set the initial number
    let count = 0;

      // Add an event listener to the button to increment the number
    button.addEventListener("click", () => {
        button.disabled = true; // Disable the button
        count=generateRandomNumber(count, skill);
        number.innerHTML = `Wood ${count}`;
        setTimeout(() => {
            button.disabled = false; // Re-enable the button after 1 second
        }, 1);
    });

    skill_button.addEventListener("click", () => {
        button.disabled = true; // Disable the button
        if (count > 30)
        {   
            count = count - 30
            skill++
            skill_number.innerHTML = `Skill ${skill}`;
            number.innerHTML = `Wood ${count}`;
        } else
        {
            console.log("Not enough wood")
        }
        setTimeout(() => {
            button.disabled = false; // Re-enable the button after 1 second
        }, 1);
    });