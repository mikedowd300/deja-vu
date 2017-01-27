exports.up = function(knex, Promise) {
  return knex.schema.createTable('score', function(table){
    table.increments();
    table.text('name').notNullable();
    table.integer('points');
    table.integer('card_count').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('score');
};
