
let express = require('express');

let app = express();


app.get('/fatorial/:n1',function(req,res){
    function fatorial (n){
    n = parseInt(req.params.n1);
        let fatorial = n
    for(let i = 1; i < n; i++){
        fatorial *= i;
    }
    res.send(`fatorial do número é: ${fatorial}`);
    }
    fatorial();
    
});
app.listen(3000,function(){
    console.log('iniciado na porta 3000');
});