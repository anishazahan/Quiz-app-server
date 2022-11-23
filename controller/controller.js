

//---------get all question-----

export async function getQuestions(req,res){
    res.json('questions api get requst')
}

//---------insert all question-----

export async function insertQuestions (req,res){
    res.json('post questions')
}

///--------delete all questions--------

export async function dropQuestions(req,res){
    res.json('delet question')
}

///--------get  all result--------

export async function getResult(req,res){
    res.json('get result question')
}