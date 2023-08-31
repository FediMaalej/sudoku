class EventEmitter {
  constructor(){
    this.listeners = {};
  }
     // key-value pair
    
      addListener(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return this;
      }
      on(event, fn) {
        return this.addListener(event, fn);
      }  
      removeListener (event, fn) {
        let lis = this.listeners[event];
        if (!lis) return this;
        for(let i = lis.length; i > 0; i--) {
          if (lis[i] === fn) {
            lis.splice(i,1);
            break;
          }
        }
        return this;
    }
    off(event, fn) {
      return this.removeListener(event, fn);
    }
      
    once(eventName, fn) {
      this.listeners[event] = this.listeners[eventName] || [];
      const onceWrapper = () => {
        fn();
        this.off(eventName, onceWrapper);
      }
      this.listeners[eventName].push(onceWrapper);
      return this;
    }
      
    emit(eventName, ...args) {
      let fns = this.listeners[eventName];
      if (!fns) return false;
      fns.forEach((f) => {
        f(...args);
      });
      return true;
    }
      
    listenerCount(eventName) {
      let fns = this.listeners[eventName] || [];
      return fns.length;
    }
      
    rawListeners(event) {
      return this.listeners[event];
    }
  }