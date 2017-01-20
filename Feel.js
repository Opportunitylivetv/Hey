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
}

module.exports = Feel;
