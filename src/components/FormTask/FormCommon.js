import {
  FieldName,
  Input,
  Qty,
  Unit,
  DateInput,
  Comments,
  FormField,
  ErrorStyled,
  DatePickerStyled,
} from './FormTask.styled';
import { Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

export const FormCommon = ({ dateOrder, setDateOrder }) => {
  // const DatepickerField = ({ field }) => (
  //   <div>
  //     <DatePicker
  //       dateFormat="dd.MM.yyyy"
  //       {...field}
  //       selected={dateOrder}
  //       onChange={date => setDateOrder(date)}
  //     />
  //   </div>
  // );

  return (
    <>
      <FormField>
        <FieldName>Name</FieldName>
        <Input type="text" name="name" placeholder="name"></Input>
        <ErrorStyled component="div" name="name" />
      </FormField>

      <FormField>
        <FieldName>Quantity</FieldName>

        <Qty type="text" name="qty" placeholder="quantity"></Qty>
        <ErrorStyled component="div" name="qty" />

        <Unit as="select" name="unit">
          <option value="pcs">pcs</option>
          <option value="m">m</option>
          <option value="kg">kg</option>
        </Unit>
      </FormField>

      <FormField>
        <FieldName>Order</FieldName>
        <Field type="text" name="dateOrder">
          {({ field }) => (
            <div>
              <DatePickerStyled
                dateFormat="dd.MM.yyyy"
                {...field}
                selected={dateOrder}
                onChange={date => setDateOrder(date)}
              />
            </div>
          )}
        </Field>
        <ErrorStyled component="div" name="dateOrder" />
      </FormField>

      <FormField>
        <FieldName>Supplier</FieldName>
        <Input type="text" name="supplier"></Input>
      </FormField>

      <FormField>
        <FieldName>Invoice</FieldName>
        <DateInput type="text" name="dateInvoice"></DateInput>
      </FormField>

      <FormField>
        <FieldName>Payment</FieldName>
        <DateInput type="text" name="datePayment"></DateInput>
      </FormField>

      <FormField>
        <FieldName>Freight</FieldName>

        <Input as="select" name="freight">
          <option value="Nova poshta">Nova poshta</option>
          <option value="FCA">FCA</option>
          <option value="DAP">DAP</option>
          <option value="SAT">SAT</option>
          <option value="Delivery">Delivery</option>
        </Input>
      </FormField>

      <FormField>
        <FieldName>ETD</FieldName>
        <DateInput type="text" name="dateETD"></DateInput>
      </FormField>

      <FormField>
        <FieldName>ETA</FieldName>
        <DateInput type="text" name="dateETA"></DateInput>
        <ErrorStyled component="div" name="dateETA" />
      </FormField>

      <FormField>
        <FieldName>Comments</FieldName>
        <Comments as="textarea" rows="4" name="comments"></Comments>
      </FormField>
    </>
  );
};
