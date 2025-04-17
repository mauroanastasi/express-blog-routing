// importiamo express
const express = require(`express`);

// inizializzo express invocandolo come funzione e salvando il risultato in una variabile
const app = express();

// definisco la porta
const port = 3000;

// definisco la prima rotta
app.get(`/`, (req,res) => {
    res.send(`hello world`)
});

// avvio il server mettendolo in ascolto della porta definita
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
});

// definisco gli asset statici
app.use(express.static(`public`))


// importo il router in una variabile
const postsRouter = require(`./routers/posts.js`)

// utilizzo postsRouter per creare effettivamente le rotte
app.use(`/posts`, postsRouter);