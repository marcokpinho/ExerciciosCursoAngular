export class HoraAtualService {
  
  constructor() {}  
  
  getHora() {
    let data = new Date();
    return data.getHours().toString().concat(":",data.getMinutes().toString(),":",data.getSeconds().toString());
  }

  generateHora(delay, callback) {
    callback(this.getHora());
    setInterval(() => callback(this.getHora()), delay);
  }

}
