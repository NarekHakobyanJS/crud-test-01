import {Router} from "express";
// import { posts } from "../db/db.js";

let posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},]


let postsRouter = Router();

postsRouter.get('/', (req, res) => {
    let title = req.query.title;

    if(title) {
        let filtredPosts = []
        filtredPosts = posts.filter((post) => post.title.indexOf(req.query.title) > -1)
        res.json(filtredPosts)
    }
    res.json(posts)
})
postsRouter.get('/:id', (req, res) => {
    let id = req.params.id;

    if(id) {
        let uniqeId = posts.find((post) => post.id == id);
        res.json(uniqeId)
    }else {
        res.sendStatus(404)
    }
})
postsRouter.post('/', (req, res) => {
    let {title, body} = req.body;
    
    let newObject = {
        id : Date.now(),
        userId : 1,
        title : title,
        body : body,
    }

    posts.push(newObject)
    res.json(newObject)
})
postsRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    if(id){
        posts = posts.filter((post) => post.id != id)
        res.json({})
    }else {
        res.sendStatus(404)
    }
})
postsRouter.patch('/:id', (req, res) => {
    let {title, body} = req.body
    let changedObject = posts.find(post => post.id == req.params.id) 
    if(title){
        changedObject.title = title
        res.json(changedObject)
    }
    if(body) {
        changedObject.body = body
        res.json(changedObject)
    }
    res.sendStatus(404)
})
export default postsRouter;



/// test
// fetch('http://localhost:3003/posts', {
//     method : "POST",
//     headers : {
//         'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify({title : "CRUD", body : 'Create Reacd Update Delete'})
// }).then((res) => res.json()).then((res) => console.log(res))