/**
 * @flow
 */

class Feel {
  time: number;
  text: string;
  stickerName: string;

  constructor(time: number, text: string, stickerName: string) {
    this.time = time;
    this.text = text;
    this.stickerName = stickerName;
  }

  static fromObj(saved: Object): Feel {
    return new Feel(saved.time, saved.text, saved.stickerName);
  }

  getKey(): string {
    return this.stickerName + this.text + this.time;
  }
}

module.exports = Feel;
