interface CustomProps {
  updateName: (value: string) => void;
}

interface SearchInputInterface {
  updateValue: (value: string) => void;
  updateDisplay: (value: boolean) => void;
}

export { CustomProps, SearchInputInterface };
