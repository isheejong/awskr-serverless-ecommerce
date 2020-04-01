var mysql = require('mysql');

let response;
exports.lambdaHandler = (event, context) => {
    try {
        var connection = mysql.createConnection({
          host     : 'kestore-database-skeleton.cluster-cztxn27k6wru.ap-northeast-2.rds.amazonaws.com',
          user     : 'admin',
          password : 'Dlgmlwhd1!',
          port     : '3306'
        });
        console.log("try to connect with aurora serverless");
        connection.connect(function(err) {
            console.log('after')
            if (err) {
              console.error('Database connection failed: ' + err.stack);
              return;
            }
            console.log('Connected to database.');
          });

        let response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world'
            })
        }
    } catch (err) {
        console.log('error', err);
        return err;
    }
    console.log('error');
    return response;
};
