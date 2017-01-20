/**
 * @flow
 */

 const MAPPING = {
   announce: require('./stickers/announce.png'),
   bike: require('./stickers/bike.png'),
   birthday: require('./stickers/birthday.png'),
   chef: require('./stickers/chef.png'),
   coffee: require('./stickers/coffee.png'),
   creep: require('./stickers/creep.png'),
   cry: require('./stickers/cry.png'),
   dance: require('./stickers/dance.png'),
   death: require('./stickers/death.png'),
   drink: require('./stickers/drink.png'),
   drink_celebration: require('./stickers/drink_celebration.png'),
   drive: require('./stickers/drive.png'),
   drunk: require('./stickers/drunk.png'),
   frustrated: require('./stickers/frustrated.png'),
   gift: require('./stickers/gift.png'),
   hahaha: require('./stickers/hahaha.png'),
   happy_upside_down: require('./stickers/happy_upside_down.png'),
   heart_shirt: require('./stickers/heart_shirt.png'),
   hehe: require('./stickers/hehe.png'),
   hello: require('./stickers/hello.png'),
   hug: require('./stickers/hug.png'),
   hula: require('./stickers/hula.png'),
   ice_cream: require('./stickers/ice_cream.png'),
   kiss: require('./stickers/kiss.png'),
   kiss_spiderman: require('./stickers/kiss_spiderman.png'),
   kite: require('./stickers/kite.png'),
   lame: require('./stickers/lame.png'),
   lift: require('./stickers/lift.png'),
   love: require('./stickers/love.png'),
   nerd: require('./stickers/nerd.png'),
   picture: require('./stickers/picture.png'),
   pizza: require('./stickers/pizza.png'),
   rock_on: require('./stickers/rock_on.png'),
   sad: require('./stickers/sad.png'),
   scary: require('./stickers/scary.png'),
   sell_bananas: require('./stickers/sell_bananas.png'),
   sleep: require('./stickers/sleep.png'),
   snooze: require('./stickers/snooze.png'),
   spaghetti_kiss: require('./stickers/spaghetti_kiss.png'),
   star: require('./stickers/star.png'),
   sunbathe: require('./stickers/sunbathe.png'),
   sushi: require('./stickers/sushi.png'),
   swing: require('./stickers/swing.png'),
   waa: require('./stickers/waa.png'),
   war: require('./stickers/war.png'),
 };

class Sticker {
  name: string;
  image: any;

  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  getName(): string {
    return this.name;
  }

  getImage(): any {
    return this.image;
  }

}

export type StickerInstance = Sticker;

let _cache = null;
class Stickers {
  static getAll(): Array<Sticker> {
    if (!_cache) {
      _cache = Object.keys(MAPPING).map(
        stickerName => new Sticker(stickerName, MAPPING[stickerName]),
      );
    }
    return _cache;
  }
}

module.exports = Stickers;
