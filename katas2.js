function add (n,m) {
    entrega = n+m;
    return entrega;
  }
  
  
  
  
  function multiply (a,b) {
  
    let x = 0; 
                         
    for (let i = 0 ; i < b; i++) {
                 
      x = add (a,x)  
      
    }
  
    return x; 
    
  }
  
  
  function power (x,n) {
    
    let z = 1;
  
    for (let i = 1; i <= n ; i++) {
      
      z = multiply (x,z);
  
    }
  
    return z;
  }
  
  
  
  
  function factorial (numero) {
  
    let n = 0;
  
    for (let i = numero; i = 1; i--) {
      
      n = multiply (numero, i);
  
    }
  
    return n;
  
  }
  
  
  
  
