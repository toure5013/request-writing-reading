var request = require('request');

const app = "test1592499168238";
const path = "/convbot"
const url = "https://io.datasync.orange.com/datasync/v2/"+app+"/data/"+path;

//Write
const data = {"yes" : 1, "no" : 122222} ;

request.post(url, {
  json: data
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
})




request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body['-ME2XLOyIGQbZD679bIw']);
  for(var el in body){
      console.log(el);
      console.log( body[el]);
     
  }
 
});

