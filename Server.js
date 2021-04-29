                 
                    // This is server listener in this file server.js



const express= require("express");
const path= require("path");
const fs= require("fs");
const app= express();
const port=80;


// THIS IS PATH MODULE START HERE.

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());


// THIS IS END POINTS START HERE.

// (render) is file reader.

app.get('/',(req, res)=>{
    res.status(200).render('index.pug')
});


// (send) is text reader.

app.get('/',(req, res)=>{
    res.status(200).send('index.pug')
});

// THE SERVER IS START HERE.

app.listen(port,()=>{
    console.log(`This is port ${port}`);
});


// FORM BACK-END IS START HERE.

app.post('/',(req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite =`Clint Name${name},Clint old${age},Clint gender${gender},Clint address${address},Clint about more informaction${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
});