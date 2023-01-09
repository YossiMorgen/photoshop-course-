class AppConfig{

     port = 3001;
     path = 'http://localhost:' + this.port;
     api = 'http://localhost:' + this.port + '/api/';
     posts = this.api + 'posts';
     videos = this.api + 'videos';
     auth = this.api + 'auth/'
     register = this.auth + "register"
     login = this.auth + "login"
}
const appConfig = new AppConfig();
export default appConfig; // Singleton