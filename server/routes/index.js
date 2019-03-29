//Crea rutas para usarlas con express
const router = require('express').Router();
const User = require('../models/User');
const Tasks = require('../models/Tasks')

router.get('/', (req, res) => {

    res.send(process.env.NODE_ENV)

})

router.post('/users', (req, res) => {
    console.log(req.body);
    new User(req.body.data).save().then(user => {
        console.log(req.body.data);
        res.send(user);
    }).catch(err => {
        res.status(400).send(err);
    })


});




router.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send(err);
    })

});

router.get('/users/:user_id', (req, res) => {

    console.log(req);
    User.findById(req.params.user_id).then(users => {

        res.send(users);


    }).catch(err => {
        res.status(500).send(err);
    })

});
router.delete('/users/:user_id', (req, res) => {
    console.log(req.params.user_id);
    User.findByIdAndDelete(req.params.user_id).then(users => {

        res.send(users);


    }).catch(err => {
        res.status(500).send(err);
    })

});

router.patch('/users/:user_id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.user_id, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        }).then(User => {
        res.send(User);
    }).catch(err => {
        res.status(400).send(err);

    });
})


router.post('/users/auth', async (req, res) => {
    try {
        console.log(User.findByCredentials(req.body.credentials))
        const user = await User.findByCredentials(req.body.credentials);

        if (!user) {
            console.log("NO ESTA ENTRANDO");
            return res.status(401).send('Wrong credentials');
        }
        res.send(user);
    } catch (err) {
        res.status(401).send(err);
    }


})


router.post('/create_task', (req, res) => {
    console.log(req.body);
    new Tasks(req.body.data).save().then(tasks => {
        console.log(req.body.data);
        res.send(tasks);
    }).catch(err => {
        res.status(400).send(err);
    })


});

module.exports = router;