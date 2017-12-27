var post = new PostModel();

post.title = title;
post.content = content;

post.save(function(err,doc){
    res.send(doc);
})

/***************** */

PostModel.remove({_id:postId},function(err){
    if(err)handleError(err);
    //removed!
})

/************* */

PostModel.find({},function(err,docs){
    res.json({postsList:docs});
})

PostModel.findOne({_id:postId},function(err,docs){
    res.json({postsList:docs});
})


/************** */
/* 改@1 */
PostModel.findOne({_id:postId},function(err,doc){
    if(err) handleError(err);
    doc.title = '修改标题';
    doc.content = '修改内容';
    doc.save();
})

/* 改@2 */
PostModel.update({_id:postId},{title:'修改标题',content:'修改内容'},function(err,doc){
    if(err) handleError(err);
    // updated!
})






