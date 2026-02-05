class YoutubeChannel {
    constructor() {
        this.subscribers = [];   // list of users
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update("You subscribed to the channel");
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(u => u !== user);
        user.update("You unsubscribed from the channel");
    }

    notify(message) {
        this.subscribers.forEach(user => {
            user.update(  message);
        });
    }
}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    update(data) {
        console.log(`${data}`);
    }
}



let channel = new YoutubeChannel();

let user1 = new User("Ali", 20);
let user2 = new User("Ahmed", 22);

channel.subscribe(user1);
channel.subscribe(user2);

channel.notify("New video uploaded 🚀");

channel.unsubscribe(user1);
channel.notify("Live stream started 🔴");
