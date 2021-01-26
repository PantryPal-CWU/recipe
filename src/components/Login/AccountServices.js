const bcrypt = require('bcryptjs');
//Need to do: npm install bcryptjs in your recipe directory

module.exports = {
    authenticate,
    register
};

async function register() {
    
}

async function authenticate(email, password) {
    
}

const hashPassword = async (password, saltRounds = 10) => {
    try {
        // create salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
    }

    return null;
}