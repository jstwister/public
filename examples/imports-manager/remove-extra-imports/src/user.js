export default class User {
    constructor(jsonData) {
        this.name = jsonData.name || '';
        this.active = jsonData.active || 0;
    }
    setName(name) {
        this.name = name;
    }
    activate() {
        this.activate = 1;
    }
    deactivate() {
        this.activate = 0;
    }
}