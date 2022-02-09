interface FormInterface {
  id: string;
  age: string;
  categories:
    | {
        pc?: undefined;
        playstation?: undefined;
        xbox?: undefined;
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
