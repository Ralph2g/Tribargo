'use strict'

/**
 * @name        passport.js
 * @author      Jesus Kaimorts Diaz Medina 
 * @version     1.1
 * @description El script es el encargado de poder registrarse
 *              con gmail, twitter y facebook utilizando la 
 *              libreria passport
 */
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const User = require('../models/model.auth.user');
const Property = require('../config/config.properties');

module.exports = function(app, passport) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
            clientID: Property.FACEBOOK_APP.ID,
            clientSecret: Property.FACEBOOK_APP.SECRET,
            callbackURL: `http://localhost:${Property.port}/auth/facebook/callback`,
            profileFields: ['id', 'displayName', 'photos', 'email']
        },
        function(accessToken, refreshToken, profile, done) {
            /*User.findOrCreate(..., function(err, user) {
                if (err) { return done(err); }
                done(null, user);
            });*/
            done(null, profile);
        }
    ));

    /** =============== Routes =============== *
     * Facebook will redirect the user to this URL after approval.  Finish the
     * authentication process by attempting to obtain an access token.  If
     * access was granted, the user will be logged in.  Otherwise,
     * authentication has failed.
     **/
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

    /** =============== Permission =============== **/
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'read_stream' }));

    return passport;
}