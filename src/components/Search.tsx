import * as React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { DangerButton, PrimaryButton } from './Button';
import { ErrorText } from './ErrorText';
import { InputControl } from './FormControl';
import FormGroup from './FormGroup';

const Container = styled.div`
  padding: 1rem 1rem;
`;

const SubmitButton = PrimaryButton.extend`
  margin-right: 0.5rem;
`;

interface FormValue {
  title: string;
  year: string;
}

const required = (value: string) => (value ? undefined : 'Required');
const mustBeYear = (value: string) =>
  /^(19|20)\d{2}$/.test(value) ? undefined : 'Format is not correct (1900-2099)';

const onSubmit = (values: FormValue) => {
  // TODO: server call
  // tslint:disable-next-line:no-console
  console.log(values);
};

const initialValues: FormValue = {
  title: null,
  year: null
};

const Search = () => (
  <Container>
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, invalid, pristine, form }) => (
        <form onSubmit={handleSubmit}>
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
                  <InputControl
                    id="year"
                    {...input}
                    error={meta.invalid && meta.dirty}
                    required={true}
                  />
                  {meta.invalid && meta.dirty && <ErrorText>{meta.error}</ErrorText>}
                </div>
              )}
            </Field>
          </FormGroup>
          <SubmitButton type="submit" disabled={invalid}>
            Search
          </SubmitButton>
          <DangerButton type="button" onClick={form.reset} disabled={pristine}>
            Reset
          </DangerButton>
        </form>
      )}
    </Form>
  </Container>
);
export default Search;
