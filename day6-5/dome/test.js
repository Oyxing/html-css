self.onmessage = function(ev){
    for (var index = 0; index < 10; index++) {
        self.postMessage(ev.data + index +'stark')
    }
}