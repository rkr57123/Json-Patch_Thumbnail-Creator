// var models = require('models').db,
//   Users = models.users;
// const TableHints = sequelize.TableHints;
// module.exports = {
//   getUserDemographics: function(userDemographicsJSON){
//     userDemographicsJSON.tableHint= TableHints.NOLOCK
//     return Users.findAll(userDemographicsJSON);
//   }
// }

var Users = sequelize.define('Users', {
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
})
// codes.sync();
module.exports = Users;