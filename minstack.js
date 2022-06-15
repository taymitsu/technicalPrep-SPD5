//https://leetcode.com/problems/min-stack/

//push(), pop(), top(), retrieve minimum element in constant time = getMin()


/* Steps:
1. Create minStack class with 2 arrays: stack and minstack
//1 stack will hold all values, other stack holds minimum values only 
2. Helper function that can access LAST item in stack
3. push(val)
4. pop()
5. top() or peek() returns last val from main stack
6. getMin() returns minStack
*/

//2: 
function last(stack) {
  return stack[stack.length - 1]
}

//1:
class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

//3: Pushes val to main stack AND most recent min val to minStack
push(val){
  if(this.minStack.length === 0 || x <= last(this.minStack)){
    this.minStack.push(val)
  }
  this.stack.push()
}

//4: Pop off main stack AND minStack
pop(){
  if(last(this.minStack) === last(this.stack)){
    this.minStack.pop()
  }
  return this.stack.pop()
}

//5: return last val from main stack
top(){
  return last(this.stack)
}

//6: return minStack
getMin(){
  return last(this.minStack)
}

}
