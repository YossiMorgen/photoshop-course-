import mysql from 'mysql';
import appConfig from './app-config';

const connection = mysql.createPool({
    host: appConfig.host,
    user: appConfig.username,
    password: appConfig.password,
    database: appConfig.db
})

function execute(sql: string):Promise<any>{
    return new Promise((resolve, rejects) => {
        connection.query(sql, (err, result) => {
            if(err){
                rejects(err);
                return;
            }

            resolve(result) 
        })
    })
}

export default {
    execute
}
