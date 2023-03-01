const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/data/db.json');
const fs = require('fs');
const jwt = require('jsonwebtoken')
const middlewares = jsonServer.defaults();
const userdb = JSON.parse(fs.readFileSync('./server/data/db.json', 'UTF-8'));

server.use(jsonServer.bodyParser);
//SECRET is only in the server.
const SECRET_KEY = '123456789'
const expiresIn = '1h'
const server_origin = window.location.origin;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.header('Access-Control-Allow-Headers', '*')
    next()
});


function isAuthenticated({ username, password }) {
    return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1;
}
//create token from a payload
function createToken(payload) {
    console.log(payload);
    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
}

server.post('/auth/login', (req, res, next) => {
    const {username,password} = req.body;
    if(isAuthenticated({username, password}) === false) {
        const status = 401;
        const message = 'email e/ou senha incorretos';
        res.status(status).json({status,message});
        return
    };    
    const admin = JSON.stringify(userdb.users.find(obj => obj.username === req.body.username).admin);    

    const access_token = createToken({username,password,admin});
    res.status(200).json({access_token});   
    
})

server.use(/^(?!\/[auth | api]).*$/,  (req, res, next) => {
    console.log(req.headers.authorization);
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Não autorizado!'
      res.status(status).json({status, message})
      return
    }
    try {
       verifyToken(req.headers.authorization.split(' ')[1])
       next()
    } catch (err) {
      const status = 401
      const message = 'Error: token de acesso inválido'
      res.status(status).json({status, message})
    }
  })


server.use('/api', router);
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server está funcionando');
})

