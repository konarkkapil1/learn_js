function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    
    this.start = () => {
        if(running){
            throw new Error("stopwatch is already running");
        }
        running = true;
        startTime = new Date();
    }

    this.stop = () => {
        if(!running){
            throw new Error("stopwatch is not running");
        }
        running = false;
        endTime = new Date();
        const seconds = (endTime - startTime) / 1000;
        duration += seconds;
    }

    this.reset = () => {
        if(running){
            throw new Error("stopwatch is running please stop and then reset");
        }
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    this.getDuration = () => {
        return duration;
    }
}