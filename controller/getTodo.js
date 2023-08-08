const Todo = require("../model/Todo")


//define route handler

exports.getTodo = async (req,res) => {
    try {
        //fetch all Todo items
        const todos = await Todo.find({});

        //response
        res.status(200).json(
            {
                success: true,
                data: todos,
                message: 'fetch all data successfully'
            }
        )
    } catch (error) {
       console.log(error);
       console.error(error);
       res.status(500).json({
        success: false,
        error: error.message,
        message: "Server Error "
       })
    }
}

exports.getTodoById = async(req,res) => {
    try {
        //extract todo items by ID
        const id = req.params.id; // for extracting the id
        const todo = await Todo.findById({_id:id});

        //data for given id not found
        if(!todo){
            res.status(404).json({
                success: false,
                message: "No Data Found"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Data for given id is successfully found"
        })

    } catch (error) {
        console.error(error),
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Sever error"
        })
    }
}