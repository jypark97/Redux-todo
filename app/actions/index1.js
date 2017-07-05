
export function toggleTodo (id) {
 return {
  type: 'TOGGLE',
  id,
  completed: true
 };
}
