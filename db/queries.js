const knex = require('./knex');

module.exports = {
  getscores: function() {
    return knex('score').select();
  },
  postScore: function(player){
    return knex('score').insert(player);
  }
}
