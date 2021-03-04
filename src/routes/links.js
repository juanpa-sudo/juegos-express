const express = require('express');
const router = express.Router()

// Rutas de lado del usuario
router.get('/index', async(req, res) => {
    res.render('principal/index')
})
router.get('/categorias', async(req, res) => {
    res.render('principal/categorias')
})
router.get('/noticias', async(req, res) => {
    res.render('principal/noticias')
})
router.get('/block', async(req, res) => {
    res.render('principal/block')
})
router.get('/descripcion', async(req, res) => {
    res.render('principal/descripcion')
})

// Rutas del Usuario
router.get('/session', async(req, res) => {
    res.render('users/session')
})
router.get('/registro', async(req, res) => {
    res.render('users/registro')
})
router.get('/perfil', async(req, res) => {
    res.render('users/perfil')
})


// Rutas para administrador
router.get('/session-admin', async(req, res) => {
    res.render('admin/session')
})
router.get('/dasboard', async(req, res) => {
    res.render('admin/admin-videojuego')
})
router.get('/ingresar-juego', async(req, res) => {
    res.render('admin/ingVideo')
})
router.get('/empresa', async(req, res) => {
    res.render('admin/admin-empresa')
})
router.get('/consola', async(req, res) => {
    res.render('admin/admin-consola')
})
router.get('/categoria', async(req, res) => {
    res.render('admin/admin-categoria')
})
router.get('/edad', async(req, res) => {
    res.render('admin/admin-edad')
})
router.get('/noticia', async(req, res) => {
    res.render('admin/admin-noticia')
})
router.get('/ingresar-noticia', async(req, res) => {
    res.render('admin/ingNoticia')
})
router.get('/administrador', async(req, res) => {
    res.render('admin/admin-administrador')
})
router.get('/ingresar-admin', async(req, res) => {
    res.render('admin/ingAdmin')
})
router.get('/ventas', async(req, res) => {
    res.render('admin/admin-venta')
})
router.get('/users', async(req, res) => {
    res.render('admin/admin-user')
})

module.exports = router