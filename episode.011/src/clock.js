export default class Clock {
    constructor(hour, minute) {
        this.hour = hour
        this.minute = minute
        this.getTime()
    }
    getTime(){
        return `${this.getHours()}:${this.getMinutes()}`
    }
    getHours(){
        if(this.hour >= 24){
            this.hour = this.hour % 24
        }
        return this.hour
    }

    getMinutes(){
        if(this.minute >= 60){
            this.hour += parseInt(this.minute/60)
            this.minute -= parseInt(this.minute/60) * 60
            return this.minute
        }
        if(this.minute < 0){
            this.hour -= parseInt(this.minute/60)
            this.minute -= parseInt(this.minute/60) * 60
            return this.minute
        }
        return this.minute
    }
    
}
