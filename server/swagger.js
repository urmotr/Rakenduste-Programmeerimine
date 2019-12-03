const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TLU',
            version: '1.0.0'
        },
        servers: [{
            url: '/api/v1'
        }]
    },
    apis: ['./swagger/default.yaml', '/*.js']
};

module.exports = {
    options
};