const app = require('express')()
const http = require('http').Server(app);

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const mongoose = require('mongoose')

const projectRoutes = require("./routes/project")

//setting port
const port = process.env.port || 9000 ;

//seding response
app.get('/', (req, res) => {
  return res.send('Hello coders')
})


// db connection
mongoose.connect(
    'mongodb+srv://rahul:ranjan@cluster0.wf4q3.mongodb.net/codecollab?retryWrites=true&w=majority',
    
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log(err));


//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", projectRoutes)


// starting server
app.listen(port, () => {
    console.log(`app is running at port ${port}`)
})