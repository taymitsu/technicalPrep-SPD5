//Find the middle of a Linked List 
//https://leetcode.com/problems/middle-of-the-linked-list/


//2 Pointers: Slow & Fast 
//Slow moves one node at a time 
//Fast moves 2 nodes at a time 
//Fast will reach end while Slow reaches middle 

//need to initialize 2 variables: slow, fast 

function findMid(start) {
  let fast = start;
  let slow = start;

  //create loop for changing variables
  while (fast && fast.next) {
    slow = slow.next; //moving 1 node at a time
    fast = fast.next.next; //moving 2 nodes at a time 
  }
  //Slow is at middle since Fast is at end, show slow
  return slow;
}