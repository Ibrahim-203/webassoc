module.exports = (sequelize,DataTypes)=>{
    const Enseignement = sequelize.define("Enseignements", {
        libelle:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    })
    return Enseignement;
    }; 