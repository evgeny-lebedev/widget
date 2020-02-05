import * as React from "react";
import { I18nContext } from "../contexts/i18n";

const useTranslate = () => [React.useContext(I18nContext)];

export { useTranslate };
