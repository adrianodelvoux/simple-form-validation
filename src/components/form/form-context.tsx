import { createContext } from 'react';
import * as yup from 'yup';

interface IFormPropsContext {
	values: any;
	updateValues: any;
	submitted: boolean;
	schema: yup.Schema<any>;
};

const {
	Provider: FormContextProvider,
	Consumer: FormContextConsumer,
} = createContext<IFormPropsContext | null>(null);

export {
    FormContextProvider,
    FormContextConsumer,
};