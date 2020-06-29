const {
  createNote,
  updateNote,
  deleteNote,
} = require('./NoteMutation');
const {
  createUser,
  updateUser,
  deleteUser,
} = require('./UserMutation');
const {
  createSite,
  updateSite,
  deleteSite,
} = require('./SiteMutation');
const {
  createFloor,
  updateFloor,
  deleteFloor,
} = require('./FloorMutation');

module.exports = {
  createNote,
  updateNote,
  deleteNote,
  createUser,
  updateUser,
  deleteUser,
  createSite,
  updateSite,
  deleteSite,
  createFloor,
  updateFloor,
  deleteFloor,
};
