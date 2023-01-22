const { Router } = require('express');

const {
  getAllCourses,
  getCoursesVideos,
  createCourse,
  updateCourse
} = require('../controllers/course.controllers')

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/videos', getCoursesVideos);

router.post('/course', createCourse);

router.put('/course/:id', updateCourse);


module.exports = router;
