import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
   if (buttonName === '0' && obj.next === '0') {
     return {};
   }

   if (obj.operation) {
     if (obj.next) {
       return { next: obj.next + buttonName };
     }
     return { next: buttonName };
   }

   if (obj.next) {
     return {
       next: obj.next + buttonName,
       total: null,
     };
   }
   return {
     next: buttonName,
     total: null,
   };
 }