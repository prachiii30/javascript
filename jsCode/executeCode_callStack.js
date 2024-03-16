//javascript is single threaded here everything is a process
// 1. Javascript execution context 
//      1.1. global execution context (inside this(keyword)) inside window its window object
//      1.2. Function execution context 
//      1.3. eval execution context  - kind of property of global object
// eval() is generally considered a less preferred practice due to security and performance concerns.
//2 phases
//  1 Memory creation phase or creation phase - only memory is assigned to variables, identifiers no execution
//  2 Execution Phase  
// 2. calls (call stack) 
console.log(this)