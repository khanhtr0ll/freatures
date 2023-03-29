const {Book,Author} = require("../model/model");
const bookcontroller = {
    addbook: async(req,res)=>{
        try {
             const newbook = new book(req.body)
             const savebook = await newbook.save()
             if(req.body.Author){
                const author = author.findbyid(req.body.author)
                await author.updateone({$push:{book:savebook._id}})
                
             }
             res.status(200).json(savebook)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getallbook: async(req,res)=>{
        try {
            const allbook = await book.find()
            res.status(200).json(allbook)
        } catch (err) {
            res.status(500).json(err) 
        }
    },
    getabook: async(req,res)=>{
        try {
            const abook = await book.findbyid(req.params.id).populate("author")
            res.status(200).json(abook)
        } catch (err) {
            res.status(500).json(err) 
        }
    },
    updatabook: async(req,res)=>{
        try {
            const book = await book.findbyid(req.params.id)
            await book.updateone({$set:req.body})
            res.status(200).json("updata thanh cong")
        } catch (err) {
            res.status(500).json(err) 
        }
    },
    deletebook: async(req,res)=>{
        try {
            await author.updatemany({book: req.params.id},{$pull:{books:req.params.id}})
            await book.findbyidanddelete(req.params.id)
            res.status(200).json("delete thanh cong")
        } catch (err) {
            res.status(500).json(err) 
        }
    },
}
module.exports= bookcontroller