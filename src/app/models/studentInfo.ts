export interface student {
  _id: string;
  rollNumber: string;
  scores: Array<scores>;
  id: string;
}

export interface scores {
  cgpa: string;
  sgpa: string;
  percentage: string;
}
