function solution(plans) {
    const ans = [];
    const last = [];
    let lastTime = 0;
    let plansIdx = 0;
    
    plans.sort((a, b) => a[1] > b[1] ? 1 : -1)
    plans = plans.map(plan => {
        const [h, m] = plan[1].split(':');
        plan[1] = h*60 + +m;
        plan[2] = +plan[2];
        return plan;
    })
        
    for(let i=0; i<plans.length; i++) {
        const [sub, start, use] = plans[i];
        
        
        if(i === plans.length -1) {
            ans.push(sub);
            while(last.length) {
                ans.push(last.pop()[0])
            }
            break;
        }
        
        const nextTime = plans[i+1][1];
        const thisTime = nextTime - start;
        
        if(thisTime < use) {
            last.push([sub, use-thisTime])
        }
        else {
            ans.push(sub);
            lastTime = thisTime - use;
            while(lastTime && last.length) {
                const [lastSub, lastUse] = last.pop();
                
                if(lastTime < lastUse) {
                    last.push([lastSub, lastUse-lastTime])
                    break;
                }
                else {
                    ans.push(lastSub);
                    lastTime -= lastUse;
                }
            }
        }
    }
    
    return ans;
}

function solution(plans) 
{
    const answer = [];
    const stop = [];

    plans = plans.map(v => { v[1] = v[1].split(":").reduce((acc, cur) => 60*Number(acc) + Number(cur)); v[2] = Number(v[2]); return v; }).sort((a, b) => a[1] - b[1]);

    let [curr, time, last] = plans[0];
    let i = 1;
    while(i < plans.length)
    {
        let next = plans[i];
        if(last > next[1] - time)
        {
            last -= next[1] - time;
            stop.push([curr, last]);
        }
        else
        {
            answer.push(curr);
            if(stop.length > 0)
            {
                const tmp = stop.pop();
                [curr, time, last] = [tmp[0], time+last, tmp[1]];
                continue;
            }
        }

        [curr, time, last] = next;
        i++;
    }

    answer.push(plans.pop()[0]);
    while(stop.length > 0)
        answer.push(stop.pop()[0]);

    return answer;
}