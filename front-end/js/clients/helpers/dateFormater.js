 const dateTime = (date) => {
const d = new Date(date);
return d.toString().slice(0, 15);
 }
 export default dateTime;