
exports.up = knex => knex.schema.createTable("movie_tags", table => {
    table.increments("id");
    table.integer("note_id").references("id").inTable("movie_notes");
    table.integer("user_id").references("user_id").inTable("movie_notes");
    table.text("name");
})

exports.down = knex => knex.schema.droptable("movie_tags");