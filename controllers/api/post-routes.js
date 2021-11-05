const router = require('express').Router();
const { Post } = require("../../models")
const withAuth = require('../../utils/auth');


// get all post
router.get("/", (req, res) => {
    Post.findAll({
        where: {
          userId: req.session.user_id
        }
    })
        .then(postData => {
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});


// get a post by id
router.get("/:id", (req, res) => {
    Post.findByPk(req.params.id)
        .then(singlePost => {
            if (singlePost) {
                res.json(singlePost);
            } else {
                res.status(404).json({ err: "no such comment found!" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
})


// create a post
router.post("/", withAuth, (req, res) => {
    Post.create({
      comment: req.body.comment,
      authorId: req.session.user_id,
      userId: req.body.userId
    })
      .then(newPost => {
        res.status(200).json(newPost);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
});


// update a post
router.put("/:id", (req, res) => {
    if (!req.session.user) {
      return res.status(403).json({ err: "please login first" });
    }
    Post.findByPk(req.params.id)
      .then(foundPost => {
        if (req.session.user.id !== foundPost.UserId) {
          return res.status(403).json({ err: "not your comment!" });
        }
  
        Post.update(
          {
            comment: req.body.review,
            profile_user_id: req.body.user.id
          },
          {
            where: {
              id: req.params.id
            }
          }
        )
          .then(updatedData => {
            if (updatedData[0]) {
              res.json(updatedData);
            } else {
              res.status(404).json({ err: "no such comment found!" });
            }
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ err });
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
});
  
// delete a post by id
router.delete("/:id", (req, res) => {
    if (!req.session.user) {
      return res.status(403).json({ err: "please login first" });
    }
    Post.findByPk(req.params.id).then(foundPost => {
      if (req.session.user.id !== foundPost.UserId) {
        return res.status(403).json({ err: "not your comment!" });
      }
      Post.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(delPost => {
          if (delPost) {
            res.json(delPost);
          } else {
            res.status(404).json({ err: "no such comment found!" });
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ err });
        });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });;
});
  
module.exports = router;
