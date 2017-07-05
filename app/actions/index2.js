
export function removeTodo (id) {
 return {
  type: 'REMOVE',
  id,
  completed: true
 };
}
