import React, { useState } from 'react';
import * as yup from 'yup';

import Button from '../../components/button';
import InputField from '../../components/input-field';
import FlexRow from '../../components/flex-row';
import { Form, Field } from '../../components/form';

import '../../assets/theme.scss';

interface IFormData {
    name: string;
    address: string;
    phone: string;
    price: number;
}

const formSchema = yup.object().shape<IFormData>({
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
    price: yup.number().min(1).required(),
});

const initialValues: IFormData = {
    name: '',
    address: '',
    phone: '',
    price: 0,
};


const FormSample = () => {
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ fomData, setFormData ] = useState<IFormData | null>(null);

    const sendFormData = (formData: IFormData) => {
        setIsSuccess(true);
        setFormData(formData);
    }
    
    if (isSuccess) {
        return (
            <div className="container">
                Form Sent Successfuly!
                <pre>
                    { JSON.stringify(fomData) }
                </pre>
            </div>
        )
    }

    return (
        <div className="container">
            <Form schema={formSchema} initialValues={initialValues} onSubmit={sendFormData}>
                <FlexRow>
                    <Field label="Full Name" name="name" component={InputField} />
                </FlexRow>

                <FlexRow>
                    <Field label="Address" name="address" component={InputField} />
                    <Field label="Phone" name="phone" component={InputField} />
                    <Field label="Price" name="price" component={InputField} />
                </FlexRow>

                <FlexRow>
                    <div>
                        <Button>Send Data</Button>
                    </div>
                </FlexRow>
            </Form>
        </div>
    );
}

export default FormSample;