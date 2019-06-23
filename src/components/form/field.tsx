import React from 'react';
import * as yup from 'yup';
import update from 'immutability-helper';

import { FormContextConsumer } from './form-context';

interface IFieldProps {
	component: any;
	label: string;
	name: string;
}

const Field = ({ component: FieldComponent, name, ...props }: IFieldProps) => (
	<FormContextConsumer>
		{
			formContext => {
				const isValid = formContext && yup.reach(formContext.schema, name)
					.isValidSync(formContext.values[name]);
				const classNames = [];

				if (formContext && formContext.submitted && !isValid) classNames.push('error');

				return formContext && (
					<FieldComponent
						className={classNames.join(' ')}
						value={formContext.values[name]}
						onChange={(value: any) => formContext.updateValues(update(formContext.values, {
							[name]: { $set: value }
						}))}
						{...props}
					/>
				)
			}
		}
	</FormContextConsumer>
);

export default Field;