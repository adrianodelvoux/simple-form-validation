import React, { useState, ReactNode } from 'react';
import * as yup from 'yup';

import { FormContextProvider } from './form-context';

interface IFormProps {
	initialValues: any;
	onSubmit: (values: any) => void;
	schema: yup.Schema<any>;
	children: ReactNode;
}

const Form = ({ initialValues, onSubmit, schema, children }: IFormProps) => {
	const [ values, updateValues ] = useState(initialValues);
	const [ submitted, setSubmitted ] = useState(false);

	const onSubmitForm = (event: React.FormEvent) => {
		event.preventDefault();

		setSubmitted(true);

		if (schema.isValidSync(values)) {
			onSubmit(values);
		}
	}

	return (
		<FormContextProvider value={{
			values,
			updateValues,
			submitted,
			schema,
		}}>
			<form onSubmit={onSubmitForm}>
				{ children }
			</form>
		</FormContextProvider>
	)
}

export default Form;