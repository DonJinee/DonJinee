// Routes file for posts
const express = require('express');
// Create router
const router = express.Router();
const Post = require('../models/Post');


// Routes
// Get back all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err) {
        res.json({message: err})
    }
});
 
// Gets back a specific post
router.get('/:postID', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postID);
    res.json(post);
    } catch(err) {
        res.json({message: err});
    };
});
// Submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        fullName: req.body.fullName,
        title: req.body.title,
        description: req.body.description
    });
    // .then(data => {
    //     res.status(200).json(data);
    // })
    // .catch(err => {
    //     res.json({message: err});
    // });
    try {
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err) {
        res.json({message: err})
    }
});

// Delete a post
router.delete('/:postID', async (req, res) => {
    try{
        const removedPost = await Post.deleteOne({_id: req.params.postID});
        res.json(removedPost)
    } catch(err) {
        res.json({message: err});
    }
});

// Update a post
router.patch('/:postID', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postID},
            {$set: { title: req.body.title}}
            );
        res.json(updatedPost)
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;