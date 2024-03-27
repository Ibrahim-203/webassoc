module.exports = (sequelize,DataTypes)=>{
const Users = sequelize.define("Users", {
    nom:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    prenom:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
})
return Users;
};