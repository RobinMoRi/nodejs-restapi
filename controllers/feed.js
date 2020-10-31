exports.getPosts = (req, res, next) => {
    res.status(200).json({posts: [{
        title: 'first post',
        content: 'this is the first post by Robin'
    }]});
}

exports.postPosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    console.log(req.body)

    res.status(201).json({
        message: 'Post created!',
        post: {id: new Date().toISOString(), title: title, content: content}
    })
}