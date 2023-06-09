import {
  FormStyled,
  FieldName,
  Input,
  Comments,
  FormField,
  FormTitle,
} from './FormTask.styled';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from 'utils/formatDate';
import { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { IoClose } from 'react-icons/io5';
import { CloseButton, AddTaskButton } from 'components/Base/Buttons.styled';

export const FormTaskEdit = ({ handleModal, handleAddTask }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleSubmit = (newTask, { resetForm }) => {
    // handleAddTask(newTask, resetForm);
  };

  const handleEscape = event => {
    if (event.code === 'Escape') {
      handleModal();
    }
  };

  const today = new Date();
  const dateInvoice = new Date(today.getTime() + 86_400_000);
  const datePayment = new Date(today.getTime() + 2 * 86_400_000);
  const dateETD = new Date(today.getTime() + 3 * 86_400_000);
  const dateETA = new Date(today.getTime() + 4 * 86_400_000);

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        qty: '',
        unit: 'pcs',
        dateOrder: formatDate(today),
        supplier: ' ',
        dateInvoice: formatDate(dateInvoice),
        datePayment: formatDate(datePayment),
        freight: 'Nova poshta',
        dateETD: formatDate(dateETD),
        dateETA: formatDate(dateETA),
        comments: ' ',
      }}
    >
      <FormStyled>
        <CloseButton type="button" onClick={handleModal}>
          <IoClose size="20" />
        </CloseButton>

        <FormTitle>Add new task</FormTitle>

        <FormField>
          <FieldName>Name</FieldName>
          <Input type="text" name="name" placeholder="name"></Input>
        </FormField>

        <FormField>
          <FieldName>Quantity</FieldName>

          <Input type="text" name="qty" placeholder="quantity"></Input>

          <Field as="select" name="unit">
            <option value="pcs">pcs</option>
            <option value="m">m</option>
            <option value="kg">kg</option>
          </Field>
        </FormField>

        <FormField>
          <FieldName>Order</FieldName>
          <Input type="text" name="dateOrder"></Input>
        </FormField>

        <FormField>
          <FieldName>Supplier</FieldName>
          <Input type="text" name="supplier"></Input>
        </FormField>

        <FormField>
          <FieldName>Invoice</FieldName>
          <Input type="text" name="dateInvoice"></Input>
        </FormField>

        <FormField>
          <FieldName>Payment</FieldName>
          <Input type="text" name="datePayment"></Input>
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
          <Input type="text" name="dateETD"></Input>
        </FormField>

        <FormField>
          <FieldName>ETA</FieldName>
          <Input type="text" name="dateETA"></Input>
          <p>{(dateETA - today) / 86_400_000}</p>
        </FormField>

        <FormField>
          <FieldName>Comments</FieldName>
          <Comments as="textarea" rows="4" name="comments"></Comments>
        </FormField>

        <AddTaskButton type="submit">Add</AddTaskButton>
      </FormStyled>
    </Formik>
  );
};
