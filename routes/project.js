var express = require('express')
var router = express.Router()

const { getProjectById , createproject, getProject, getAllProjects, updateProject, removeProject } = require('../controllers/project')

router.post("/createproject", createproject)
// router.get("/project", project)
router.param("projectId", getProjectById)

router.get("/project/:projectId", getProject)
router.get("/projects", getAllProjects)

router.put(
    "/project/update/:projectId", updateProject
)

router.delete(
    "/project/:projectId", removeProject
)

module.exports = router;