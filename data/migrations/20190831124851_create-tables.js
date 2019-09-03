
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_description', 128).notNullable();
      tbl.boolean('project_complete').notNullable().defaultTo(false);
  })
  .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128).notNullable();
      tbl.string('resource_description', 128).notNullable();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('task', tbl => {
      tbl.increments();
      tbl.string('task_description', 128).notNullable();
      tbl.string('task_notes', 128).notNullable();
      tbl.boolean('task_complete').notNullable().defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project');
};
