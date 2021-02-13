const Project = require("../models/project")

exports.createproject = (req, res) => {
    const project = new Project(req.body)
    project.save((err, project) => {
        if (err) {
            return res.status(400).json({
                err: "Unable to save the project"
            })
        }
       return res.json({
            // name: project.name,
            // code: project.code,
            // id: project._id
            project
        })
    })
}

exports.getProjectById = (req, res, next, id) => {
    Project.findById(id).exec((err, proj) => {
        if(err){
            return res.status(400).json({
                error: "project doesnt exist"
            })
        }
        req.project = proj;
        next();
    })
}

exports.getProject = (req, res) => {
    return res.json(req.project);
}

exports.getAllProjects = (req, res) => {
    Project.find().exec((err, projects) => {
        if(err){
            return res.sts(400).json({
                error: "no projects found"
            });
        }
        res.json(projects)
    })
}

exports.updateProject = (req, res) => {
    const project = req.project;
    project.code = req.body.code;

    project.save((err, updatedProject) => {
        if(err){
            return res.status(400).json({
                error:"unable to update project"
            });
        }
        res.json(updatedProject)
    })
}

exports.removeProject = (req, res) => {
    const project = req.project;

    project.remove((err, project) => {
        if(err){
            return res.status(400).json({
                error: "Failed to delete project"
            })
        }
        res.json({
            message: "sucessfully deleted the project"
        })
    })
}

// exports.project = (req, res) => {
//     res.json({
//         message: "project created successfully"
//     })
// }