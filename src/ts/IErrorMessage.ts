export interface IErrorMessage {
  errors: Array<{
    location: string;
    msg: string;
    path: string;
    type: string;
    value: string;
  }>;
}
