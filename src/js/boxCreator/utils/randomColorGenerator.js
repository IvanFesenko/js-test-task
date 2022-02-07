import { numberToHex } from './numberToHex';
import { getRandomNumber} from './getRandomNumber';

export const randomColorGenerator = () => { 
  const red = numberToHex(getRandomNumber());
  const green = numberToHex(getRandomNumber());
  const blue = numberToHex(getRandomNumber());  

  return `#${red}${green}${blue}`;
}