    // Paperwork related elements
    const paperwork_completing_button = document.getElementById("increment-button");
    const paperwork_value_p = document.getElementById("paperwork_number");
    const paperwork_goal_p = document.getElementById('paperwork_goal')
    // Hire request related elements 
    const hire_request_button = document.getElementById("hire_request-increment-button")
    const hire_request_number = document.getElementById("hire_request_number")
    const hire_request_bulk = document.getElementById("bulkbuy-hire_request")
    
    // Milestone Variables 
    var paperwork_milestone = 15;
    var old_paperwork_milestone = 0;

    // Promotion Related Elements 

    const progressbar_canvas = document.getElementById("progressbar")
    var progressbar_ctx = progressbar_canvas.getContext("2d")

    event_list = [
        '', 
        'Working to impress a superior',
        'Working to impress a superior',
        'Fill out a personal reflection', 
        'Working to impress a superior',
        'Fill out feedback request', 
        'Request a holiday',
        ''
    ]


    function updateProgress(numerator, denominator)
    {
        let rect_y =0.05 * progressbar_canvas.height;
        let rect_x = 0.05 * progressbar_canvas.width ;
        let rect_width = 0.8 * progressbar_canvas.width ;
        let rect_height = 0.5 * progressbar_canvas.height ;
        progressbar_ctx.clearRect(0,0, progressbar_canvas.width, progressbar_canvas.height);
        progressbar_ctx.rect(rect_x, rect_y, rect_width, rect_height);
        progressbar_ctx.fillStyle='#1b7ced'
        progressbar_ctx.fillRect(rect_x, rect_y, (numerator/denominator)*rect_width, rect_height)
        progressbar_ctx.stroke();
    }

    var hire_request_milestone = true
    function generateRandomNumber(score, hire_request) {
        let randomNumber = Math.ceil(Math.random() * hire_request) + score;
        return randomNumber;
    }

    hire_request = 0

      // Set the initial number
    let count = 0;
    event_number = 0;

      // Add an event listener to the button to increment the number
    paperwork_completing_button.addEventListener("click", () => {
        paperwork_completing_button.disabled = true; // Disable the button
        count= count+1 //generateRandomNumber(count, hire_request);
        paperwork_value_p.innerHTML = `Completed paperwork ${count}`;
        updateProgress(count-old_paperwork_milestone, paperwork_milestone-old_paperwork_milestone);
        console.log(paperwork_milestone)
        if (count == paperwork_milestone){
                old_paperwork_milestone = paperwork_milestone;
                paperwork_milestone=Math.ceil(2*paperwork_milestone)
                event_number ++
                paperwork_goal_p.innerHTML = `Click to complete paperwork\n${'('+event_list[event_number]+')'}`
                
            }

        setTimeout(() => {
            paperwork_completing_button.disabled = false; // Re-enable the button after 1 second
        }, 1);
    });

    hire_request_button.addEventListener("click", () => {
        hire_request_button.disabled = true; // Disable the button
        if (count > 30)
        {   
            count = count - 30
            hire_request++
            hire_request_number.innerHTML = `hire_request ${hire_request}`;
            number.innerHTML = `Paperwork Completed ${count}`;
        } else
        {
            console.log("Not enough wood")
        }


        if (hire_request_milestone && (hire_request > 15))
        {
            hire_request_milestone=false
            alert("hire_request bulk buy enabled")
            hire_request_bulk.innerHTML ="<p>Click the button bulk buy wood hire_request:</p> \
            <button id='hire_request-bulk-button'>Bulk increase hire_request</button>"

            const hire_request_bulk_button = document.getElementById('hire_request-bulk-button')

            hire_request_bulk_button.addEventListener("click", () => {
                button.disabled = true; // Disable the button
                
                while(count > 30)
                {
                    count = count - 30;
                    hire_request++;
                }
                hire_request_number.innerHTML = `hire_request ${hire_request}`;
                number.innerHTML = `Wood ${count}`;

                setTimeout(() => {
                    button.disabled = false; // Re-enable the button after 1 second
                }, 1);
            } )  ;
        }





        setTimeout(() => {
            hire_request_button.disabled = false; // Re-enable the button after 1 second
        }, 1);
    });