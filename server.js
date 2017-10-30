/** ENV VARIABLES **/
// require('dotenv').config();

const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const passport   = require('passport');
const session    = require('cookie-session');
const secret     = process.env.SESSION_SECRET;
const routes     = require('./routes/routes');
const { User }   = require('./models');

const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV || 'development';
const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**__ PASSPORT __**/
require('./services/passport');

// app.set('trust proxy', 1);
// session secret
app.use(session({
    secret,
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());
// serialized and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

// deserialize user into session
passport.deserializeUser(function(user, done) {
    User.findOne( { _id: user._id }).then(dbUser => {
        done(null, dbUser);
    });
});
/**__ END PASSPORT __**/
const mongodbURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/myportfolio';
/**__ MONGODB __**/
mongoose.Promise = Promise;
mongoose.connect(mongodbURI, {
    useMongoClient: true
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static('client/public'));
}
/**__ END MONGODB __**/

/**__ ROUTES __**/
app.use('/', routes);


/**__ END ROUTES __**/

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
