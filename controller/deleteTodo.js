const Todo = require("../model/Todo")

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;

        const Deletetodo = await Todo.findByIdAndDelete({_id:id});

        res.status(200).json(
            {
                success: true,
                data: Deletetodo,
                message: 'Data deleted successfully'
            }
        )

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