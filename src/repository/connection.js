import mysql from 'mysql2/promise'

let con = await mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  typeCast: function (field, next) {
      
    if (field.type === 'TINY' && field.length === 1) {
        return (field.string() === '1'); 
    }
    else if (field.type.includes('DECIMAL')) {
      return Number(field.string());
    }
    else {
        return next();
    }
    
  }
})

console.log("--> Conexão com BD realizada!")

export default con;