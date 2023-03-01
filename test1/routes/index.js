var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
//CONECTING DB// APP CONFI
mongoose.connect('mongodb://127.0.0.1:27017/lophoc', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});
//SCHEMA
let lopSchema = mongoose.Schema({
  malophoc: {
    type: Number,
  },
  tenlop: {
    type: String,
  },
  soluongsv: {
    type: Number,
  },
  magiangvien: {
    type: Number,
  },
});

//MODEL
let Lop = mongoose.model('Lop', lopSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  Lop.find({},(error,data)=>{
    res.render('index',{lops:data})
    console.log(data)
  })
  res.render('index', { title: 'Express' });
});
router.get('/form-add',function(req,res,next){
  res.render('addlop', { title: 'Express' });
})
router.get('/delete/:id',function(req,res,next){
  lop.findByIdAndDelete(req.params.id,(error,data)=>{
    res.redirect('/')

  })
})
router.get('/update/:id',function(req,res,next){
  lop.findById(req.params.id,(error,data)=>{
    res.render('/update',{lop:data})
  })
})
router.post('/add',function(req,res,next){
  Lop.create(req.body);
  res.redirect('/')
})
router.post('/update',function(req,res,next){
  Lop.findByIdAndUpdate(req.body.id, req.body,(error,data)=>{
    res.redirect('/')
  });
})
module.exports = router;
