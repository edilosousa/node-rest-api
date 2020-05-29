module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
      nome: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    });
    return Usuario;
  };