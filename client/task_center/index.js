const x = $(document);
x.ready(start);

function start() {
    const baseApiUrl = 'http://localhost:3003';
    $('#show_create_task_but').click(show_task_creator);
    $('#create_task_but').click(create_task);



    function create_task() {

        const name = $('#task_name').val();
        const description = $('#task_desc').val();
        const objective = $('#task_objectives').val();
        const date_limit = $('#task_data_limit').val();
        const estimated_time = $('#task_estimated_time').val();
        if (!name || !description || !objective || !date_limit || !estimated_time) {

            console.log('error form');




        } else {
            console.log("Creating...");
            data = {
                name,
                description,
                objective,
                date_limit,
                estimated_time,


            }

            fetch(baseApiUrl + '/create_task', {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                        data
                    })
                })
                .then(function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    } else {
                        alert("Register success.");

                    }
                })
                .then()


                .catch(console.error)



        }



    }

    function show_task_creator() {
        $('#task_creator').fadeIn();
    }


























}