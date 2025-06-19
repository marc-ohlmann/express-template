const { Pool } = require("pg");


// The following should be read from environment variables
// We're hardcoding them here for simplicity
const connectionString = "postgresql://marco:chilidog5@localhost:5432/top_users";

module.exports =  {

    connectionString: connectionString,
    pool: new Pool({ connectionString: connectionString }),

}

