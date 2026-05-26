import express from 'express';
import connection from './db.js';
import cors from 'cors';


const app = express();
const PORT = 8000;
const router = express.Router();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));


app.get('/user/me', async (req, res) => {
    try {
        const user_email = req.user.email;
        console.log(user_email)
        let user;
        
        const query = 'SELECT * FROM users WHERE email = ?';
        connection.query(query, [user_email], function (err, results) {
            if (err) throw err;


            if (results.length > 0) {
                user = results[0];
                console.log("user  inside callback: ", user)
            
            } else {
                return res.status(404).send('User not found');
            }


     
    
            return res.json({
                id: user.id,
                name: user.name,
                firstname: user.firstname,
                email: user.email,
                pp : user.pp,
                bio: user.bio,
                ville: user.ville
            });
            });

            
        } catch (error) {
            return res.status(500).send('Server error');
        }
    });
    
    app.post('/sendformular', async (req, res) => {
      const { name, firstname, mail, message } = req.body;
    
      try {
    
    
          const query = 'INSERT INTO contacts (name, mail, firstname, message) VALUES (?, ?, ?, ?)';
          connection.query(query, [name, mail, firstname, message], (err, result) => {
            if (err) throw err;
          res.status(201).send("Message envoyé avec succès ! vous recevrez une réponse par mail dans les plus brefs délais.");
        });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).send('An error occurred while sending the message.');
        }
    });
    


app.use('/user', router);
app.get('/', (req, res) => res.send('server ok'));
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default app;