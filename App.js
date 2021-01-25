const express = require('express')
const app = express()
const fs = require('fs')
const cors = require("cors");

app.use(cors());
app.use(express.json())


app.get('/read_mem', (req, res) => {
    fs.readFile('mem.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        res.send(data)
    })
})

app.post('/write_mem/:num', (req, res) => {
    fs.writeFile('mem.txt', req.params.num, function (err) {
        if (err) throw (err)
        console.log(`Saved ${req.params.num} to mem`);
    })
    res.status(200)
})

/* handle JSON formatted requests

app.post('/write_mem', (req, res) => {
    console.log(req.body.num);
    fs.writeFile('mem.txt', req.body.num, function (err) {
        if (err) throw (err)
        console.log(`Saved ${req.body.num} to mem`);
    })
    res.send("Mem saved!");
})

app.get('/read_mem', (req, res) => {
    fs.readFile('mem.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(`Read ${data} from mem`);
        const jsonData = { num: data }
        res.send(JSON.stringify(jsonData))
    })
})
*/


app.listen(4000, () => {
    console.log("Listening to 4000");
})
