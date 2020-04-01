let mysql = require('mysql');


exports.handler =  (event, context, callback) => {
    let response;
    try {
        console.log('event : ' , event);
        console.log("create - connection")
        let connection = mysql.createConnection({
          host     : process.env.DB_HOST,
          user     : process.env.USER,
          password : process.env.PASSWORD,
          port     : process.env.PORT,
          database : 'classicmodels'
        });

        connection.query('select * from classicmodels.userinfo', function(error, results, field) {
            if( error ){
                console.log('error', error);
            }
            console.log('results', results)
        });
        connection.end();
    } catch (err) {
        console.log(err);
        return err;
    }
    
    
   callback(null, event);
    return response;
};
