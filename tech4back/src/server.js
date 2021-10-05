const app = require('express')();
const port = process.env.PORT || 8000;
const { router } = require('./routes');

app
    .use(router)

    .listen(port, () => console.log(`Server running on port ${port}`))