const jwtToken = require('jsonwebtoken'); 
const email = 'uzmanzahid6655@gmail.com';
const password = '1234';

const signInUser = async (req, res) => {
  try {
    const { email: reqEmail, pass: reqPassword } = req.body;

    if (reqEmail === email && reqPassword === password) {
      
      const token = jwtToken.sign({ Role: 'user' }, 'hellokey', { expiresIn: '1h' });

      res.status(200).send({
        accessToken: token
      });
    } else {
      console.error('Failed to sign in: Invalid credentials');
      res.status(404).send("failedto signin");
    }
  } catch (error) {
    console.error('Failed to sign in:', error);
    res.status(500).send(error.message);
  }
};

module.exports = {
    signInUser
};
