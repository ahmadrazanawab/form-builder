const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "form_builder",
});
  
export default db;