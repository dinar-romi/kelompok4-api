const { getAllMembersHandler, getMemberByIdHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/members',
    handler: getAllMembersHandler,
  },
  {
    method: 'GET',
    path: '/members/{id}',
    handler: getMemberByIdHandler,
  },
];

module.exports = routes;
