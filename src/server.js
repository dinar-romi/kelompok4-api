require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('./api/routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  server.ext('onPreResponse', (request, h) => {
    const response = request.response;

    if (response.isBoom) {
      const statusCode = response.output.statusCode;

      // Gunakan pesan error kustom untuk 404
      if (statusCode === 404) {
        return h
          .response({
            statusCode: 404,
            error: 'Not Found',
            message: 'Page not found',
          })
          .code(404);
      }

      // Gunakan format default untuk error lain
      return h
        .response({
          statusCode,
          error: response.output.payload.error,
          message: response.message || 'Terjadi kesalahan',
        })
        .code(statusCode);
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
