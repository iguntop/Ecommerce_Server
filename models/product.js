'use strict';
module.exports = (sequelize, DataTypes) => {
  class Product extends sequelize.Sequelize.Model{}
  Product.init({    
  name:{
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
      noNull:{
        args:true,
        msg:"Name require"
      }
    }

  },
    image_url:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        noNull:{
          args:true,
          msg:"Images require"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        noNull:{
          args:true,
          msg:"Price require"
        }
      }
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        noNull:{
          args:true,
          msg:"stock require"
        }
      }
    } 
  },{
    sequelize,
    modelName:"Product"
  })
    
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};