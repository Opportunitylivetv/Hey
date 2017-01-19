/**
 * @flow
 */

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

class Stickers {
  static getAll(): Array<Sticker> {
    return [
      new Sticker(
        'happy_party',
        require('./stickers/happy_party.png'),
      ),
    ];
  }
}

module.exports = Stickers;
