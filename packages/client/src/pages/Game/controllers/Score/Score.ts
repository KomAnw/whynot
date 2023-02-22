export class Score {
  static count = 0;

  static updateScore() {
    Score.count++;
  }

  static resetScore() {
    Score.count = 0;
  }
}
