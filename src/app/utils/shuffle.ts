import { pets } from '../shelterHelp';
export function Shuffle(props: typeof pets) {
var j, temp;
const arr = props
for(var i = arr.length - 1; i > 0; i--){
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
return arr;
}