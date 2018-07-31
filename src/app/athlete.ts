export class Athlete {
  constructor(opts) {
    this.id = opts.number;
    this.name = opts.string;
    this.sport = opts.string;
    this.about = opts.string;
  }
}
