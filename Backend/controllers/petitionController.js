exports.generatePetition = (req,res)=>{

const {name,caseType,city} = req.body;

const petition = `
PETITION APPLICATION

Name: ${name}
City: ${city}
Case Type: ${caseType}

I request the court to take legal action regarding the above matter.

Signature:
${name}
`;

res.json({petition});
};