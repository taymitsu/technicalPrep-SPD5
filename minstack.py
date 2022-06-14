class MinStack: 
  
  def __init__(self):
    self.stack = []
    self.min = []

    def push(self, val: int) -> None:
      #print('PUSH')
      #Checking if stack is empty loop
      
      #if empty

      #if not empty/else:

    
    def pop(self) -> None:
      #print('POP')
      self.stack.pop()
      self.min.pop()


    def top(self) -> int:
      #print('TOP')
      return self.stack[-1]

    
    def getMin(self) -> int:
      #print('MIN')
      return min(self.stack)

    





#Your MinStack object will be instantiated and called as such:
#obj = minStack()
#obj.push(val)
#obj.pop()
#param_3 = obj.top()
#param_4 = obj.getMin()