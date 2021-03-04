const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


// Inicio
const app = express()

// Configuraciones
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handebars'),
}))

app.set('view engine', 'hbs')

//Peticiones
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Variables Globales

app.use((req, res, next) => {
    next()
})

// Rutas

app.use(require('./routes/index'))
app.use(require('./routes/autenticacion'))

app.use('/home', require('./routes/links'))
app.use('/login', require('./routes/links'))
app.use('/user', require('./routes/links'))
app.use('/admin', require('./routes/links'))


// Public
// app.unsubscribe(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))


// Iniciando el servidor

app.listen(app.get('port'), () => {
    console.log(`Servidor en el ${app.get('port')}`)
})