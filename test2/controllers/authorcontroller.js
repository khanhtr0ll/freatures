const {Author,Book} = require("../model/model");
const authorcontroller ={
    addauthor: async (req,res)=>{
        try {
            const newauthor = new Author(req.body)
            const saveauthor = await newauthor.save()
            res.status(200).json(saveauthor) // tra 

        } catch (err) {
            res.status(500).json(err);// xem bang cach tim http request code
        }
    },
    getallauthor: async (req,res)=>{
        try {
            const authors =  await Author.find()
            res.status(200).json(authors)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getanauthor: async (req,res)=>{
        try {
            const authors =  await Author.findbyid(req.params.id).populate("book")
            res.status(200).json(authors)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updatauthor: async(req,res)=>{
        try {
            const author = await book.findbyid(req.params.id)
            await author.updateone({$set:req.body})
            res.status(200).json("updata thanh cong")
        } catch (err) {
            res.status(500).json(err) 
        }
    },
    deleteauthor: async(req,res)=>{
        try {
            await book.updatemany({author: req.params.id},{author:null})
            await Author.findbyidanddelete(req.params.id)
            res.status(200).json("delete thanh cong")
        } catch (err) {
            res.status(500).json(err) 
        }
    },
}
module.exports = authorcontroller