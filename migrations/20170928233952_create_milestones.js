
exports.up = function (knex, Promise) {
	return Promise.all([
		knex.schema.createTable('milestones', function (table) {
			table.increments();			
			table.string('discription');
			table.date('date_achieved');
			table.timestamps();
		})
	])
};

exports.down = function (knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('milestones')
  ]);
};
