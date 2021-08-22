let maps =  function(){
  this.collections  = {};
  this.values = 0;
  this.size =  function(){
    return this.count;
  }
  this.set =  function(key,value){
    this.collections[key] = value;
    this.count++;
  }
  this.has =  function(key){
    return (key in this.collections);
  }
    this.has =  function(key){
    return this.collections[key] ? this.collections[key] : null;
  }
  this.delete = function(key){
    if(key in this.collections){
      delete  this.collections[key];
      this.count--
    }
  }
  this.value =  function(){
    let result =  new Array();
    for (let key of Object.keys(this.collections)){
      result.push(this.collections[key])
    }
    return (result.length > 0) ? result : null;
  }
  this.clear =  function(){
this.collections = {};
this.count = 0;
  }
}

// http://localhost:19000/debugger-ui/