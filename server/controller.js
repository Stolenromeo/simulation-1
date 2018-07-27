module.exports={

    create: (req, res)=>{
        let db = req.app.get('db');
        let {name, price, img} = req.body;
        db.createProduct([name, price, img]).then(response=>{
            res.send(response)
        })
    },

    read:(req, res)=>{
        let db = req.app.get('db');
        db.getProducts().then(response=> {
            res.send(response)
        })
    },

    update: (req, res)=>{
        let { name, price, img } = req.body;
        let { id } = req.params;
        let db = req.app.get('db');

        db.updateProduct([name, price, img, id]).then(response=>{
            res.send(response)
        })},

    delete: (req, res)=>{
        let { id } = req.params;
        let db = req.app.get('db');
        db.deleteProduct(id).then(response=> {
            res.send(response)
        })}

}