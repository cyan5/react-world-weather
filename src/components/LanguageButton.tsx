// LanguageButton.tsx

type LanguageType = {
  language: string
}

const LanguageButton = ({ language }: LanguageType) => {
  return(
    <button>{language}</button>
  );
};

export default LanguageButton;
