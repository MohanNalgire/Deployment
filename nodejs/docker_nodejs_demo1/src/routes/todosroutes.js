import { Router } from 'express';
import Todo from '../models/todo.js';

const router = Router();

router.get('/', async(req, res)=>{
    try {
        const todos = await Todo.find();
        res.json({todos})
    } catch (error) {
        console.error(error)
    }
})

router.post('/', async(req,res)=>{
    try {
        const { completed, title} = req.body;
        const todo = await Todo.create({
            completed, title
        });
        res.json({todo})
    } catch (error) {
        console.error(error)
    }
});
router.put('/:id', async(req,res)=>{
    try {
        const { id } = req.params;
        const {completed, title} = req.body;
        if(completed)updateTodo.completed = completed;
        if(title)updateTodo.title = title;
        const todo = await Todo.findByIdAndUpdate(id, updateTodo,{
            new: true,
        })
        res.json({todo})
    } catch (error) {
         console.error(error)
    }    
});
router.patch('/:id', async(req,res)=>{
    try {
         const { id } = req.params;
        const {completed, title} = req.body;
        if(completed)updateTodo.completed = completed;
        if(title)updateTodo.title = title;
        const todo = await Todo.findByIdAndUpdate(id, updateTodo,{
            new: true,
        })
        res.json({todo})
    } catch (error) {
         console.error(error)
    }    
});
router.delete('/:id', async(req,res)=>{
    try {
         const { id } = req.params;
        const todo = Todo.findById(id);
        await todo.delete();
        res.json({todo})
    } catch (error) {
         console.error(error)
    }    
});

export default router