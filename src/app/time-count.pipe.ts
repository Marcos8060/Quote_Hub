import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let today = new Date()
    let todayWithTime:any = today.getTime();
    var dateDifference = Math.abs(value - todayWithTime)
    console.log(dateDifference);
    
    
    
    


    
    

    



    return null;
  }

}
