const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

const routes = require('./routes/routes');

const PORT = process.env.PORT || 3001;
const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
TODO: setup MongoDB Database

**/

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static('client/public'));
}

/**setup routes for app here**/
app.use('/', routes);


/**--------end routes-------**/

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
