const Todo = require("../model/Todo")


//define route handler

exports.updateTodo = async (req,res) => {
    try {
        const {id} = req.params;
        const {title , description} = req.body;

        const Updatetodo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title , description , updatedAt: Date.now()},
            )

        if(!Updatetodo){
            res.status(404).json({
                success:false,
                message:"Not Fount"
            })
        }

        res.status(200).json({
            success:true,
            data:Updatetodo,
            message:"Data updated successfully"
        })



    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server Error",
            message: error.message
        })
    }
}