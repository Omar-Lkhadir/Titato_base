const express = require('express');
const mysql = require('mysql');

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Middleware pour gérer les données au format JSON
app.use(express.json());

// Configurer la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: "localhost", // Votre hôte MySQL
  user: "root", // Votre nom d'utilisateur MySQL
  password: "Db_password", // Votre mot de passe MySQL
  database: "my-proto-si" // Votre nom de base de données MySQL
});

// Établir la connexion à la base de données MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);

    return;
  }
  console.log('Connecté à la base de données MySQL!');
});

// Endpoint pour gérer l'inscription des utilisateurs
app.post('/api/signup', (req, res) => {
    
  const { email, password } = req.body;


  // Ici, vous devrez effectuer la validation des données et le hachage du mot de passe avant de l'enregistrer dans la base de données

  const INSERT_QUERY = `INSERT INTO personne (email, password) VALUES (?, ?)`;
  connection.query(INSERT_QUERY, [email, password], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'inscription :', err);
      res.status(500).json({ error: 'Erreur lors de l\'inscription' });
      return;
    }
    console.log('Utilisateur inscrit avec succès!');
    res.status(200).json({ success: true });
  });
});

app.get('/api/getEmail', (req, res) => {
  // Ici, vous devez récupérer l'email de la base de données (par exemple, depuis la dernière inscription)

  const SELECT_QUERY = `SELECT email FROM personne ORDER BY id DESC LIMIT 1`;
  connection.query(SELECT_QUERY, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération de l\'email :', err);
      res.status(500).json({ error: 'Erreur lors de la récupération de l\'email' });
      return;
    }
    const email = results[0]?.email || 'Aucun email trouvé';
    res.status(200).json({ email });
  });
});
 


// Démarrer le serveur sur un port spécifique (par exemple, 5000)
app.listen(5000, () => {
  console.log("Serveur démarré sur le port 5000");
});
