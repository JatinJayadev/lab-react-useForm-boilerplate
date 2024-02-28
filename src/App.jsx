import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function App() {
  const [state, setState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    setState(true);
  };
  return (
    <div>

      <form onSubmit={handleSubmit(SubmitHandler)}>
        <div>{state ? 'Registration Successfull' : ''}</div>

        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="First Name.."
          {...register('firstName', {
            required: 'Please dont keep input feild empty',
          })}
        />


        {errors.firstName ? (<p>{errors.firstName.message}</p>) : ""}

        <label htmlFor="">Last Name</label>
        <input
          // required={true}
          type="text"
          placeholder="Last Name.."
          {...register('lastName', {
            required: 'Please dont keep input feild empty',
          })}
        />

        {errors.lastName ? (<p>{errors.lastName.message}</p>) : ""}

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email.."
          {...register('email', {
            required: "Please don't keep input field empty",
            validate: (value) => {
              if (value.includes('@')) {
                return true; // Valid email
              }
              return 'invalid email';
            },
          })}

        />
        {errors.email ? (<p>{errors.email.message}</p>) : ""}

        <label htmlFor="">Password</label>
        <input
          // required={true}
          type="password"
          placeholder="Password.."
          {...register('password', {
            required: "Please don't keep input field empty",
            minLength: {
              value: 5,
              message: 'Password must be more than 4 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot be more than 20 characters',
            },
          })}
        />

        {errors.password ? (<p>{errors.password.message}</p>) : ""}

        <input type="submit" value={'Register'} />
      </form >
      <DevTool control={control} />
    </div >
  );
}

export default App;