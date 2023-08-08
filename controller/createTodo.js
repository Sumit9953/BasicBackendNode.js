const Todo = require("../model/Todo")


//define route handler

exports.createTodo = async (req,res) => {
    try {
        //extract title , description from request body
        const {title , description} = req.body;

        //create a new Todo object and insert in DB
        const response = await Todo.create({title,description});

        //send json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry created successfully'
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