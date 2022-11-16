'use strict';

const crypto = require('crypto');
const CHAVE = 'bf3c199c2470cb477d907b1e0917nd31'; // 32
const IV = "5183666c72eec9e4"; // 16
const ALGORITMO = "aes-256-cbc";
const METODO_CRIPTOGRAFIA = 'hex';
const METODO_DESCRIPTOGRAFIA = 'hex';

const encrypt = ((text) =>  {
  let cipher = crypto.createCipheriv(ALGORITMO, CHAVE, IV);
  let encrypted = cipher.update(text, 'utf8', METODO_CRIPTOGRAFIA);
  encrypted += cipher.final(METODO_CRIPTOGRAFIA);
  return encrypted;
});

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { user: 'anaj', nome: 'Ana Julia', senha: encrypt('123') }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
