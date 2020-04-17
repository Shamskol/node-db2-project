
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        // a primary key, called id that autoincrements
        tbl.increments("id");
    
        // an index make searching for a value in a column a LOT faster
        tbl.string("VIN", 45).notNullable().unique().index();
        tbl.string( "make", 128).notNullable().index()
        tbl.string( "model", 128).notNullable().index()
        tbl.string( "mileage", 128).notNullable().index()
        tbl.string( "transmission", 128).index()
        tbl.string( "title", 128).index()

      });
  
};

exports.down = function(knex) {
    
        return knex.schema.dropTableIfExists("cars");
  
};
