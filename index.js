const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/b', (req, res) => {
    res.send('Hello Abinash')
  })
  
app.get('/a',(req, res) => {
    res.send('abinashdot')
})
app.get('/login', (req,res) => {
    res.send('<h1> please log in at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})