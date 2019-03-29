let x = $(document);
x.ready(start);



function start() {

    const baseApiUrl = 'http://localhost:3003';

    console.log(baseApiUrl);
    $('#log_but').click(login);
    $('#register_link').click(show_register_form)




    function login() {
        const user = $('#log_user').val();
        const pass = $('#log_pass').val();
        const credentials = {
            email: user,
            password: pass
        };
        console.log(credentials);
        fetch(baseApiUrl + '/users/auth', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    credentials
                })
            })
            .then(function (response) {
                if (response.status === 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                } else {

                    $.ajax({
                        type: "GET",
                        url: "sesion_manager.php",
                        data: JSON.stringify({

                            credentials
                        }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (result) {

                            console.log("Ajax success");
                        },
                        error: function (result) {
                            console.log("ERROR AJAX");
                        }
                    })



                }
            })

            .then()


            .catch(console.error)

    }


    function show_register_form() {
        console.log('registering');
        $('#register_div').fadeIn('slow');
        $('#reg_but').click(register);



    }

    function register() {
        const name = $('#reg_name').val();
        const email = $('#reg_mail').val();
        const password = $('#reg_pass').val();
        const con_password = $('#reg_con_pass').val();
        const register_data = {
            name,
            email,
            password
        }
        if (!name || !email || !password || !con_password || password !== con_password || password.length < 8) {
            $('#warn_reg_text').html("Something went wrong,please check the form.");

        } else {
            send_register(register_data);

        }
    }

    function send_register(data) {

        fetch(baseApiUrl + '/users', {

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