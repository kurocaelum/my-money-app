const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

// Validar email/senha
const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

// Tratar erros do banco de dados
const sendErrorsFromDB = (res, dbErrors) => {
   const errors = []
   _.forIn(dbErrors.errors, error => errors.push(error.message))

   return res.status(400).json({ errors })
}
