import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { SearchInput } from '../models/Search';
import { DangerButton, PrimaryButton } from './Button';
import { ErrorText } from './ErrorText';
import { InputControl } from './FormControl';
import FormGroup from './FormGroup';

const SubmitButton = PrimaryButton.extend`
  margin-right: 0.5rem;
`;

const required = (value: string) => (value ? undefined : 'Required');
const mustBeYear = (value: string) => {
  if (value) {
    return /^(19|20)\d{2}$/.test(value) ? undefined : 'Format is not correct (1900-2099)';
  }
  return undefined;
};

interface Props {
  onReset: () => void;
  onSubmit: (value: SearchInput) => void;
  inputs: SearchInput;
}

const SearchForm = ({ onSubmit, inputs, onReset }: Props) => {
  return (
    <Form onSubmit={onSubmit} initialValues={inputs}>
      {({ handleSubmit, invalid, form }) => (
        <form onSubmit={handleSubmit} noValidate={true}>
          <FormGroup>
            <label htmlFor="title">Title</label>
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <div>
                  <InputControl
                    id="title"
                    {...input}
                    required={true}
                    error={meta.invalid && meta.dirty}
                  />
                  {meta.invalid && meta.dirty && <ErrorText>{meta.error}</ErrorText>}
                </div>
              )}
            </Field>
          </FormGroup>
          <FormGroup>
            <label htmlFor="year">Year</label>
            <Field name="year" validate={mustBeYear}>
              {({ input, meta }) => (
                <div>
                  <InputControl id="year" {...input} error={meta.invalid && meta.dirty} />
                  {meta.invalid && meta.dirty && <ErrorText>{meta.error}</ErrorText>}
                </div>
              )}
            </Field>
          </FormGroup>
          <SubmitButton type="submit" disabled={invalid}>
            Search
          </SubmitButton>
          <DangerButton type="button" onClick={onReset}>
            Reset
          </DangerButton>
        </form>
      )}
    </Form>
  );
};
export default SearchForm;
