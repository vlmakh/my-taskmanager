import { FormStyled, FormTitle } from './FormTask.styled';
import { formatDate } from 'utils/formatDate';
import { useState, useEffect, useContext } from 'react';
import { Formik } from 'formik';
import { IoClose } from 'react-icons/io5';
import { CloseButton, AddTaskFormButton } from 'components/Base/Buttons.styled';
import { schema } from './yupSchema';
import { FormCommon } from './FormCommon';
import { addTask } from 'utils/operations';
import { TaskContext } from 'utils/context';

export const FormTaskCopy = ({ handleCopyTask, task }) => {
  const [dateOrder, setDateOrder] = useState(new Date());
  const { dispatch } = useContext(TaskContext);

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleSubmit = newTask => {
    addTask({ ...newTask, dateOrder })
      .then(data => {
        if (data._id) {
          handleCopyTask();

          dispatch({ type: 'addTask', newTask: data });
        } else throw new Error();
      })
      .catch(e => console.log(e.message));
  };

  const handleEscape = event => {
    if (event.code === 'Escape') {
      handleCopyTask();
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
        name: task.name,
        qty: task.qty,
        unit: task.unit,
        dateOrder,
        supplier: task.supplier,
        dateInvoice: formatDate(dateInvoice),
        datePayment: formatDate(datePayment),
        freight: task.freight,
        dateETD: formatDate(dateETD),
        dateETA: formatDate(dateETA),
        comments: task.comments,
      }}
      validationSchema={schema}
    >
      <FormStyled>
        <CloseButton type="button" onClick={handleCopyTask}>
          <IoClose size="20" />
        </CloseButton>

        <FormTitle>Add new task</FormTitle>

        <FormCommon dateOrder={dateOrder} setDateOrder={setDateOrder} />

        <AddTaskFormButton type="submit">Add</AddTaskFormButton>
      </FormStyled>
    </Formik>
  );
};
