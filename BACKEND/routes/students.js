const router = require("express").Router();
let Student = require("../models/Student");

//Create in CRUD
router.route("/add").post((req,res)=>{ //pass to the mogodb database

    const name = req.body.name;
    const age = Number(req.vody.age);
    const gender = req.body.gender;

    const newStudent = new Student({ 
        name,
        sge,
        gender
    })
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})

//Update

//Async Functions always return a promise.
// Await Keyword is used only in Async Functions to wait for promise.

router.route("/update/:id").put(async(req,res) =>{
    let userId = req.params.id;
    const {name,age,gender} = req.body; //destructure

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"user updated", user:update})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Errror with delete user", error: err.message});
    })
})

//Get only one student details


module.exports = router;



