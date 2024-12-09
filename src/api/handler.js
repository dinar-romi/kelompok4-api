const { getAllMembers, getMemberById } = require('../models/member');

const getAllMembersHandler = async (request, h) => {
  try {
    const members = await getAllMembers();
    return h.response(members).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Failed to fetch members' }).code(500);
  }
};

const getMemberByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const member = await getMemberById(id);
    if (!member) {
      return h.response({ error: 'Member not found' }).code(404);
    }
    return h.response(member).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Failed to fetch member' }).code(500);
  }
};

module.exports = { getAllMembersHandler, getMemberByIdHandler };
