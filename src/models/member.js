const pool = require('../database/db');

const getAllMembers = async () => {
  const result = await pool.query('SELECT * FROM members');
  return result.rows;
};

const getMemberById = async (id) => {
  const result = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = { getAllMembers, getMemberById };
