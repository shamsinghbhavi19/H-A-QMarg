const cases = require("../data/cases.json");

exports.getCases = (req,res)=>{
    res.json(cases);
};

exports.getCaseByType = (req,res)=>{
    const type = req.params.type;

    const result = cases.find(
        c => c.type.toLowerCase() === type.toLowerCase()
    );

    if(result){
        res.json(result);
    }else{
        res.json({message:"Case not found"});
    }
};