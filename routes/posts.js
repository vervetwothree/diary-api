import express from 'express'
import { getAllPosts,
        getPost,
        createPost,
        deletePost,
        updatePost
 } from '../controllers.js/postControllers.js'
 
import { deleteModel } from 'mongoose'

const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getPost)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)
export default router; 