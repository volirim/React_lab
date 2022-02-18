interface CustomProps {
  category?: string;
  url: string;
}

interface SearchInputInterface {
  updateDisplay: (value: boolean) => void;
  category?: string;
  url: string;
}

export { CustomProps, SearchInputInterface };
