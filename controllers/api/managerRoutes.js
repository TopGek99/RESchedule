const router = require('express').Router();
const { Manager } = require('../../models')


// change router url path according to font end !!!!
// To create an employee account, intentionally for signup
router.post('/', async (req, res)=> {
  try {
    const managerData = await Manager.create(req.body);

    req.session.save(() => {
      req.session.employee_id = managerData.id,
      req.session.logged_in = true
    })

    res.status(200).json(managerData)
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login
router.post('/login', async (req, res)=> {
  try {
    const managerData = await Manager.findOne({
      where: {
        email: req.body.email
      }
    })

    if(!managerData) {
      res.status(400).json({message: 'Incorrect email or password, please try again'});
      return
    }

    const validPassword = await managerData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({message: 'Incorrect email or password, please try again'});
      return
    }

    req.session.save(() => {
      req.session.employee_id = managerData.id,
      req.session.logged_in = true

      res.status(200).json(managerData)
    })
  } catch (err) {
    res.status(400).json(err);
  }
})

// Logout
router.post('./logout', async (req, res)=> {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;