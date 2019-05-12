module.exports = {
    port: process.env.PORT || 3001, // El puerto puede ser una variable de entorno o el 3000
    db: process.env.MONGODB || 'mongodb://localhost:27017/tribargo',
    DAYS_TOKEN: 14,
    SECRET_TOKEN: 'ZIuDo7T9%VMY7}zgP'
}