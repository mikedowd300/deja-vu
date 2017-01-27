exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('score').del()
    .then(function () {
        var scores = [
        {
          name: 'Sam',
          points: 6,
          card_count: 5
        },
        {
          name: 'Bob',
          points: 7,
          card_count: 10
        },
        {
          name: 'Phil',
          points: 21,
          card_count: 9
        },
        {
          name: 'Joe',
          points: 33,
          card_count: 10
        },
        {
          name: 'Dan',
          points: 1,
          card_count: 9
        }
      ];
      return knex('score').insert(scores);
    });
};
