interface FormInterface {
  id: string;
  age: string;
  categories:
    | {
        pc?: boolean;
        playstation?: boolean;
        xbox?: boolean;
      }
    | undefined;
  description: string;
  genres:
    | {
        shooter?: string;
        arcade?: string;
        strategy?: string;
        racing?: string;
        fighting?: string;
        survive?: string;
      }
    | undefined;
  img: string;
  name: string;
  price: string;
}

export default FormInterface;
