const DataModel = require("../model/Datamodel");

exports.getDataByYear = async (query) => {  
  try {
    const year = Number(query.Year);

    const results = await DataModel.find({
      Year: [year, year - 1] 
    })

    return results;  
  } catch (error) {
    console.error('查找失败:', error);
    throw error;  
  }
};