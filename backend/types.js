
const z = require('zod');

const createTodo = z.object({
  title: z.string().max(30),
  // description: z.string().min(5).max(300) 
});

const updateTodo = z.object({
  id: z.string()
});

module.exports = {
  createTodo,
  updateTodo
};

