const { Sequelize} =require("sequelize")

const sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST ||'127.0.0.1',
        port:process.env.DB_PORT||3306,
        dialect:"mysql",
        logging:console.log,
        dialectOptions:{
            connectTimeout:10000
        }
    }
    
)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports=sequelize