import React from "react";
import { useSelector } from "../hooks/use-selector";
import { languageSelector } from "../store/selectors";
import { translationMap } from "../constants/translates";

const I18nContext = React.createContext(undefined);

const I18nProvider = ({
  children,
}) => {
  const [language] = useSelector(languageSelector);

  const translate = (translationKey) => (translationMap[language]?.[translationKey]) ?? translationKey;

  return (
    <I18nContext.Provider value={translate}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.displayName = "I18nProvider";

export { I18nContext, I18nProvider };
